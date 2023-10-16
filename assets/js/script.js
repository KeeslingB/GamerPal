var storeApi = 'https://api.rawg.io/api/stores?key=15235aadda03481b8e49cf5d10936ba7';




fetch(storeApi)
.then(function(response){
  return response.json();
})
.then(function (data){
  console.log(data);
});




console.log(storeApi);






function getApi() {
  var requestUrl = ' https://rawg.io/apidocs/15235aadda03481b8e49cf5d10936ba7';
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++);
    console.log(data); 
  })
}

function searchForm() {
      
  let platform = document.forms["myForm"]["platform"].value;
  let genre = document.forms["myForm"]["genre"].value;   
  let meta = document.forms["myForm"]["meta"].value;  
  
  if (platform == "" & genre == "" & meta == "") {
  alert("Please Select Atleast One Criteria!");
  }
  else if (meta > 100)  {
  alert("Please select a number between 0 and 100"); 
  }
  else if (meta < 0)  {
  alert("Please select a number between 0 and 100");
  }
  else {
  alert("Here Are Your Games!");
 }
}
// function storesApi(requestUrl) {
// fetch(requestUrl)
// .then(function(response){
//   return response.json();
//   console.log(requestUrl);
// })
// // .then(function (data){
// //   var formOptions = document.getElementById('stores');
// //   for (var i = 0; i < requestUrl.length; i++) {
// //     var optionBtn = document.createElement('button');
// //     optionBtn.textContent = requestUrl[i];
// //     requestUrl.appendChild(optionBtn);
// //     console.log(data);
// //   }
// //   });
// };

// async function storeApi() {
// const response = await fetch('https://api.rawg.io/api/stores?key=15235aadda03481b8e49cf5d10936ba7');
// const stores = await response.json();
// console.log(stores);
// }
