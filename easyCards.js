//Start by making a function that can create cards
function makeCards(num,suit){
    var card = {
      number: num,
      suit: suit,
      total: num.toString() + " of "+ suit //not necessary but have it just in case
    };
    return card; //IMPORTANT: RETURN THE CARD otherwise it won't work
  }
  var values = []; //create array to hold number values
  //Loop from 1-13
  for (var i = 1; i < 14; i++) {
    values.push(i); //adds each number into the array
  }
  //this array is short so I just made it
  var suits = ['hearts','diamonds','spades','clubs'];

  var deck = []; //create an empty deck array to hold the cards
  //first loop goes through all the values or numbers a card can have
  for (i = 0; i < values.length; i++) {
    //second loop goes through all the suits a card can have
    for (var j = 0; j < suits.length; j++) {
      deck.push(makeCards(values[i],suits[j]));
      //make the cards using the function you made and push them into the deck array
    }
  }
