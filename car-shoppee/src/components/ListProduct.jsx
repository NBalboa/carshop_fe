import React from 'react'
import { Link } from 'react-router-dom'

function ListProduct({product, onDelete}) {


  return (
    <tr>
      <th scope="row">{product.id}</th>
      <td>{product.name}</td>
      <td>{product.brand}</td>
      <td>P{product.price}</td>
      <td className='text-wrap w-25' >{product.description}</td>
      <td>{product.stocks}</td>
      <td>{product.featured === 1 ? "Featured Product" : "Not Featured Product"}</td>
      <td>
        <button type="button" className="btn btn-primary m-2" style={{ width: '5rem', height: '2rem'}}><Link to={`/editproduct/:id`} className='text-decoration-none text-white'>Edit</Link></button>
        <button type="button" onClick={() => onDelete(product.id) } className="btn btn-danger" style={{ width: '5rem', height: '2rem'}} >Delete</button>
      </td>
    </tr>
  )
}

export default ListProduct