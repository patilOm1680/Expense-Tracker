import React, { useState } from 'react'
import UserContext from './UserContext'
const UserContextProvider = ({children}) => {
     const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("ExpenseData")) || []);
    const [originalFormData, setOriginalFormData] = useState([...formData]);
    const [editIndex, setEditIndex] = useState(null);
    const [input, setInput] = useState({
    date: '',
    itemName: '',
    description: '',
    price: '',
  });
  const [searchItem, setSearchItem] = useState('');
  const [isAscending, setIsAscending] = useState(true);

  return (
    <UserContext.Provider value={{formData,
    setFormData,
    originalFormData,
    setOriginalFormData,
    editIndex,
    setEditIndex,
    input,
    setInput,
    searchItem,
    setSearchItem,
    isAscending,
    setIsAscending
    }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
