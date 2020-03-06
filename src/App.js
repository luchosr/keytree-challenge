import React, { useState, useEffect } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import { getRepos, getUserData } from "./api/github-api";

//Up to you, probably it should include an input to enter the username,
// one area to display the repositories of the user
// and another area to display the organisations

// https://api.github.com/users/luchosr/repos?per_page=250
const App = () => {
  useEffect(() => {
    console.log(getRepos("luchosr"));
  });
  return (
    <div className="App">
      <h1>Keytree</h1>

      <TextField label="Enter Github User" variant="outlined" />
    </div>
  );
};

export default App;
