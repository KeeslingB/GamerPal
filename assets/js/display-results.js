

// the link grabbed from resultURL is going to need some logic help from the form, just passing the first link available at the moment until we figure more of that out

// using example-class-1 and the like until we figure out how we want to style it with bootstrap configurations

// $('#result-area').append(resultBlock) is a placeholder append command, just needed a fake selector for reference

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


let testURL ={
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

function displayResults(resultFetch, resultURL){
  let resultParser = resultFetch.results
  let gameURL = resultURL.results
  let resultSpace = document.createElement("div");
  resultSpace.setAttribute("id", "result-space");
  resultSpace.setAttribute("class", "row");
  $("body").append(resultSpace);
  for(x=0; x < 10; x++){
    console.log(resultParser.length);
    if(x < resultParser.length){
    const resultBlock = `
    <div class='col col-6'>
      <a href= ${gameURL[0].url} target='_blank'>
        <img src= ${resultParser[x].background_image} alt="a cover image from the game ${resultParser[x].name}" height="200" width="200" />
      </a>
      <h3 class='example-class-3 example-class-4'>${resultParser[x].name}</h3>
    </div>`
    $('#result-space').append(resultBlock)
    }
  }
}

displayResults(testGames, testURL);