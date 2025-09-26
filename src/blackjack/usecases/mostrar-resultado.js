/**
 * Módulo para mostrar el resultado del juego en una ventana/modal.
 * Exporta la función mostrarResultado(texto) que inserta un modal en el body
 * y se encarga de manejar el cierre.
 */

export const mostrarResultado = ( texto = '', resultado = '' ) => {
    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('bw-modal-overlay');

    const panel = document.createElement('div');
    panel.classList.add('bw-modal');


    
    const icon = document.createElement('span');
    icon.classList.add('bw-modal-icon');
    if ( resultado === 'ganaste' ) {
        icon.innerHTML = ' 🎉 ';
    } else if ( resultado === 'perdiste' ) {
        icon.innerHTML = ' 💀 ';
    } else {
        icon.innerHTML = ' 🤝 ';
    }
    
    const p = document.createElement('p');
    p.classList.add('bw-modal-text');
    p.innerHTML = icon.outerHTML + texto + icon.outerHTML;

    const cerrarBtn = document.createElement('button');
    cerrarBtn.classList.add('bw-modal-close');
    cerrarBtn.innerText = 'Cerrar';
    cerrarBtn.addEventListener('click', () => {
        if ( resultadoDiv.parentElement ) {
            resultadoDiv.parentElement.removeChild(resultadoDiv);
        }
    });

    panel.appendChild(p);
    panel.appendChild(cerrarBtn);
    resultadoDiv.appendChild(panel);

    document.body.appendChild(resultadoDiv);
};
