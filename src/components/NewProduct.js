import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions de redux
import { createNewProductAction } from '../actions/productActions';

const NewProduct = () => {

    //state (local) del componente
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    // utilizar usedispatch y te crea una función
    const dispatch =  useDispatch();

    // manda a llamar el action de productAction
    const addProduct = product => dispatch( createNewProductAction(product) )

    // Cuando el usuario haga submit
    const submitNewProduct = e => {
        e.preventDefault();

        // validar formulario
        if (name.trim() === '' || price <= 0) {
            return;
        }

        // si no hay errores

        // crear el nuevo producto
        addProduct({
            name,
            price
        });
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>
                        <form
                        onSubmit={submitNewProduct}
                        >
                            <div className="form-group">
                                <label> Nombre de producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de producto"
                                    name="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
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
                                    onChange={e => setPrice( Number(e.target.value))}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProduct;