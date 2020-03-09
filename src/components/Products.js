import React, { Fragment, useEffect } from 'react';
import Product from './Product';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../actions/productActions';

const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        // Consultar API
        const  loadProducts = () => dispatch( getProductsAction() );
        loadProducts();

    }, [])

    // Obtener el state desde redux
    const products = useSelector ( state => state.products.products );

    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { products.length === 0 ? 'No hay productos' : (
                        products.map((product => (
                            <Product 
                                key={product.id}
                                product={product}
                            />
                        )))
                    )}
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Products;