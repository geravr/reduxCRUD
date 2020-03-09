import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    START_PRODUCTS_DOWNLOAD,
    SUCCESS_PRODUCTS_DOWNLOAD,
    FAILURE_PRODUCTS_DOWNLOAD
} from '../types';

// cada reducer tiene su propio state
const initialState = {
    products: [],
    error: false,
    loading: false,
}

export default function(state = initialState, action) {
    switch (action.type) {

        case START_PRODUCTS_DOWNLOAD:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
            case ADD_PRODUCT_FAILURE:
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
        default:
            return state;
    }
};