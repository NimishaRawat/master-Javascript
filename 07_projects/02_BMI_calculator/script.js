const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#height').value)
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height`
    }else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid weight'
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        results.innerHTML = `<span>BMI : ${bmi}</span>`
        const range = document.querySelector('#weight-guide');
        if(bmi < 18.6){
            range.innerHTML = `<p>You are underweight</p>`
        }else if(bmi > 18.6 && bmi < 24.9){
            range.innerHTML = `<p>Your healthy</p>`
        }else{
            range.innerHTML = `<p>You are overweight</p>`
        }
    }
})







