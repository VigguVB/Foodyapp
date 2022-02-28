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