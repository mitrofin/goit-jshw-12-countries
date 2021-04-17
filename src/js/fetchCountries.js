/* export default */ function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(response => {
            /* if (response.ok)  return response.json(); */
             /* if (response.status === 404) {
                return response.json();} */
            return response.json();
            
        })/* .then(data => console.log(data)); */
    
}


export default  fetchCountries ;