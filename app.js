// create a function and following the progressions inside the function.
let info = [];
function getData() {
  const getMessage = document.getElementById('message');
  // Progression 1: Create a promise call which fetches data
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      console.log(response);
      return response.json();
    })
    // Progression 2: Display the fetched data in the form of list
    .then((ans) => {
      console.log('Second Response', ans);
      ans.forEach((user) => {
        var player = `<div class="player">
  <div class="strength">Name : ${user.name}</div>
  <div>Email   : ${user.email}</div>
  <div>Phone   : ${user.phone}</div>
  <div>Website : ${user.website}</div>
  <div>Company : ${user.company.name}</div>
  <div>City    : ${user.address.city}</div>
  <div>Zipcode : ${user.address.zipcode}</div>
 </div>`;
        info.push(player);
      });
      info.forEach((element) => {
        getMessage.innerHTML += element;
      });
    })
    // Progression 3: When the promise call is rejected then throw an error
    .catch((error) => {
      console.log('Promise rejected.');
      console.log(error.message);
    });
}
