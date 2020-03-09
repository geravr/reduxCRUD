import {
    ADD_PRODUCT,
    SUCCESS_ADD_PRODUCT,
    FAILURE_ADD_PRODUCT,
    START_PRODUCTS_DOWNLOAD,
    SUCCESS_PRODUCTS_DOWNLOAD,
    FAILURE_PRODUCTS_DOWNLOAD,
    GET_PRODUCT_DELETE,
    SUCCESS_PRODUCT_DELETE,
    FAILURE_PRODUCT_DELETE
} from '../types';

import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

//Crear nuevos productos
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );

        try {
            // Insertar a la API
            await axiosClient.post('/products', product)

            // Si todo sale bien, actualizar el state
            dispatch( addProductSuccess(product) );

            // Alerta de éxito
            Swal.fire(
                'Correcto',
                'El Producto se agregó correctamente',
                'success'
            )
        } catch (error) {
            console.log(error)
            // Si hay un error, cambiar el state
            dispatch( addProductFailure(true) );

            // Alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Fallido',
                text: 'Hubo un problema al agregar el producto'
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

// Si el producto, se guarda en la base de datos
const addProductSuccess = product => ({
    type: SUCCESS_ADD_PRODUCT,
    payload: product
});

// Si hay un error
const addProductFailure = error => ({
    type: FAILURE_ADD_PRODUCT,
    payload: error
});

// Función que descarga productos de la db
export function getProductsAction() {
    return async (dispatch) => {
        dispatch( downloadProducts() );

        try {
            const response = await axiosClient.get('/products');
            dispatch( successProductsDownload(response.data) );
        } catch (error) {
            console.log(error)
            dispatch( failureProductsDownload() );
        }
    }
}

const downloadProducts = () => ({
    type: START_PRODUCTS_DOWNLOAD,
    payload: true
});

const successProductsDownload = products => ({
    type: SUCCESS_PRODUCTS_DOWNLOAD,
    payload: products
});

const failureProductsDownload = () => ({
    type: FAILURE_PRODUCTS_DOWNLOAD,
    payload: true
});

// Selecciona y elimina producto
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch(getProductDelete(id));
        
        try {
            const result = await axiosClient.delete(`/products/${id}`);
            dispatch( successProductDelete() );

            //si se elimina, mostrar alerta
            Swal.fire(
                '¡Eliminado!',
                'El producto ha sido eliminado.',
                'Éxito'
            )
        } catch (error) {
            console.log(error);
            dispatch( failureProductDelete() );
        }
    }
}

const getProductDelete = id => ({
    type: GET_PRODUCT_DELETE,
    payload: id
});

const successProductDelete = () => ({
    type: SUCCESS_PRODUCT_DELETE
});

const  failureProductDelete = () => ({
    type: FAILURE_PRODUCT_DELETE,
    payload: true
})