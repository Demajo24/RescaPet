let url= 'https://api.thecatapi.com/v1/images/search?limit=16&api_key=live_ZPos8Cf92a8GhQ4sg3pU8H1gyx3KLs8yP3XQjqG76nvnXpQBiZkE73g9OmFIX0Ze'

fetch(url)
  .then(response => response.json())
  .then(data =>{
    let caja = document.getElementById("cajita2")

    data.forEach(gatitos => {
        let img = document.createElement("img")

        img.classList.add("imagen")
        img.src = gatitos.url
        img.alt = "gatitos"

        caja.appendChild(img);
        
    });
  })
  .catch(error => console.log("Error", error))