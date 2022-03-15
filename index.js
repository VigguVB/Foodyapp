const darkMode = () =>{
    document.body.style.backgroundColor = "black";
    document.getElementById('quickSearch').style.boxShadow = "1px 3px 18px blue";
    document.getElementsByClassName('dropdownCity')[0].style.backgroundColor = "black"
    document.getElementsByClassName('selectrestaurant')[0].style.color = "hsl(0, 96%, 39%)";
    document.getElementsByClassName('dropdownRestaurant')[0].style.backgroundColor = "black"
    document.getElementById('logo').style.boxShadow = "1px 2px 16px hsl(0, 96%, 39%)";
    document.getElementById('logo').style.backgroundColor = 'black';


    var tiles = document.getElementsByClassName('tileContainer');
    for(let i=0; i<=tiles.length; i++){
        tiles[i].style.boxShadow = "1px 3px 18px blue";
    }
   
}
const lightMode = () =>{
    document.body.style.backgroundColor = "white";
    document.getElementById('quickSearch').style.boxShadow = "2px 5px 12px hsla(0, 0%, 0%, 0.815)";
    document.getElementsByClassName('dropdownCity')[0].style.backgroundColor = "white"
    document.getElementsByClassName('selectrestaurant')[0].style.color = "black";
    document.getElementsByClassName('dropdownRestaurant')[0].style.backgroundColor = "white"
    document.getElementById('logo').style.boxShadow = "2px 5px 12px hsla(0, 0%, 0%, 0.815)";
    document.getElementById('logo').style.backgroundColor = 'white';


    var tiles = document.getElementsByClassName('tileContainer');
    for(let i=0; i<=tiles.length; i++){
        tiles[i].style.boxShadow = "2px 5px 12px hsla(0, 0%, 0%, 0.815)"
    }
}

function getcity(){
    var x = document.getElementById('output');
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(showcity) 
    }
    else{
        x.innerText="Sorry !!! Geo is not supported"
    }
}
function showcity(data){
let latitude = data.coords.latitude;
let longitude = data.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
fetch(url,{method: "GET"})
.then((response)=>response.json())
.then((data)=>{
    var x = document.getElementById('output');
    let cityname = data.city.name;
    let temperature = `${data.list[0].temp.day} degree`;
    let output = `Weather of ${cityname} is ${temperature}`
    x.innerText = output;
})
}