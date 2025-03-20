import React, { useState, useEffect } from "react";
import axios from "axios";
import { debounce } from "lodash";
import "./SearchBar.css"; // Import the new CSS

const SearchBar = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleSearch = debounce((e) => {
    setSearchTerm(e.target.value);
  }, 300);

  return (
    <div className="search-container">
      <input type="text" placeholder="Search Users..." onChange={handleSearch} />
      <ul>
        {users
          .filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBar;
