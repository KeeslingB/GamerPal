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