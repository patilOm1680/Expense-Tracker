import React, { useContext } from "react";
import "./FormComponent.css"
import UserContext from "../../Context/UserContext";
import { successMsg } from "../../constants/constants"

import { toast } from 'react-toastify';

const FormComponent = () => {

  const {input,setInput,editIndex,setEditIndex,formData,setFormData,setOriginalFormData}=useContext(UserContext);

  const handleAddOrEdit = (event) => {
    event.preventDefault();

    // if (!input.date || !input.itemName || !input.description || !input.price) {
    //   alert('Please fill all fields!');
    //   return;
    // }

    let updatedData;

    if (editIndex !== null) {
      updatedData = [...formData];
      updatedData[editIndex] = input;
      setEditIndex(null);
    } else {
      updatedData = [...formData]
      updatedData.push(input)
      // updatedData=[...formData,input]
      toast.success(`${successMsg}`, {
        autoClose: 1500
      })

      // toast.success("Expense added successfully !",{ position: "top-center" })
    }


    setFormData(updatedData);
    // console.log(formData)
    localStorage.setItem("ExpenseData", JSON.stringify(updatedData));

    setOriginalFormData(updatedData);
    // console.log(originalFormData)

    setInput({
      date: '',
      itemName: '',
      description: '',
      price: ''
    });
  };
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <>
      <img src="https://www.moneypatrol.com/moneytalk/wp-content/uploads/2023/07/budget557.png" alt="Donation Form Illustration" class="formImage" />

      <form onSubmit={handleAddOrEdit} className="form-container">

      <div className="DateAndName">
         <div className="innerDateAndName">
          <label htmlFor="date">Date*</label>
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={input.date}
            onChange={handleChange}
            required
          />

        </div>


      <div className="innerDateAndName">
        <label htmlFor="">Item Name*</label>
        <input
          type="text"
          name="itemName"
          placeholder="Enter Item name"
          autoComplete="off"
          value={input.itemName}
          onChange={handleChange}
          required
        />
      </div>
      </div>
        <label className="ExpenceAndDes" htmlFor="description">Description*</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          autoComplete="off"
          id="desc"
          value={input.description}
          onChange={handleChange}
          required
        />

        <label className="ExpenceAndDes" htmlFor="expenditure">Expenditure*</label>
        <input
          type="number"
          name="price"
          placeholder="Enter Amount"
          autoComplete="off"
          id="expenditure"
          value={input.price}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-add">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>
    </>

  );
};

export default FormComponent;