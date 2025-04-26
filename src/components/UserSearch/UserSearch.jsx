import React, { useState } from 'react'

const UserSearch = ({onSearch}) => {

    const [name, setName] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value)
        
        setName(e.target.value);
        console.log('name', name)
    }

    const handleSearch = () => {
        onSearch(name);
    }

  return (
    <div>
      <input 
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder='Buscar usuario...'
       />
       <button onClick={handleSearch}> Buscar </button>
    </div>
  )
}

export default UserSearch;
