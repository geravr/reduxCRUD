import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
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
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

// Si hay un error
const addProductFailure = error => ({
    type: ADD_PRODUCT_FAILURE,
    payload: error
});