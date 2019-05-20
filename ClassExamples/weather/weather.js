var apiKey = "9361bd03ec7175e9eea92fdf7a717518";
var url = "http://api.openweathermap.org/data/2.5/weather?q=";





//GETTING USER CITY INPUT
let $cityInput = $('#submit').click((e)=>{
    let $city = $('#city').val();
    let $clear = $('#city').val('');
    console.log($city);
    $.get(url + $city + '&appid=' + apiKey).done((result)=>{
        console.log(result.main.temp);
        temperatureConversion(result.main.temp);
    })  
})

//TEMPERATURE CONVERSION
function temperatureConversion(kelvin){
    let degreeC = Math.floor(kelvin - 273.15);
    let degreeF = Math.floor(degreeC*1.8+32);
    console.log(degreeC);
    console.log(degreeF);
    $('#temp').html(`${degreeC}C
    ${degreeF}F`)
}

// fetch('http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=9361bd03ec7175e9eea92fdf7a717518')
// .then((result)=>{
//     return result.json()
// })
// .then((jsonObj)=>{
//     console.log(jsonObj)
// })