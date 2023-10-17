
var storeUrl = 'https://api.rawg.io/api/stores?key=15235aadda03481b8e49cf5d10936ba7';

var genreList = 'https://api.rawg.io/api/genres?key=15235aadda03481b8e49cf5d10936ba7';

var platformList = 'https://api.rawg.io/api/games?key=15235aadda03481b8e49cf5d10936ba7';



fetch(platformList)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
})


fetch(storeUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })


fetch(genreList)
.then(function (response){
  return response.json(gamesGenreList);
})
.then(function (){
})

genreOptionsForm.getElementById('genre')











let gamesGenreList = {
  count: 11,
  next: null,
  previous: null,
  results: [
    {
      id: 4,
      slug: 'action',
      name: 'Action',
    },
    {
      id: 3,
      slug: 'adventure',
      name: 'Adventure',
    },
    {
      id: 2,
      slug: 'shooter',
      name: 'Shooter',
    },
    {
      id: 5,
      slug: 'role-playing-games-rpg',
      name: 'RPG',
    },
    {
      id: 7,
      slug: 'puzzle',
      name: 'Puzzle',
    },
    {
      id: 10,
      slug: 'strategy',
      name: 'Strategy',
    },
    {
      id: 14,
      slug: 'simulation',
      name: 'Simulation',
    },
    {
      id: 11,
      slug: 'arcade',
      name: 'Arcade',
    },
    {
      id: 1,
      slug: 'racing',
      name: 'Racing',
    },
    {
      id: 15,
      slug: 'sports',
      name: 'Sports',
    },
  ]
}

console.log(gamesGenreList.results);






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



// pc = 4
//xbox x = 186
//ps5   = 187
