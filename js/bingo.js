
console.clear();

$(document).ready(function() {

/* Slogan Object */

let slogans = {
  1: "Uncomradely Behaviour",
  2: "What is the status of Progressive International?",
  3: "You should write an e-mail to the CC.",
  4: "We should stop debating about the same things again and again. (by a man)",
  5: "The CC has pitted us all against each other.",
  6: "The revolution is coming!",
  7: "We need to do something about Assange and Zizek.",
  8: "This is something that you can ask Judith.",
  9: "End of Mail: Carpe DiEM!",
  10: "We need to attract more working class people.",
  11: "I have sth to say, but if a woman wants to say sth I will let her speak first!",
  12: "I think we're doing quite well for a movement which was founded just in 2016!",
  13: "You should post it on the forum.",
  14: "The forum is a mess!",
  15: "Volt does it so much better than us!",
  16: "We need to take on the establishment.",
  17: "DiEM25 is dysfunctional, but DiEMers are amazing!",
  18: "Fortunately Prague united us.",
  19: "We can't be successful unless we have internal democracy.",
  20: "Yanis has already made up his mind.",
  21: "We should develop a DiEM25-App.",
  22: "We have to revive the Progressive Agenda!",
  23: "We should publish a DiEM25 magazine.",
  24: "Take a break from debate.",
  25: "Is there a german / spanish / french / italian version of this document?",
  26: "Start cooking, the recipe will follow.",
  27: "It's not a movement, it's a book club.",
  28: "Frankenstein Coalition",
  29: "Post-election Blues",
  30: "Toxic people"
};

let frenchSlogans = {
  1: "Manque de camaraderie",
  2: "Où e nest Progressive International?",
  3: "Il faudrait écrire au CC.",
  4: "Nous devrions arrêter de toujours débattre des mêmes choses (dit par un homme)",
  5: "Le CC nous a tous montés les uns contre les autres.",
  6: "La révolution est en marche!",
  7: "Il faut qu’on fasse quelque chose pour aider Assange et Zizek.",
  8: "Il faudrait demander à Judith.",
  9: "En fin de mail : Carpe DiEM!",
  10: "Il faut qu’on soit plus attractifs auprès des ouvriers et travailleurs.",
  11: "J'ai qqch à dire, mais si une femme veut s’exprimer, je la laisse parler en premier!",
  12: "Je pense que nous nous en sortons plutôt bien pour un mouvement qui n’a été fondé qu’en 2016!",
  13: "Il faudrait poster ça sur le forum.",
  14: "Le forum est un vrai bordel!",
  15: "Volt fait ça tellement mieux que nous!",
  16: "Il faut abattre l’establishment!",
  17: "DiEM25 ne fonctionne pas du tout, mais les DiEMers sont fantastiques!",
  18: "Heureusement qu’il y a eu Prague pour nous unifier.",
  19: "On ne peut pas réussir tant qu’il n’y a pas de démocratie en interne.",
  20: "On n’a pas besoin de quotas de genre, le plus important est de sélectionner les meilleur(e)s! :-)",
  21: "Il nous faudrait une application DiEM25.",
  22: "Il faut relancer le Programme Progressiste!",
  23: "Il faudrait qu’on publie un magazine DiEM25.",
  24: "Arrêter de débattre.",
  25: "Y a-t-il une version allemande / espagnole / française / italienne de ce document?",
  26: "Mettez-vous à cuisiner, la recette suivra.",
  27: "Ce n'est pas un movement politique, c'est un club de lecture!",
  28: "Saisissons les moyens de production (suivi de rires)",
  29: "Blues post-électoral",
  30: "Il faudrait que DiEM25 ait une équipe juridique pour pouvoir se lancer là-dedans",
};


/* Declaring Variables with DOM elements */

let fieldOne = document.getElementById("one");
let fieldTwo = document.getElementById("two");
let fieldThree = document.getElementById("three");
let fieldFour = document.getElementById("four");
let fieldFive = document.getElementById("five");
let fieldSix = document.getElementById("six");
let fieldSeven = document.getElementById("seven");
let fieldEight = document.getElementById("eight");
let fieldNine = document.getElementById("nine");
let fieldTen = document.getElementById("ten");
let fieldEleven = document.getElementById("eleven");
let fieldTwelve = document.getElementById("twelve");
let fieldThirteen = document.getElementById("thirteen");
let fieldFourteen = document.getElementById("fourteen");
let fieldFifteen = document.getElementById("fifteen");
let fieldSixteen = document.getElementById("sixteen");
let shuffle = document.getElementById("shuffle");

/* Field Array */

const field = [fieldOne, fieldTwo, fieldThree, fieldFour, fieldFive,
fieldSix, fieldSeven, fieldEight, fieldNine, fieldTen, fieldEleven,
fieldTwelve, fieldThirteen, fieldFourteen, fieldFifteen, fieldSixteen];



function random() {
  let value = Math.floor(Math.random() * 30);

  //value = value > 28 ? value - 1 : value + 1;
  value += 1;
  
  return value;
}









// ** NEW Function to eliminate doubles **

function createRandomNumberArray() {
  let numberArray = [];
  while (new Set(numberArray).size < 16) {
    let ranNumber = random(); 
    numberArray.push(ranNumber);
  }
  const finalNumberArray = [... new Set(numberArray)]
  return finalNumberArray;
}





/* Feld 1 Kontrolle */

fieldOne.addEventListener("click", clickHandle1)


function clickHandle1() {
    fieldOne.style.background = "white";
    fieldOne.style.color = "black";
    fieldOne.style.borderColor = "black";
  }

 
/* Feld 2 Kontrolle */
fieldTwo.addEventListener("click", clickHandle2)

function clickHandle2() {
    fieldTwo.style.background = "white";
    fieldTwo.style.color = "black";
    fieldTwo.style.borderColor = "black";
  }


/* Feld 3 Kontrolle */
fieldThree.addEventListener("click", clickHandle3)

function clickHandle3() {
    fieldThree.style.background = "white";
    fieldThree.style.color = "black"
    fieldThree.style.borderColor = "black";
  }


/* Feld 4 Kontrolle */
fieldFour.addEventListener("click", clickHandle4)

function clickHandle4() {
    fieldFour.style.background = "white";
    fieldFour.style.color = "black"
    fieldFour.style.borderColor = "black";
  }


/* Feld 5 Kontrolle */
fieldFive.addEventListener("click", clickHandle5)

function clickHandle5() {
    fieldFive.style.background = "white";
    fieldFive.style.color = "black"
    fieldFive.style.borderColor = "black";
  }


/* Feld 6 Kontrolle */
fieldSix.addEventListener("click", clickHandle6)

function clickHandle6() {
    fieldSix.style.background = "white";
    fieldSix.style.color = "black"
    fieldSix.style.borderColor = "black";
  }

/* Feld 7 Kontrolle */
fieldSeven.addEventListener("click", clickHandle7)

function clickHandle7() {
    fieldSeven.style.background = "white";
    fieldSeven.style.color = "black"
    fieldSeven.style.borderColor = "black";
  }

/* Feld 8 Kontrolle */
fieldEight.addEventListener("click", clickHandle8)

function clickHandle8() {
    fieldEight.style.background = "white";
    fieldEight.style.color = "black"
    fieldEight.style.borderColor = "black";
  }

/* Feld 9 Kontrolle */
fieldNine.addEventListener("click", clickHandle9)

function clickHandle9() {
    fieldNine.style.background = "white";
    fieldNine.style.color = "black"
    fieldNine.style.borderColor = "black";
  }

/* Feld 10 Kontrolle */
fieldTen.addEventListener("click", clickHandle10)

function clickHandle10() {
  fieldTen.style.background = "white";
  fieldTen.style.color = "black"
  fieldTen.style.borderColor = "black";
  }

/* Feld 11 Kontrolle */
fieldEleven.addEventListener("click", clickHandle11)

function clickHandle11() {
  fieldEleven.style.background = "white";
  fieldEleven.style.color = "black";
  fieldEleven.style.borderColor = "black";
  }


/* Feld 12 Kontrolle */
fieldTwelve.addEventListener("click", clickHandle12)

function clickHandle12() {
  fieldTwelve.style.background = "white";
  fieldTwelve.style.color = "black";
  fieldTwelve.style.borderColor = "black";
  }


/* Feld 13 Kontrolle */
fieldThirteen.addEventListener("click", clickHandle13)

function clickHandle13() {
  fieldThirteen.style.background = "white";
  fieldThirteen.style.color = "black";
  fieldThirteen.style.borderColor = "black";
  }

/* Feld 14 Kontrolle */
fieldFourteen.addEventListener("click", clickHandle14)

function clickHandle14() {
  fieldFourteen.style.background = "white";
  fieldFourteen.style.color = "black";
  fieldFourteen.style.borderColor = "black";
  }

/* Feld 15 Kontrolle */
fieldFifteen.addEventListener("click", clickHandle15)

function clickHandle15() {
  fieldFifteen.style.background = "white";
  fieldFifteen.style.color = "black";
  fieldFifteen.style.borderColor = "black";
  }


/* Feld 16 Kontrolle */
fieldSixteen.addEventListener("click", clickHandle16)

function clickHandle16() {
  fieldSixteen.style.background = "white";
  fieldSixteen.style.color = "black";
  fieldSixteen.style.borderColor = "black";
  }

/* French/English Toggle */
let headline = document.getElementById("headline");
let englishToggle = document.getElementById("english");
let frenchToggle = document.getElementById("francais");
/*let shuffleButton = document.getElementById("shuffle");*/


frenchToggle.addEventListener("click", frenchToggleHandler)
englishToggle.addEventListener("click", englishToggleHandler)
shuffle.addEventListener("click", iterateField)

function englishToggleHandler() {
  location.reload();
}


function frenchToggleHandler() {
  headline.innerHTML ="Le Bingo DiEM25";
  shuffle.innerHTML = "Mélanger";
  
  shuffle.addEventListener("click", iterateFieldFrench);
  RandomNumberArray = createRandomNumberArray();
  for (let i=0; i < 16; i++) {
  field[i].innerHTML = "<p>" + frenchSlogans[RandomNumberArray[i]] + "</p>";
}

}


// ** Fills every Field with an english quote **

function iterateField() {

  RandomNumberArray = createRandomNumberArray();
  for (let i=0; i < 16; i++) {
  field[i].innerHTML = "<p>" + slogans[RandomNumberArray[i]] + "</p>";
 }
}


// ** Fills every Field with a french quote **


function iterateFieldFrench() {

  RandomNumberArray = createRandomNumberArray();
  for (let i=0; i < 16; i++) {
  field[i].innerHTML = "<p>" + frenchSlogans[RandomNumberArray[i]] + "</p>";
 }
}

/* Reset Fields */

let refresh = document.getElementById("reload");

refresh.addEventListener("click", refreshHandle)

function refreshHandle() {
  console.log("Yeah");
  for (let g=0; g <= 15; g++) {
    field[g].style.background = "rgb(237, 51, 25)";
    field[g].style.color = "white";
    field[g].style.borderColor = "white";
    }
  }
 
/* End Reset */




// ** Old Function to eliminate doubles **

/*
function createRandomNumberArray() {
  let numberArray = [];
  for (let i=0; i < 30; i++) {
    let ranNumber = random(); 
    
    if (!numberArray.includes(ranNumber)) {
      numberArray.push(ranNumber);
    }
  };
    return numberArray;

}
*/


/*
minitelMode.addEventListener("click", minitelHandle)

function minitelHandle() {
  
  headline.style.fontFamily = "Teletext_regular"; 
  headline.innerHTML ="Le Bingo DiEM25";
  document.body.style.fontFamily = "Teletext_regular";
  document.body.style.background = "rgb(153, 153, 153)";
  document.body.style.color = "rgb(51, 51, 51)";
  document.body.style.fontSize = "1rem";
  buttons[0].style.fontFamily = "Teletext_regular";
  buttons[1].style.fontFamily = "Teletext_regular";
  buttons[2].style.fontFamily = "Teletext_regular";
  for (let g=0; g <= 15; g++) {
    field[g].style.background = "rgb(153, 153, 153)";
    field[g].style.color = "rgb(51, 51, 51)";
    field[g].style.borderColor = "rgb(30, 30, 30)";
    }

  RandomNumberArray = createRandomNumberArray();
  for (let i=0; i < 16; i++) {
  field[i].innerHTML = "<p>" + frenchSlogans[RandomNumberArray[i]] + "</p>";
  }
}

*/

}); 

