let url= 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=1&limit=10'

fetch(url)
  .then(response => response.json())
  .then(data =>{
    let caja = document.getElementById("cajita")

    data.forEach(perritos => {
        let img = document.createElement("img")

        img.classList.add("imagen")
        img.src = perritos.url
        img.alt = "perrito"

        caja.appendChild(img);
        
    });
  })
  .catch(error => console.log("Error", error))