function fetchCountries(searchQuery) {
<<<<<<< Updated upstream
 return fetch(`https://restcountries.eu/rest/name/${searchQuery}`).then(
=======
 return fetch(`https://restcountries.com/v2/name/${searchQuery}`).then(
>>>>>>> Stashed changes
  response => {
   /* if (response.status === 404) {
    console.log('УПС');
   } */
   return response.json();
  },
 ); /* .then(data => console.log(data)); */
}

export default fetchCountries;
