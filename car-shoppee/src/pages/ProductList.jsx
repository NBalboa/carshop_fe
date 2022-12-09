import React from "react";
import NavAdmin from "../components/NavAdmin";
import { useState, useEffect } from "react";
import axios from "axios";
import ListProduct from "../components/ListProduct";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState([]);

  const handleData = async function () {
    const { data } = await axios.get("http://localhost:3000/api/product/");
    console.log(data);
    setData(data);
  };

  const handleDelete = async function (id) {
    const { data } = await axios.delete(
      `http://localhost:3000/api/product/delete/${id}`
    );
    console.log(data);
    handleData()
    // setData(data);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="container-fluid">
      <NavAdmin />
      <h1>All Products</h1>
      <div className="container-fluid">
        <table className="table table-dark table-striped table-hover mx-1">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Stocks</th>
              <th scope="col">Featured</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>P{item.price}</td>
                <td className="text-wrap w-25">{item.description}</td>
                <td>{item.stocks}</td>
                <td>
                  {item.featured === 1
                    ? "Featured Product"
                    : "Not Featured Product"}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary m-2"
                    style={{ width: "5rem", height: "2rem" }}
                  >
                    <Link
                      to={`/editproduct/${item.id}`}
                      className="text-decoration-none text-white"
                    >
                      Edit
                    </Link>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger"
                    style={{ width: "5rem", height: "2rem" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
