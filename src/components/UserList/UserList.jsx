import React from 'react'
import './UserList.css' // Asegúrate de tener este archivo CSS para los estilos

const UserList = ({users}) => {
    if (!Array.isArray(users)) {
        console.error('Expected users to be an array');
        return null;
      }
  return (
    <ul className='user-list'>
      {
        users.map(user => (
            <li key={user.id}> <span className='user-title'> {user.name} </span></li> //Verificar si es necesario el email o si se usa en otra li. O si mejor no se usa.
        ))      }
    </ul>
  )
}

export default UserList
