//Array met nieuwe posters:
let addNewMoviesToDom = movies.filter((item) => {
  return item.year >= 2014;
}).map((item) => {
  return item.poster;
})

//Array met Avenger posters:
let addAvMoviesToDom = movies.filter((item) => {
  return item.title.includes('Avengers')
}).map((item) => {
  return item.poster;
})

//Array met X-Men posters:
let addxMoviesToDom = movies.filter((item) => {
  return item.title.includes('X-Men')
}).map((item) => {
  return item.poster;
})

//Array met Princess posters
let addPrincessMoviesToDom = movies.filter((item) => {
  return item.title.includes('Princess')
}).map((item) => {
  return item.poster;
})

//Array met Batman posters
let addBatmanMoviesToDom = movies.filter((item) => {
  return item.title.includes('Batman')
}).map((item) => {
  return item.poster;
})

// Add eventlistener aan radio button:
let newButton = document.getElementById("latest");
let avButton = document.getElementById("Avenger");
let xButton = document.getElementById("X-Men");
let princessButton = document.getElementById("Princess");
let batmanButton = document.getElementById("Batman");

//Button latest
newButton.addEventListener ('click', function(e) {
    console.log('new button clicked');
    let ulMovies = document.getElementById("filteredPosters")
    // Vorige selectie verwijderen
    ulMovies.innerHTML = "";   
    console.log('oude selectie weggehaald');
    // Nieuwe selectie tonen
    var i=0;
    while (i<=addNewMoviesToDom.length-1) {
    // Variabele ul lijst en nieuwe li
    let newLi = document.createElement("li");
    let newImage = document.createElement("IMG");
    ulMovies.appendChild(newLi);
    //newLi.innerHTML = "Output new movie " + i + ": ";
    newLi.classList.add('result');
    newLi.appendChild(newImage);
    newImage.id="idImg" + i;
    newImage.classList.add('picture');
    document.getElementById("idImg" + i).src = addNewMoviesToDom[i];
    i++;
    console.log('nieuwe selectie getoond');
  }
})

//Button Avenger
avButton.addEventListener ('click', function(e) {
  console.log('Avenger button clicked');
  let ulMovies = document.getElementById("filteredPosters")
  // Vorige selectie verwijderen
  ulMovies.innerHTML = "";
  console.log('oude selectie weggehaald');
    // Nieuwe selectie tonen
  var i=0;
  while (i<=addAvMoviesToDom.length-1) {
  // Variabele ul lijst en nieuwe li
  let newLi = document.createElement("li");
  let newImage = document.createElement("IMG");
  ulMovies.appendChild(newLi);
  //newLi.innerHTML = "Output Avenger movie " + i + ": ";
  newLi.classList.add('result');
  newLi.appendChild(newImage);
  newImage.id="idImg" + i;
  newImage.classList.add('picture');
  document.getElementById("idImg" + i).src = addAvMoviesToDom[i];
  i++;
  console.log('nieuwe selectie getoond');
}
})

//Button X-Men
xButton.addEventListener ('click', function(e) {
  console.log('X-Men button clicked');
  let ulMovies = document.getElementById("filteredPosters")
  // Vorige selectie verwijderen
  ulMovies.innerHTML = "";
  console.log('oude selectie weggehaald');
    // Nieuwe selectie tonen
  var i=0;
  while (i<=addxMoviesToDom.length-1) {
  // Variabele ul lijst en nieuwe li
  let newLi = document.createElement("li");
  let newImage = document.createElement("IMG");
  ulMovies.appendChild(newLi);
  //newLi.innerHTML = "Output X-Men movie " + i + ": ";
  newLi.classList.add('result');
  newLi.appendChild(newImage);
  newImage.id="idImg" + i;
  newImage.classList.add('picture');
  document.getElementById("idImg" + i).src = addxMoviesToDom[i];
  i++;
  console.log('nieuwe selectie getoond');
}
})

//Button Princess
princessButton.addEventListener ('click', function(e) {
  console.log('Princess button clicked');
  let ulMovies = document.getElementById("filteredPosters")
  // Vorige selectie verwijderen
  ulMovies.innerHTML = "";
  console.log('oude selectie weggehaald');
  // Nieuwe selectie tonen
  var i=0;
  while (i<=addPrincessMoviesToDom.length-1) {
  // Variabele ul lijst en nieuwe li
  let newLi = document.createElement("li");
  let newImage = document.createElement("IMG");
  ulMovies.appendChild(newLi);
  //newLi.innerHTML = "Output Princess movie " + i + ": ";
  newLi.classList.add('result');
  newLi.appendChild(newImage);
  newImage.id="idImg" + i;
  newImage.classList.add('picture');
  document.getElementById("idImg" + i).src = addPrincessMoviesToDom[i];
  i++;
  console.log('nieuwe selectie getoond');
}
})

//Button Batman
batmanButton.addEventListener ('click', function(e) {
  console.log('Batman button clicked');
  let ulMovies = document.getElementById("filteredPosters")
 // Vorige selectie verwijderen
 ulMovies.innerHTML = "";
 console.log('oude selectie weggehaald');
 // Nieuwe selectie tonen
  var i=0;
  while (i<=addBatmanMoviesToDom.length-1) {
  // Variabele ul lijst en nieuwe li
  let newLi = document.createElement("li");
  let newImage = document.createElement("IMG");
  ulMovies.appendChild(newLi);
  //newLi.innerHTML = "Output Batman movie " + i + ": ";
  newLi.classList.add('result');
  newLi.appendChild(newImage);
  newImage.id="idImg" + i;
  newImage.classList.add('picture');
  document.getElementById("idImg" + i).src = addBatmanMoviesToDom[i];
  i++;
  console.log('nieuwe selectie getoond');
}
})