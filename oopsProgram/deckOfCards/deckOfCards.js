/******************************************************************************
 *  Execution       :   1. default node          : cmd> node deckOfCards.js
 *                      
 *
 *  purpose         : To initialize a deck of cards.
 *
 *  @description    : shuffle the deck and provide 9 cards each to 4 players.
 *
 *  @file           : deckOfCards.js
 *  @author         : VAIBHAW<vatikhile>
 *  @version        : 1.0
 *  @since          : 28-03-2019
 *
 ******************************************************************************/

var util = require('../utility');
function deckOfCards() {

    util.distributingCards();
}

deckOfCards()