import './styles.css';
import fetchCountries from './js/fetchCountries';
import getRefs from "./js/getRefs";
import countryListTemplate from './templates/country-list.hbs';
import countryInfoTemplate from "./templates/country-info.hbs";
import"@pnotify/core/dist/PNotify.css";
import '@pnotify/core/dist/BrightTheme.css';
import { alert, info, error } from '@pnotify/core';

const debounce = require('lodash.debounce');
const refs = getRefs();

refs.searchForm.addEventListener('input',debounce(onSearch, 500));

function onSearch(event) {
    event.preventDefault();
    const searchData = event.target.value;
    if (searchData.length === 0 || searchData === "") {
        /* clearResult() */
        clearCounrty()
        ShowInfo()
        return;
    }
    fetchCountries(searchData)
        .then(country => {
            if (country.length > 10) {
                showAlert()
                clearResult()
                clearCounrty()
                
            }
            if (country.length > 1 && country.length <10) {
            return (refs.containerList.insertAdjacentHTML('beforeend', countryListTemplate(country)))
            }
            if (country.length === 1) {
                return (refs.containerList.insertAdjacentHTML('afterbegin', countryInfoTemplate(country)));   
            }
            if (country.status === 404)  {
                showError()
            }
            /* appendCountries(country); */
        })
        
        .catch(error => {
            showError()
                console.log({ error });
        })
    
};

/* function appendCountries(country) {
    const markUp = countryListTemplate(country);
    console.log(markUp);
    const markUpName = countryInfoTemplate(country);
    console.log(markUpName);    
} */
function ShowInfo() {
     info({
        text:
             "Спробуйте ще раз!",
        delay: 1000,
        });
};


function showError() {
     error({      
    text:
            "Нічого не знайдено!",
        delay: 1000,
    });
   
}
function showAlert() {
     alert({
    text:
            "Багато співпадінь. Уточіть пошук! Використовуйте ENG",
        delay: 2000,
        
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
    
