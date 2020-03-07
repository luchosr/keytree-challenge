import React, { useState } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import UserRepos from "./userRepos/UserRepos";

//Up to you, probably it should include an input to enter the username,
// one area to display the repositories of the user
// and another area to display the organisations

// https://api.github.com/users/luchosr/repos?per_page=250
const App = () => {
  const [user, setUser] = useState(false);
  let value = false;
  const handleSubmit = event => {
    event.preventDefault();
    setUser(value);
  };

  const handleChange = event => {
    value = event.target.value;
    value === "" && setUser(false);
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
      {user && <UserRepos user={user} />}
    </div>
  );
};

export default App;
