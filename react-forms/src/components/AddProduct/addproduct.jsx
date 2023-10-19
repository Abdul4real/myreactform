import React, { useState } from 'react';
import "./addproduct.css"
const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    console.log(formData);
  };
   return (
      <div className="kh">
        <span className="th"><b>Add Product Form Application</b></span>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter product name" value={formData.name} onChange={handleChange} className="ih" />
          <input type="text" name="description" placeholder="Enter product description" value={formData.description } onChange={handleChange} className="ih" />
          <input type="text" name="category" placeholder="Enter product category" value={formData.category} onChange={handleChange} className="ih" />
          <input type="number" name="quantity" placeholder="Select product  quantity" value={formData.quantity} onChange={handleChange} className="ih" />
          <input type="number" name="price" placeholder="Select product price" value={formData.price} onChange={handleChange} className="ih" />
          <div className='btn-ctn'>
          <button type="submit" className="bh">Submit :)</button>
          </div>

        </form>
      </div>
    );
};
export default AddProduct;
