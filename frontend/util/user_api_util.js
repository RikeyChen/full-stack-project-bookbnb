const fetchUser = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users',
  })
);

export default fetchUser;
