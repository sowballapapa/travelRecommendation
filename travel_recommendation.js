

const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('btnSearch')
const clearSearchButton = document.getElementById('btnClearSearch')
const searchResult = document.getElementById('searchResult')

function clear() {
    searchInput.value = ""
}

function search() {
    const input = searchInput.value.toLowerCase() 
    searchResult.innerHTML = ""
     searchResult.innerHTML += `<div class="barResult"></div>`
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        const country = data.countries.find(item => item.name.toLowerCase()===input) 
        const beach = data.beaches.find(item => item.name.toLowerCase()===input) 
        const temple = data.temples.find(item => item.name.toLowerCase()===input) 
        
        if(beach){
           
            searchResult.innerHTML += `<div>
            <img src="./assets/cities/${beach.imageUrl}" alt="">
            <div class="result">
             <h4>${beach.name}</h4>
             <p>${beach.description}</p>
             </div>
             <button>Visit</button>
             </div>`
        }else
        if(temple){
            searchResult.innerHTML += `<div>
            <img src="./assets/cities/${temple.imageUrl}" alt="">
            <div class="result">
             <h4>${temple.name}</h4>
             <p>${temple.description}</p>
             </div>
             <button>Visit</button>
             </div>`
        }else
        if(country){
            for(city of country.cities){
                searchResult.innerHTML += `<div>
                <img src="./assets/cities/${city.imageUrl}" alt="">
                <div class="result">
                 <h4>${city.name}</h4>
                 <p>${city.description}</p>
                 </div>
                 <button>Visit</button>
                 </div>`
            }
        }else{
            searchResult.innerHTML = 'Destination not found.'
        }


    })
    .catch(error => {
        console.error('Error:', error)
        searchResult.innerHTML += 'An error occured when fetching data.'
    })
}


searchButton.addEventListener('click', search)
clearSearchButton.addEventListener('click', clear)

