import _ from 'underscore';

// export const miNombre = 'Jose';

/**
 * Esta función crea un nuevo deck de cartas
 * @param {Array<String>} tiposDeCarta Ej : ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ej : ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ){
        throw new Error('Tipos de carta es obligatorio como un array de string');
    }
    
    if ( !tiposEspeciales|| tiposEspeciales.length === 0 ){
        throw new Error('Tipos Especiales es obligatorio como un array de string');
    }

let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}

// export default crearDeck;