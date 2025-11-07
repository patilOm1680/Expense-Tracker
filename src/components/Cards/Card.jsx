import React, { useContext } from 'react';
import './Card.css';
import UserContext from '../../Context/UserContext';

const Card = ({ item, index }) => {

  const {formData,setFormData,setOriginalFormData,setInput,setEditIndex}= useContext(UserContext);

  const handleDelete = (index) => {
    const updatedData = formData.filter((ele, i) => i !== index);
    setFormData(updatedData);


    localStorage.removeItem("ExpenseData");
    localStorage.setItem("ExpenseData", JSON.stringify(updatedData));


    // console.log(formData)
    setOriginalFormData(updatedData);

  };


  const handleEdit = (index) => {
    setInput(formData[index]);
    setEditIndex(index);
  };
  return (
    <div className="card" key={index}>
      <h2 className="card-title">{item.itemName}</h2>

      <div className="card-details">
        <p><b>Date:</b> {item.date}</p>
        <p>
          <b>Description:</b> {item.description}
          </p>
        <p><b>Amount:</b> &#8377;{item.price}</p>
      </div>

      <div className="btn-group">
        <button onClick={() => handleEdit(index)} className="btn btn-edit">
          <i className="fas fa-edit"></i> Edit
        </button>

        <button onClick={() => handleDelete(index)} className="btn btn-delete">
          <i className="fa-solid fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
