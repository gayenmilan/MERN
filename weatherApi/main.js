const locationInput = document.querySelector('#locationInput');
const submit = document.querySelector('#submit');

const display = document.querySelector('#display');


// const inputVal = "Kolkata";

let inputVal = ''



const apiCall = async () => {
    const url = await fetch(`https://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${inputVal}&aqi=no`)
    const result = await url.json()
    console.log(result)

    try{

    const res = result.current.temp_c;

    const text = result.current.condition.text;

    console.log(res);

    
        if(text === 'Moderate or heavy rain with thunder'){
            display.innerHTML = ''
            display.innerHTML += `
            <img src="img/rainy.svg" alt="">
            <p>Temp is ${res}</p>`
        }else if(text === 'Sunny'){
            display.innerHTML = ''
            display.innerHTML += `
            <img src="img/day.svg" alt="">
            <p>Temp is ${res}</p>`
        }else if(text === 'Partly cloudy'){
            display.innerHTML = ''
            display.innerHTML += `
            <img src="img/cloudy.svg" alt="">
            <p>Temp is ${res}</p>`
        }else{
            display.innerHTML = ''
            display.innerHTML += `
            <img src="img/thunder.svg" alt="">
            <p>Temp is ${res}</p>`
        }
    }

    catch(error){
        display.innerHTML = ''
    const errorMsg = result.error.message;
        display.innerHTML += `<p>${errorMsg}</p>`
    }
}

submit.addEventListener('click', () => {

    inputVal = locationInput.value;

    apiCall()
})


