const checkUser = (username, response) => {
  let isUserValid = false;
  response.map((data) => {
    if (data.username === username) {
      isUserValid = true;
    }
    return null;
  });
  return isUserValid;
};

export default checkUser;
