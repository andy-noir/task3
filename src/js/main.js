// Getting APIs
var giphyAPI = 'https://api.giphy.com/v1/gifs/random?api_key=rmvxuUnCdxyv6ZBJ3XHXMlP7bNmZlnnZ&tag=&rating=G';
var wordAPI = 'https://api.whatdoestrumpthink.com/api/v1/quotes';
// Getting elements from HTML
var randomGif = document.getElementById('random-gif'); 
var randomWord = document.getElementById('heading');

gif = () => {
  let request = new XMLHttpRequest();
  request.open('GET', giphyAPI);
  request.responseType = 'json';
  request.send();
  
  request.onload = () => {
    let giphyImg = request.response;
    let giphyUrl = giphyImg.data.images.original.url;
    let myImg = document.createElement('IMG');
    myImg.setAttribute('src', giphyUrl);
    randomGif.appendChild(myImg);
  }
}

word = () => {
  var request = new XMLHttpRequest();
  request.open('GET', wordAPI);
  request.responseType = 'json';
  request.send();
  
  request.onload = () => {
    var wordArray = request.response;
    var wordCut = wordArray.messages.personalized[Math.floor(Math.random() * 500)];
    randomWord.innerText = wordCut;
  }
}

gif();
word();