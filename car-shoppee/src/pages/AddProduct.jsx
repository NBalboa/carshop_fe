import React, { useState, useEffect } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stocks, setStocks] = useState("");
  const [featured, setFeatured] = useState(false);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    // upload image to server and save file path to imageUrl state
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      fetch("http://localhost:3000/api/upload", { method: "POST", body: formData })
        .then((res) => res.json())
        .then((data) => setImageUrl(data.imageUrl));
    }
  }, [image]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add product to database or store
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Brand:
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Stocks:
        <input
          type="number"
          value={stocks}
          onChange={(e) => setStocks(e.target.value)}
        />
      </label>
      <label>
        Featured:
        <input
          type="checkbox"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
        />
      </label>
      <label>
        Image:
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="home">Home</option>
        </select>
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
