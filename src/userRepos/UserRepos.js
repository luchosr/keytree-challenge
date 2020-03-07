import React, { useState, useEffect } from "react";
import { getRepos, getUserData } from "../api/github-api";

const UserRepos = ({ user }) => {
  const [isLoading, setisLoading] = useState(false);
  const [reposData, setReposData] = useState([]);
  const [error, seterror] = useState(false);

  useEffect(() => {
    fetchRepos(user);
  }, []);

  const fetchRepos = async user => {
    setisLoading(true);

    await getRepos(user)
      .then(response => {
        console.log("response data", response);
        setReposData(response);
      })
      .catch(error => seterror(error))
      .finally(() => setisLoading(false));
    console.log();
  };

  return (
    <div>
      {isLoading && <h2 style={{ color: "blue" }}>loading ....</h2>}

      {error && <h2 style={{ color: "red" }}>uups tenemos un error</h2>}
      <ul>
        {!error &&
          reposData.length > 0 &&
          reposData.map(repo => <li key={repo.id}>{repo.name}</li>)}
      </ul>
    </div>
  );
};

export default UserRepos;
