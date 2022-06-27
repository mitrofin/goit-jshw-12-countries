function fetchCountries(searchQuery) {

 return fetch(`https://restcountries.com/v2/name/${searchQuery}`).then(

  response => {
   /* if (response.status === 404) {
    console.log('УПС');
   } */
   return response.json();
  },
 ); /* .then(data => console.log(data)); */
}

export default fetchCountries;
