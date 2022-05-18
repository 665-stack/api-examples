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
// example from mealdb api
const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
loadMeals('fish')
const displayMeals = meals => {
    const container = document.getElementById('meals');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = `
           <h4>${meal.strMeal}</h4>
           <button onclick="loadMealDetail('${meal.strMeal}')">Click Me</button>
        `;
        container.appendChild(div);
    });
}
const loadMealDetail = mealName => {
    console.log(mealName);
}