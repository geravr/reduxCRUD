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

// cada reducer tiene su propio state
const initialState = {
    products: [],
    error: false,
    loading: false,
    deleteProduct: null
}

export default function(state = initialState, action) {
    switch (action.type) {

        case START_PRODUCTS_DOWNLOAD:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case SUCCESS_ADD_PRODUCT:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
            case FAILURE_ADD_PRODUCT:
            case FAILURE_PRODUCTS_DOWNLOAD:
            case FAILURE_PRODUCT_DELETE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
            case SUCCESS_PRODUCTS_DOWNLOAD:
                return {
                    ...state,
                    loading: false,
                    error: false,
                    products: action.payload
                }
            case GET_PRODUCT_DELETE:
                return {
                    ...state,
                    deleteProduct: action.payload
                }
            case SUCCESS_PRODUCT_DELETE:
                return {
                    ...state,
                    products: state.products.filter( product => product.id !== state.deleteProduct ),
                    deleteProduct: null
                }
        default:
            return state;
    }
};