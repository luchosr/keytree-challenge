import axios from "axios";

// Documentation is at https://developer.github.com/v3/
const BASE_URL = "https://api.github.com";

export { getRepos, getUserData };

const getRepos = async username => {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return await axios.get(url).then(response => response.data);
  // .then(response => response.json());
};

const getUserData = async username => {
  return await axios
    .all([
      axios.get(`${BASE_URL}/users/${username}`),
      axios.get(`${BASE_URL}/users/${username}/orgs`)
    ])
    .then(([user, orgs]) => ({
      user: user.data,
      orgs: orgs.data
    }));
};
