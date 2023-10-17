var storeApi = 'https://api.rawg.io/api/stores?key=15235aadda03481b8e49cf5d10936ba7';
var button = document.getElementById('button');
var gameTitle = '';
var gpKey = '15235aadda03481b8e49cf5d10936ba7';
var myKey = '07408fb112b44434827e8440cf06fe69';

var platforms = 'https://api.rawg.io/api/platforms?key=15235aadda03481b8e49cf5d10936ba7';

var gameGenres = 'https://api.rawg.io/api/genres?key=15235aadda03481b8e49cf5d10936ba7';


<<<<<<< HEAD
fetch(storeApi)
  .then(function(response){
    return response.json();
  })
  .then(function (data){
    console.log(data);
  });
console.log(storeApi);
=======
fetch(gameGenres)
.then(function(response){
  return response.json();
}).then(function(data){
})

fetch(platforms)
.then(function(response){
  return response.json();
}).then(function(data){
})


let platformsList = {
  count: 3,
  results: [
    {
      id: 4,
      name: 'PC',
      slug: 'pc',
    },
    {
      id: 186,
      name: 'Xbox Series S/X',
      slug: 'xbox-series-x',
    },
    {
      id: 187,
      name: 'PlayStation 5',
      slug: 'playstation5',
    },
  ]
}
console.log(platformsList);


let genreList = {
  count: 11,
  results: [
    {
      id: 4,
      name: 'Action',
      slug: 'action',
    },
    {
      id: 3,
      name: 'Adventure',
      slug: 'adventure',
    },
    {
      id: 2,
      name: 'Shooter',
      slug: 'shooter',
    },
    {
      id: 5,
      name: 'RPG',
      slug: 'role-playing-games-rpg',
    },
    {
      id: 7,
      name: 'Puzzle',
      slug: 'puzzle',
    },
    {
      id: 10,
      name: 'Strategy',
      slug: 'strategy',
    },
    {
      id: 14,
      name: 'Simulation',
      slug: 'simulation',
    },
    {
      id: 11,
      name: 'Arcade',
      slug: 'arcade',
    },
    {
      id: 1,
      name: 'Racing',
      slug: 'racing',
    },
    {
      id: 15,
      name: 'Sports',
      slug: 'sports',
    }
  ]
}
console.log(genreList);



>>>>>>> c312d67510e4b9d9da77097f101ce5224b862a0d


function getApi() {
  var requestUrl = 'https://api.rawg.io/api/games/?key=15235aadda03481b8e49cf5d10936ba7';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++);
      console.log(data);
    })
}

gameTitle = 'grand-theft-auto-iv';

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

      console.log(data.results);
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
