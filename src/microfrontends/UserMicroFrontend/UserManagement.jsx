import React, { useEffect, useState } from 'react'
import UserSearch from '../../components/UserSearch/UserSearch';
import UserList from '../../components/UserList/UserList';
import Pagination from '../../components/Pagination/Pagination';

const UserManagement = () => {
  const [allUsers, setAllUsers] = useState({});
  const [filteredUsers, setFilteredUsers] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, ] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setAllUsers(data);
        setFilteredUsers(data);
        console.log(data)
        //setTotalPages(Math.ceil(response.data.length / 10)); 
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (Array.isArray(allUsers)) {
      const results = allUsers.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(results);
      //setTotalPages(Math.ceil(results.length / 10)); 
    }
  }, [searchTerm, allUsers]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const usersToDisplay = Array.isArray(filteredUsers)
  ? filteredUsers.slice((currentPage - 1) * 10, currentPage * 10)
  : [];
  return (
    <div>
      <UserSearch onSearch={handleSearch} />
      <UserList users={usersToDisplay} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default UserManagement;