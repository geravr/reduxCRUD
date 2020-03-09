import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/productActions';

const Product = ({product}) => {
    const {name, price, id} = product;

    const dispatch = useDispatch();

    // Confirmar si desea eliminar el producto
    const confirmDeleteProduct = id => {

        //preguntar al usuario
        Swal.fire({
            title: '¿Estás segur@?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Si, eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                // pasarlo al action
                dispatch( deleteProductAction(id))

            }
          })

    }

    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">${price}</span></td>
            <td className="acciones">
                <Link to={`/product/edit/${id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDeleteProduct(id)}
                >Eliminar </button>
            </td>
        </tr>
     );
}
 
export default Product;