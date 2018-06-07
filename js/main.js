var giphyAPI = 'https://api.giphy.com/v1/gifs/random?api_key=rmvxuUnCdxyv6ZBJ3XHXMlP7bNmZlnnZ&tag=&rating=G';
var randomGif = document.getElementById('random-gif');


var request = new XMLHttpRequest();
request.open('GET', giphyAPI);
request.responseType = 'json';
request.send();

request.onload = () => {
  var giphyImg = request.response;
  var giphyUrl = giphyImg.data.images.original.url;
  var myImg = document.createElement('IMG');
  myImg.setAttribute('src', giphyUrl);
  randomGif.appendChild(myImg);
}
