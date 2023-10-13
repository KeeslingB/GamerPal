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