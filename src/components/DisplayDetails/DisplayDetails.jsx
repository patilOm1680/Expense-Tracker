import React, { useContext, useState } from "react";
import "./DisplayDetails.css"
import Card from "../Cards/Card";
import UserContext from "../../Context/UserContext";

const DisplayDetails = () => {

  const {formData,setFormData,setOriginalFormData,searchItem,setInput,setEditIndex,originalFormData,setSearchItem,isAscending,setIsAscending} = useContext(UserContext);



  
  

  const handleSearch = (item) => {
    // console.log(AllData) 
    // console.log(originalFormData);
    const searchedItems = originalFormData.filter((ele) => {
      return ele.itemName.toLowerCase().includes(item.toLowerCase());
    });

    // console.log(searchedItems)
    setFormData(searchedItems);
  };
const handleErase = () => {
    // console.log('erasing');
    setSearchItem('');
    setFormData(originalFormData);

    // setSearchItem("");
    // console.log(formData)

  };
  const handleSearchChange = (event) => {
    // console.log(event.target.value);
    const value = event.target.value;
    setSearchItem(value);
    if (value !== "") {
      setSearchItem(event.target.value);
      handleSearch(searchItem);
      // event.target.value="";
    } else {
      setFormData(originalFormData);

    }

  }
  // sorting 
  
  const handleSort = () => {
    const sortedData = [...formData].sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return (isAscending) ? bDate - aDate : aDate - bDate;

    });

    // toast 
    // (isAscending? toast("Sorted in Ascending Order !"):toast("Sorted in Descending Order !"));

    setIsAscending(!isAscending);
    setFormData(sortedData);

  };

  return (
    <>
    
      <div className="displayHeading">

        <input type="text" name="" value={searchItem} id="searchInp" placeholder="Search Items" onChange={handleSearchChange} />

      <i class="fa-solid fa-eraser fa-lg" id="eraseIcon" onClick={handleErase}></i>

      <button className="searchIcon" onClick={() => { handleSearch(searchItem) }}><i class="fas fa-search"></i></button>

      <i class="fa-solid fa-sort fa-lg" id="sortIcon"
        onClick={handleSort}></i>
      </div>
      


      <div className="details-container">
        {formData.length === 0 ? (
          <div className='emptyData'><p>No items added yet.</p></div>
          
        ) : (
          formData.map((item, index) => (
             (<Card 
              item={item}
              index={index}
             />)
          ))
        )}
      </div>
    </>

  );
};

export default DisplayDetails;