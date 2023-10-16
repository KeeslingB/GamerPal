var storeApi = 'https://api.rawg.io/api/stores?key=15235aadda03481b8e49cf5d10936ba7';




fetch(storeApi)
.then(function(response){
  return response.json();
})
.then(function (data){
  console.log(data);
});




console.log(storeApi);




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


