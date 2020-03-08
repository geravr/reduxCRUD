import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE
} from '../types';

// cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
};