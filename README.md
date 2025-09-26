
# Vite Blackjack

Juego Blackjack implementado con Vite y JavaScript puro.

Juego de cartas (Blackjack) hecho como ejercicio práctico. Usa Vite para desarrollo rápido y la carpeta `public/assets/cartas` contiene las imágenes de las cartas.

## Estado

Proyecto de ejemplo / demo. Listo para ejecutar en modo desarrollo.

## Estructura del proyecto

- `index.html` - entrada principal.
- `src/` - código fuente y assets del juego.
	- `main.js` - punto de entrada de la app.
	- `style.css` - estilos.
	- `blackjack/` - lógica del juego (módulos de usecases).
		- `crear-deck.js`, `pedir-carta.js`, `turno-computadora.js`, `valor-carta.js`, `crear-carta-html.js`
- `public/assets/cartas/` - imágenes de las cartas usadas en el juego.

## Requisitos

- Node.js 14+ (recomendado 16+)
- npm o yarn

## Instalación

Abrir una terminal en la raíz del proyecto y ejecutar:

```powershell
npm install
```

## Ejecutar en desarrollo

Usa Vite para levantar el servidor de desarrollo:

```powershell
npm run dev
```

Esto abrirá el proyecto en `http://localhost:5173` (puerto por defecto de Vite) o el que indique la salida.

## Build para producción

```powershell
npm run build
```

y para previsualizar el build:

```powershell
npm run preview
```

## Uso

Abre la app en el navegador. El juego permite:

- Pedir carta (Hit)
- Plantarse (Stand)
- Reiniciar partida

La lógica está en `src/blackjack` y la representación HTML en `src/blackjack/crear-carta-html.js`.

## Notas de implementación

- Las cartas están en `public/assets/cartas` con nombres como `AH.png`, `10C.png`, etc.
- El deck se construye dinámicamente en `crear-deck.js`.
- No se utiliza ningún framework de UI: JavaScript, HTML y CSS puros con Vite.

## Contribuciones

Pull requests bienvenidas. Para cambios mayores, abre un issue primero.

