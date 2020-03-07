import React, { useState, useEffect } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import { getRepos, getUserData } from "./api/github-api";

//Up to you, probably it should include an input to enter the username,
// one area to display the repositories of the user
// and another area to display the organisations

// https://api.github.com/users/luchosr/repos?per_page=250
const App = () => {
  const [user, setUser] = useState(null);
  let value = null;
  const handleSubmit = event => {
    event.preventDefault();
    setUser(value);
  };

  const handleChange = event => {
    value = event.target.value;
  };
  return (
    <div className="App">
      <h1>Keytree</h1>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          label="Enter Github User"
          variant="outlined"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default App;
