// example from randomuser api
const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data.results[0]))
}
loadSingleUser()
const displaySingleUser = user => {
    // console.log(user);
}



//=============================================
//======== example from mealdb api=========

// search functionality
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle
}
const toggleSearchResult = displayStyle => {
    document.getElementById('meals').style.display = displayStyle
}
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;

    //display spinner
    toggleSpinner('block')
    //clear display
    toggleSearchResult('none')
    loadMeals(searchText);
    // clear search input
    document.getElementById('search-field').value = '';
}


// load api
const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
// loadMeals('fish')
const displayMeals = meals => {
    const container = document.getElementById('meals');
    container.textContent = '';
    if (!meals) {
        alert('Please enter a meal name')
    }
    meals?.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('perMealBox')
        div.innerHTML = `
           <h4>${meal.strMeal}</h4>
           <p>${meal.strIngredient18 ? meal.strIngredient18 : ''
            }</p >
    <button class="clickMeBtn" onclick="loadMealDetail('${meal.strMeal}')">Click Me</button>
        `;
        container.appendChild(div);
    });
    toggleSpinner('none');
    toggleSearchResult('block')
}
const loadMealDetail = mealName => {
    console.log(mealName);
}
