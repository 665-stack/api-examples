// this api is from restcountries.com 
const loadcountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadcountries()
const displayCountries = countries => {
    console.log('fuck -- ', countries)
    const countriesDiv = document.getElementById('countries');
    // for loop er bodole forEach use kora hoice
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
           <h3> ${country.name.common} </h3>
           <p> ${country.capital} </p>
           <button onclick = "loadCountryByName('${country.name.common}')"> Details </button>
        `
        countriesDiv.appendChild(div)
    })
}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}
    `
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
       <img width="20%" src= "${country.flags.png}">
       <h5>${country.name.common} </h5>
       <p>Population: ${country.population}</p>
    `
}