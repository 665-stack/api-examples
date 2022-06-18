

const searchBtn = document.getElementById("button-seacrh");
const searchInput = document.getElementById("search-field");

searchInput.addEventListener("keypress", function (event) {
    if (event.key == 'Enter')
        searchBtn.click();
});







document.getElementById('error-massage').style.display = 'none';
// this api is from themealdb.com
const seacrhFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear previous data
    searchField.value = '';
    if (searchText == '') {
        document.getElementById('emptySearchResult').style.visibility = 'visible';
        document.getElementById('error-massage').style.display = 'none';
    }
    else {
        document.getElementById('emptySearchResult').style.visibility = 'hidden';
        // load data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
            // error catch with fetch
            .catch(error => displayError(error))
    }
}
const displayError = error => {
    document.getElementById('error-massage').style.display = 'block';
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    // how to clear previous search result
    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    if (meals.length == 0) {
        // show no result found (HW)

    }
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div onclick= "loadMealDetail(${meal.idMeal})" class="card h-100" >
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"> ${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
    </div>
        `;
        searchResult.appendChild(div)
    });
}
const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displyaMealDetail(data.meals[0]))
}
const displyaMealDetail = meal => {
    console.log(meal)
    const mealDetails = document.getElementById('meal-datails');
    // clear previous meal details
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" target="_blank" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    mealDetails.appendChild(div);
}