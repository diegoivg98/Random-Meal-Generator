const getMeal = document.getElementById("getMeal");
const mealcontainer = document.getElementById("meal");

getMeal.addEventListener("click", () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((response) => {
            meal(response.meals[0]);
        });
});



function meal(meal) {
    const ingredients = [];

    for (i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        } else {
            break;
        }

    }
    mealcontainer.innerHTML = `
    <div class="row py-3">
        <div class="column five">
            <img src="${meal.strMealThumb}" alt="Meal Img"/>
        </div>
        <div class="column seven">
            <h4>${meal.strMeal}</h4>
        </div>
        <h5 py-3>Ingredients:</h5>
        <ul>
            ${ingredients.map(ingredient=>`
                <li>${ingredient}</li>
            `).join('')}
        </ul>
        <div class="column seven">
        <h5>Instructions:</h5>
            <p>${meal.strInstructions}</p>
        </div>
        <div class="column nine">
        <h5>Youtube Video</h5>
            <iframe width="300" height="300" src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"/>
        </div>
    </div>
    `;
}
