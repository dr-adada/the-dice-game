var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = 'dice' + randomNumber1 + '.png'
var randomImageSrc = './static/' + randomImage
var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImageSrc);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSrc2 = './static/dice' + randomNumber2 + '.png';
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomImageSrc2);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = "🏆 Player 1 Wins!!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = "Player 2 Wins!!🏆";
}
else {
  document.querySelector('h1').innerHTML = "It's a Draw!!!";
}