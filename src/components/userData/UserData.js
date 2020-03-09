import React, { useState, useEffect } from "react";
import { getUserData } from "../../api/github-api";
import MediaCard from "../mediaCard/MediaCard";
import CircularProgress from "@material-ui/core/CircularProgress";

const UserData = ({ user }) => {
  const [isLoading, setisLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [error, seterror] = useState(false);

  useEffect(() => {
    fetchUserData(user);
  }, [user]);

  const fetchUserData = async user => {
    setisLoading(true);
    await getUserData(user)
      .then(response => {
        setUserData(response.user);
      })
      .catch(error => {
        seterror(error);
        console.error(error);
      })
      .finally(() => setisLoading(false));
  };

  return (
    <div>
      {isLoading && <CircularProgress />}
      {error && <h2 style={{ color: "red" }}>uups tenemos un error</h2>}
      {/* <h2>`name ${userData.user.login}`</h2> */}
      {!error && (
        <MediaCard
          profile_image={userData.avatar_url}
          login={userData.login}
          name={userData.name}
        />
      )}
    </div>
  );
};

export default UserData;
