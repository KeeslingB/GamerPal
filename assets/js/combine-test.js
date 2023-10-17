var storeApi = 'https://api.rawg.io/api/stores?key=15235aadda03481b8e49cf5d10936ba7';
var button = document.getElementById('button');
var gameTitle = '';
var gpKey = '15235aadda03481b8e49cf5d10936ba7';
var myKey = '07408fb112b44434827e8440cf06fe69';

let spotSelector = $('#result-space');


let lastSearch = JSON.parse(localStorage.getItem("game-search")) || {};
let lastLinks = JSON.parse(localStorage.getItem("game-links")) || [];
// fetch(storeApi)
// .then(function(response){
//   return response.json();
// })
// .then(function (data){
//   console.log(data);
// });


// console.log(storeApi);


function getApi(requestUrl) {
  // var requestUrl = 'https://api.rawg.io/api/games/?key=15235aadda03481b8e49cf5d10936ba7';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      lastLinks = [];
      lastSearch = data;
      localStorage.setItem("game-search", JSON.stringify(lastSearch));

      //for (var i = 0; i < lastSearch.results.length; i++){
      getApiLinks(lastSearch.results);
      //}
      //let endGames = JSON.parse(localStorage.getItem("game-search"))
      //let endURL = JSON.parse(localStorage.getItem("game-links"))
      // displayResults(endGames, endURL);
    })
}

// gameTitle = 'grand-theft-auto-iv';

function getApiLinks(games) {
  let counterVar = 0;
  let resultsArr = [];
  for (var i = 0; i < games.length; i++) {
    let game = games[i];
    console.log(game.slug);
    var requestUrl = `https://api.rawg.io/api/games/${game.slug}/stores?key=15235aadda03481b8e49cf5d10936ba7`;
    // 'https://api.rawg.io/api/games?genres=2&ordering=-rating&key=07408fb112b44434827e8440cf06fe69';
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (info) {
        //for (var i = 0; i < data.results.length; i++) {
          // if (data.results[i].store_id === 1) {
          //   lastLinks.push(data.results[i].url);
          //   console.log(lastLinks);
          // }
          console.log(counterVar, info.results[0].url);
          lastLinks.push(info.results[0].url);
          game.url=info.results[0].url;
          resultsArr.push(game);
          counterVar++;
        //}
        localStorage.setItem("game-links", JSON.stringify(lastLinks));
        if(counterVar === games.length){
          // displayResults(lastSearch, lastLinks);
          displayResults(resultsArr);
        }
      })
  }
}
// getApiLinks();

function searchForm(event) {
  event.preventDefault();
  let requestUrl = 'https://api.rawg.io/api/games?key=15235aadda03481b8e49cf5d10936ba7';
  let platform = document.forms["myForm"]["platform"].value;
  let genre = document.forms["myForm"]["genre"].value;
  let meta = document.forms["myForm"]["meta"].value;
  localStorage.setItem('platform',JSON.stringify(platform));
  localStorage.setItem('genre',JSON.stringify(genre));
  localStorage.setItem('meta',JSON.stringify(meta));

  if (platform !== "") {
    if (platform === "Xbox") {
      requestUrl += `&platforms=186`;
    } else if (platform === "PS5") {
      requestUrl += `&platforms=186`;
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
    }
  }
  if (meta > 100 || meta < 0) {
    alert("Unable to include metacritic score due to invalid input");
  } else {
    requestUrl += `&metacritic=${meta},100`;
  } 
  getApi(requestUrl);
  // for (var i = 0; i < lastSearch.results.length; i++){
  //   getApiLinks(lastSearch.results[i].slug);
  // }
  // let endGames = JSON.parse(localStorage.setItem("game-search"))
  // let endURL = JSON.parse(localStorage.getItem("game-links"))
  // displayResults(endGames, endURL);
}



// returning info start
let testGames = {
  count: 98098,
  next: "null or some url here",
  previous: "null or some url here",
  results: [
    {
      name: "GTA V",
      background_image: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
    },
    {
      name: "The Witcher 3: Wild Hunt",
      background_image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
    },
    {
      name: "Portal 2",
      background_image: "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
    },
    {
      name: "Counter-Strike: Global Offensive",
      background_image: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
    },
  ]
}


let testURL = {
  count: 5,
  next: null,
  previous: null,
  results: [
    {
      id: 290375,
      game_id: 3498,
      store_id: 3,
      url: "https://store.playstation.com/en-us/product/UP1004-CUSA00419_00-GTAVDIGITALDOWNL"
    },
    {
      id: 438095,
      game_id: 3498,
      store_id: 11,
      url: "https://www.epicgames.com/store/en-US/product/grand-theft-auto-v/home"
    },
    {
      id: 290376,
      game_id: 3498,
      store_id: 1,
      url: "http://store.steampowered.com/app/271590/"
    },
    {
      id: 290377,
      game_id: 3498,
      store_id: 7,
      url: "https://marketplace.xbox.com/en-US/Product/GTA-V/66acd000-77fe-1000-9115-d802545408a7"
    },
    {
      id: 290378,
      game_id: 3498,
      store_id: 2,
      url: "https://www.microsoft.com/en-us/store/p/grand-theft-auto-v/bpj686w6s0nh?cid=msft_web_chart"
    }
  ]
}


let resultTotal = [];

function displayResults(resultsArr) {
  spotSelector.html("");
  // let resultParser = resultFetch.results;
  // let gameURL = resultURL.results
  // let resultSpace = document.createElement("div");
  // resultSpace.setAttribute("id", "result-space");
  // resultSpace.setAttribute("class", "row");
  // $("body").append(resultSpace);

  for (x = 0; x < 10; x++) {
    let thisGame = resultsArr[x]
    if (x < resultsArr.length) {
      const resultBlock = `
    <div class= 'col col-3'>
      <a href= ${thisGame.url} target='_blank'>
        <img src= ${thisGame.background_image} alt="a cover image from the game ${thisGame.name}" height = "200" width = "200" />
      </a>
      <h3 class='example-class-3 example-class-4'>${thisGame.name}</h3>
    </div>`
      $('#result-space').append(resultBlock)
    }
  }
}
