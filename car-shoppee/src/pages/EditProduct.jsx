import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import NavAdmin from "../components/NavAdmin";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function EditProduct() {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stocks, setStocks] = useState("");
    const [featured, setFeatured] = useState(false);
    const [category, setCategory] = useState("");

    const navigate = useNavigate()

    let {id} = useParams()
    console.log(id)

    const handleData = async function() {
        const {data} = await axios.get(`http://localhost:3000/api/product/${id}`)
        console.log(data[0])
        setName(data[0].name)
        setBrand(data[0].brand)
        setPrice(data[0].price)
        setStocks(data[0].stocks)
        setDescription(data[0].description)
        if(data[0] === 1){
            setFeatured(true)
        }
        else{
            setFeatured(false)
        }
        setCategory(data[0].category)

    }



    useEffect(() => {
      handleData();
  }, [])


  const handleSubmit = async function (e) {
    e.preventDefault()



    const updateDetais = {
        name: name,
        brand: brand,
        price: price,
        description: description,
        stocks: stocks,
        featured: featured,
        category: category
    }

    try {
        await axios.put(
            `http://localhost:3000/api/product/edit/${id}`, updateDetais
          );
        navigate('/productlist')
    
    }catch(err) {
        console.log(err)
    }


    
    
    // setData(data);
  };


  return (
    <div>
      <NavAdmin />
      <form className="container mx-auto row g-3 mt-5" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control" id="inputEmail4" value={name}
              onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Brand</label>
          <input type="text" className="form-control" id="inputPassword4" value={brand}
              onChange={(e) => setBrand(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" id="inputEmail4" value={price}
              onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Stocks</label>
          <input type="number" className="form-control" id="inputPassword4" value={stocks}
              onChange={(e) => setStocks(e.target.value)} />
        </div>
        <div className="input-group">
          <span className="input-group-text">Description</span>
          <textarea value={description}
              onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" checked={featured}
              onChange={(e) => setFeatured(e.target.checked)} />
            <label className="form-check-label">
              Featured
            </label>
          </div>
        </div>
        <select className="form-select" aria-label="Default select example" value={category}
              onChange={(e) => setCategory(e.target.value)}>
            <option value="clothing">Paint</option>
            <option value="electronics">Wheels</option>
            <option value="home">Spray</option>
        </select>
        <button type="submit" style={{ width: '8rem', height: '3rem'}}>Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;
