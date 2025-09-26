
/**
 * Calculates the numerical value of a given card in a blackjack game.
 *
 * @param {string} carta - The card represented as a string (e.g., "2H" for 2 of Hearts, "AS" for Ace of Spades).
 *                          The last character represents the suit, and the preceding characters represent the value.
 * @returns {number} The numerical value of the card. Face cards (J, Q, K) are worth 10, 
 *                   Aces (A) are worth 11, and numeric cards are worth their respective values.
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}