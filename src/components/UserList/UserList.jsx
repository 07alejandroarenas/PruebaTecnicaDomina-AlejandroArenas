import React from 'react'

const UserList = ({users}) => {
    if (!Array.isArray(users)) {
        console.error('Expected users to be an array');
        return null;
      }
  return (
    <ul>
      {
        users.map(user => (
            <li key={user.id}>{user.name}</li> //Verificar si es necesario el email o si se usa en otra li. O si mejor no se usa.
        ))      }
    </ul>
  )
}

export default UserList
