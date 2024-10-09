console.log("hola mundo")

async function films() {
    
    try{
        const response = await fetch("https://swapi.dev/api/films/");

        if(!response.ok) {
            throw new console.error("error");
            
        }
        const data = await response.json();
        const resultado = data.results;
        const titulos = resultado.map(film => film.title);
        const arrdate = resultado.map(fecha => fecha.release_date)

        return [titulos, arrdate]



    } catch {
        console.log("error")
    }
  
}
films().then(titulos => { 
    console.log(titulos) 



new Chartist.Line('.ct-chart', {
    labels: titulos[0],
    series: [
      titulos[1].map(dates => dates.slice(0, 4)),
      
    ]
  }, {
    fullWidth: true,
    chartPadding: {
      right: 40
    }
 })});


 //ejercicio 2

 async function verPersonajes() {
    try{
        const response = await fetch('https://swapi.dev/api/people/');
        if(!response.ok) {
            throw new console.log("Error");
        }
        const data = await response.json();
        let resultado = data.results;
        const nombre = resultado.map(nombre => nombre.name)
        const pelicula = resultado.map(pelicula => pelicula.films)
        const numPelis = pelicula.map(num => num.length)
        return [nombre, numPelis]

    } catch {
        console.log("Error");
    }
    
 }

 verPersonajes().then(personaje => {
    console.log(personaje);

 new Chartist.Line('.line-chart', {
    labels: personaje[0],
    series: [
      personaje[1],
      
    ]
  }, {
    fullWidth: true,
    chartPadding: {
      right: 40
    }
 })});