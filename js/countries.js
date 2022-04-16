// this api is from restcountries.com 
const loadcountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountris(data))
}

loadcountries()
const displayCountris = countries => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    const countriesDiv = document.getElementById('countries');
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
    console.log(url)
}