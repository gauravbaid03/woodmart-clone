function fetchUsers() {
  let data;
  const linkOfJsonFile = 'https://jsonplaceholder.typicode.com/users';
  fetch(linkOfJsonFile)
    .then((response) => response.json())
    .then(content => data = content);

  const functionReturningPopulatedData = () => data;

  return functionReturningPopulatedData;
}

export default fetchUsers;
