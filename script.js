function calculateBMR(weight, height, age, gender, activityLevel) {
    let bmr;

    if (gender === "Muž") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "Žena") {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
        return null;
    }

    return bmr * activityLevel;
}

document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const resultDisplay = document.getElementById("result");

    calculateButton.onclick = function () {
        
        const age = parseInt(document.getElementById("age").value);
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const genderElement = document.querySelector('input[name="gender"]:checked');
        const activityLevel = parseFloat(document.getElementById("activity").value);

        
        if (!age || !weight || !height || !genderElement || !activityLevel) {
            resultDisplay.textContent = "Vyplňte prosím všechna pole správně.";
            return;
        }

        const gender = genderElement.value;

        
        const dailyCalories = calculateBMR(weight, height, age, gender, activityLevel);

        
        resultDisplay.textContent = `Váš doporučený denní příjem kalorií je přibližně ${dailyCalories.toFixed(2)} kcal.`;
    };
});
