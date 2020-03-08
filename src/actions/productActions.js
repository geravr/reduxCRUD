import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE
} from '../types';

//Crear nuevos productos
export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch( addProduct() );

        try {
            dispatch( addProductSuccess(product) );
        } catch (error) {
            dispatch( addProductFailure(true) );
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
    type: ADD_PRODUCT_SUCCESS,
    payload: error
});