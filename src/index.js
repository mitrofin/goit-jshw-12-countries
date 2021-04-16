import './styles.css';
import fetchCountries from './js/fetchCountries';
import getRefs from "./js/getRefs";
import countryListTemplate from './templates/country-list.hbs';
import countryInfoTemplate from "./templates/country-info.hbs";
import '@pnotify/core/dist/BrightTheme.css';
import { alert, info, error } from '@pnotify/core';
import { defaults } from '@pnotify/core';

const debounce = require('lodash.debounce');

const refs = getRefs();

/* fetchCountries(); */

refs.searchForm.addEventListener('input',debounce(onSearch,500));

function onSearch(event) {
    event.preventDefault();
    const searchData = event.target.value;
    console.log(searchData);
    fetchCountries(searchData)
        .then(country => {
            if (country.length > 10) {
                showAlert()
                clearCounrty()
            }
            if (country.status === 404)  {
                showError()
            }
            appendCountries(country);
        })
        .catch(error => {
                console.log({ error });
            })
};
 
function appendCountries(country) {
    const markUp = countryListTemplate(country);
    console.log(markUp);
    const markUpName = countryInfoTemplate(country);
    console.log(markUpName);

    if (country.length === 1) {
        return (refs.containerList.insertAdjacentHTML('beforeend', markUpName));   
    }

    if (country.length > 1) {
        return (refs.containerList.insertAdjacentHTML('beforeend', markUp))
    }
}


function showError() {
    const myError = error({      
    text:
            "Нічого не знайдено! ",
        delay: 700,
    });
   
}
function showAlert() {
    const myAlert = alert({
    text:
            "Багато співпадінь.Уточіть пошук! Використовуйте ENG",
        delay: 700,
    });
    
}



function clearResult() {
        refs.searchForm.value = "";
    }

function clearCounrty() {
        refs.containerList.innerHTML = "";
}





/* fetch(`https://restcountries.eu/rest/v2/name/swit`)
        .then(response => { */
            /* if (response.ok)  return response.json();
             if (response.status === 404) {
                return response.json();}
            return response.json();
            
        }).then(data => { console.log(data); }); */
    
