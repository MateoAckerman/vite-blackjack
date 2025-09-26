

/**
 * Removes and returns the last card from the deck.
 *
 * @param {string[]} deck - Un array de cartas.
 * @throws {Error} Throws an error if the deck is empty.
 * @returns {String} Retorna la carta del deck.
 */

export const pedirCarta = ( deck ) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}