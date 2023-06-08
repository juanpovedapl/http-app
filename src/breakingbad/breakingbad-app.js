
/**
 * 
 * @returns  {Promise<Object>} Informacion del personaje 
 */
const fetcchQuote = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();
    console.log(data.results[0]);
    return data.results[0];

}
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {
    document.querySelector('#app-title').innerHTML='Breakingbad app';
    element.innerHTML = 'Loading...';


    const nombreLabel = document.createElement('blockquote');
    const statusLabel = document.createElement('p');

    const renderPersonaje = (personaje) => {
        nombreLabel.innerHTML =  personaje.name;
        statusLabel.innerHTML =  personaje.origin.name;

        element.replaceChildren(nombreLabel,statusLabel);
    }

    fetcchQuote()
        .then(renderPersonaje);
}