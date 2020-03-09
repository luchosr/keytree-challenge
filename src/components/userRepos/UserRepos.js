import React, { useState, useEffect } from "react";
import { getRepos } from "../../api/github-api";
import CircularProgress from "@material-ui/core/CircularProgress";

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
      .catch(error => {
        seterror(error);
        console.error(error);
      })
      .finally(() => setisLoading(false));
    console.log();
  };

  return (
    <div>
      {isLoading && <CircularProgress />}
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
