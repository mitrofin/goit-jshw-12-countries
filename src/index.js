import './styles.css';
/* import fetch from './js/fetchCountries'; */

 fetch(`https://restcountries.eu/rest/v2/name/swit`)
        .then(response => {
            /* if (response.ok)  return response.json(); */
             if (response.status === 404) {
                return response.json();}
            return response.json();
            
        }).then(data => { console.log(data); });
    
