import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productActions'

const EditProduct = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    // Nuevo state de producto
    const [ product, setProduct ] = useState({
        name: '',
        price: ''
    })

    // Producto a editar
    const productToEdit = useSelector(state => state.products.editProduct);

    // Llenar el state automáticamente
    useEffect( () => {
        setProduct(productToEdit);
    }, [productToEdit])

    // Leer los datos del formulario
    const onChangeForm = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const { name, price } = product;

    const submitEditProduct = e => {
        e.preventDefault();

        dispatch( editProductAction(product) );

        history.push('/')
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar producto
                        </h2>
                        <form
                            onSubmit={submitEditProduct}
                        >
                            <div className="form-group">
                                <label> Nombre de producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de producto"
                                    name="name"
                                    value={name}
                                    onChange={onChangeForm}
                                />
                            </div>
                            <div className="form-group">
                                <label> Precio  de producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio de producto"
                                    name="price"
                                    value={price}
                                    onChange={onChangeForm}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Guardar cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditProduct;