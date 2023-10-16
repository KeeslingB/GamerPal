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

gameTitle = 'grand-theft-auto-v';

function getApiLinks() {
  var requestUrl = 'https://api.rawg.io/api/games/' + gameTitle + '/stores?key=' + myKey;
  // 'https://api.rawg.io/api/games?genres=2&ordering=-rating&key=07408fb112b44434827e8440cf06fe69';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // for (var i = 0; i < data.length; i++) {
      //   if (data.results[i].store_id == '1') {
      //     console.log(data);
      //   }
      // }
      // console.log(data.results[2].url);
      // for (var i = 0; i < data.length; i++) {
      //   console.log(data);
      // }

      console.log(data.results[2]);
    })
}

getApiLinks();

function searchForm() {

  let platform = document.forms["myForm"]["platform"].value;
  let genre = document.forms["myForm"]["genre"].value;
  let meta = document.forms["myForm"]["meta"].value;

  if (platform == "" & genre == "" & meta == "") {
    alert("Please Select Atleast One Criteria!");
  }
  else if (meta > 100) {
    alert("Please select a number between 0 and 100");
  }
  else if (meta < 0) {
    alert("Please select a number between 0 and 100");
  }
  else {
    alert("Here Are Your Games!");
  }
}