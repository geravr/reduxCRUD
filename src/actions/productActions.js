import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE
} from '../types';

//Crear nuevos productos
export function createNewProduct() {
    return () => {
        console.log('desde action')
    }
}