console.log("Start.");
var button = document.getElementById('button');
var gameTitle = '';
var gpKey = '15235aadda03481b8e49cf5d10936ba7';
var myKey = '07408fb112b44434827e8440cf06fe69';

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
      for (var i = 0; i < data.length; i++) {
        if (data.results[i].store_id == '1') {
          console.log(data.results[i].url);
        }
      }
      //console.log(data.results[2].url);
      // for (var i = 0; i < data.length; i++) {
      //   console.log(data);
      // }
    })
}

getApiLinks();