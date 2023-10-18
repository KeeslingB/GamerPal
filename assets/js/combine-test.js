// global variables
var storeApi = 'https://api.rawg.io/api/stores?key=15235aadda03481b8e49cf5d10936ba7';
var button = document.getElementById('button');
var gameTitle = '';
var gpKey = '15235aadda03481b8e49cf5d10936ba7';
var myKey = '07408fb112b44434827e8440cf06fe69';

let spotSelector = $('#result-space');

let lastSearch = JSON.parse(localStorage.getItem("game-search")) || {};
let lastLinks = JSON.parse(localStorage.getItem("game-links")) || [];

// setting the form values via localStorage (if present)
document.forms["myForm"]["platform"].value = JSON.parse(localStorage.getItem("platform"));
document.forms["myForm"]["genre"].value = JSON.parse(localStorage.getItem("genre"));
document.forms["myForm"]["meta"].value = JSON.parse(localStorage.getItem("meta"));

// this function is called when the form is submitted and sets off a chain reaction after making an initial fetch request to grab the specified games
function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      lastLinks = [];
      lastSearch = data;
      localStorage.setItem("game-search", JSON.stringify(lastSearch));

      getApiLinks(lastSearch.results);
    })
}

// this function takes in the results of the initial fetch request and adds the url to the data
function getApiLinks(games) {
  let counterVar = 0;
  let resultsArr = [];
  for (var i = 0; i < games.length; i++) {
    let game = games[i];
    console.log(game.slug);
    var requestUrl = `https://api.rawg.io/api/games/${game.slug}/stores?key=15235aadda03481b8e49cf5d10936ba7`;

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (info) {
        console.log(counterVar, info.results[0].url);
        lastLinks.push(info.results[0].url);
        game.url=info.results[0].url;
        resultsArr.push(game);
        counterVar++;

        localStorage.setItem("game-links", JSON.stringify(lastLinks));
        if(counterVar === games.length){
          displayResults(resultsArr);
        }
      })
  }
}

// this function activates after the form is submitted, checking the parameters before passing the request url to the initial fetch request
function searchForm() {
  preventDefault();
  let requestUrl = 'https://api.rawg.io/api/games?key=15235aadda03481b8e49cf5d10936ba7';
  let platform = document.forms["myForm"]["platform"].value;
  let genre = document.forms["myForm"]["genre"].value;
  let meta = document.forms["myForm"]["meta"].value;
  localStorage.setItem('platform',JSON.stringify(platform));
  localStorage.setItem('genre',JSON.stringify(genre));
  localStorage.setItem('meta',JSON.stringify(meta));

  localStorage.setItem("platform", JSON.stringify(platform));
  localStorage.setItem("genre", JSON.stringify(genre));
  localStorage.setItem("meta", JSON.stringify(meta));

  if (platform !== "") {
    if (platform === "Xbox") {
      requestUrl += `&platforms=186`;
    } else if (platform === "PS5") {
      requestUrl += `&platforms=187`;
    } else {
      requestUrl += `&platforms=4`;
    }
  }
  if (genre !== "") {
    if (genre === "Action") {
      requestUrl += `&genres=action`
    }
    if (genre === "Adventure") {
      requestUrl += `&genres=adventure`
    }
    if (genre === "Shooter") {
      requestUrl += `&genres=shooter`
    }
    if (genre === "RPG") {
      requestUrl += `&genres=role-playing-games-rpg`
    }
    if (genre === "Puzzle") {
      requestUrl += `&genres=puzzle`
    }
    if (genre === "Strategy") {
      requestUrl += `&genres=strategy`
    }
    if (genre === "Simulation") {
      requestUrl += `&genres=simulation`
    }
    if (genre === "Arcade") {
      requestUrl += `&genres=arcade`
    }
    if (genre === "Racing") {
      requestUrl += `&genres=racing`
    }
    if (genre === "Sports") {
      requestUrl += `&genres=sports`
      console.log('working');
    }
  }
  if (meta > 100 || meta < 0) {
    alert("Unable to include metacritic score due to invalid input");
  } else {
    requestUrl += `&metacritic=${meta},100`;
  } 
  getApi(requestUrl);
}

// this function takes the results of the fetches and displays the images of the games with links to a store page
function displayResults(resultsArr) {
  spotSelector.html("");

  for (x = 0; x < 10; x++) {
    let thisGame = resultsArr[x]
    if (x < resultsArr.length) {
      const resultBlock = `
    <div class= 'col col-12 col-sm-6 col-md-4 col-lg-3'>
      <a href= ${thisGame.url} target='_blank'>
        <img src= ${thisGame.background_image} alt="a cover image from the game ${thisGame.name}" height = "200" width = "200" />
      </a>
      <h3 class='example-class-3 example-class-4'>${thisGame.name}</h3>
    </div>`
      $('#result-space').append(resultBlock)
    }
  }
}
