"use strict"

function log() {
    console.log(document.getElementById("search").value)
}

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<td class="coffeename">' + coffee.name + '</td>';
    html += '<td class="coffeeroast">' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
var roastfiltteredcoffee;

function updateCoffees(e) {
    if(e !== undefined){
    e.preventDefault(); }
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }else if ("all"===selectedRoast){
            filteredCoffees.push(coffee);
        }
    });
    roastfiltteredcoffee = filteredCoffees;
}


function Search_Coffee(e) {
    if (e !== undefined) {
        e.preventDefault();
    }
    var namefilteredcoffee = [];
    roastfiltteredcoffee.forEach(function(coffee) {
        if ((coffee.name.toLowerCase()).includes((searched.value).toLowerCase()) === true && coffee.roast === roastSelection.value) {
            namefilteredcoffee.push(coffee);
        } else if ((coffee.name.toLowerCase()).includes((searched.value).toLowerCase()) === true && "all" === roastSelection.value) {
            namefilteredcoffee.push(coffee);
        }
    });
    console.log(namefilteredcoffee);
    tbody.innerHTML = renderCoffees(namefilteredcoffee);
}



function addCoffee(e) {
    e.preventDefault();
    var newCoffee = document.getElementById("add-coffee").value;
    var selectedRoast = document.querySelector('#new-roast-selection').value;
    var element;
    function findmedium() {
        for (var i = 0 ; i < coffees.length; i++){
            if (coffees[i].id === 4){
                console.log(i);
                element = i;
            }
        }}
    function finddark() {
        for (var i = 0 ; i < coffees.length; i++){
            if (coffees[i].id === 7){
                console.log(i);
                element = i;
            }
        }}
    if (newCoffee === "") {
        alert("Please input a coffee name!");
        }else if(selectedRoast === "light") {
        coffees.unshift({
            id: coffees.length + 1,
            name: newCoffee,
            roast: selectedRoast
        });
    } else if(selectedRoast === "medium"){
            findmedium();
        coffees.splice(element,0,{
            id: coffees.length + 1,
            name: newCoffee,
            roast: selectedRoast
        });
    }else if(selectedRoast === "dark"){
        finddark();
        coffees.splice(element,0,{
            id: coffees.length + 1,
            name: newCoffee,
            roast: selectedRoast
        });}
    updateCoffees();
    Search_Coffee();
}



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searched = document.getElementById("search");

submitButton    .addEventListener('click', addCoffee);
//
// roastSelection.addEventListener("onchange", updateCoffees);
 function getvalueofname(searchingfor) {
     for (var i = 0 ; i < coffees.length; i++){
         if (coffees[i].name.includes(searchingfor) === true){
             console.log("index of "+ (i+1) + " includes " +  coffees[i].name);

         }

     }
 }



function savecoffee() {
    localStorage.setItem('local_coffee', JSON.stringify(coffees));
    console.log("Saved local storage");
}

function loadcoffee() {
    coffees = JSON.parse(localStorage.getItem('local_coffee'));
    tbody.innerHTML = renderCoffees(coffees);
    console.log("Loaded local storage")
}
