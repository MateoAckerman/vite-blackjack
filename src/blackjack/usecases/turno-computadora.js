import { pedirCarta, valorCarta, crearCartaHTML } from "./";
import { mostrarResultado } from './mostrar-resultado.js';

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar 
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {*} deck  deck de donde se van a ir sacando las cartas
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if ( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    if ( !puntosHTML ) throw new Error('Puntos HTML son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    let resultadoTexto = '';
    let resultado = '';
    if( puntosComputadora === puntosMinimos ) {
        resultadoTexto = '¡ Empate, nadie gana !';
        resultado = 'empate';
    } else if ( puntosMinimos > 21 ) {
        resultadoTexto = 'Has perdido, ¡ Mucha suerte la proxima !';
        resultado = 'perdiste';
    } else if( puntosComputadora > 21 ) {
        resultadoTexto = 'Has ganado, ¡ Felicidades !';
        resultado = 'ganaste';
    } else {
        resultadoTexto = 'Has perdido, ¡ Mucha suerte la proxima !';
        resultado = 'perdiste';
    }

    mostrarResultado( resultadoTexto, resultado );
}
