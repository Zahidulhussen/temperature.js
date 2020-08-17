const API_KEY = "a01f3a42b66f3736d147225adaf82847";


function getWeather(){
    const city = document.getElementById('input-city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('temperature').innerHTML = data.main.temp.toFixed(0) + ' ' + `&deg;C`;
        document.getElementById('city').innerHTML = data.name;
        document.getElementById('status').innerHTML = data.weather[0].main
        const icon = ("<img src='https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'>"); 
        document.getElementById('img').innerHTML = icon
    }).catch(()=>{
        alert("Please write the valid city name")
    })
}
