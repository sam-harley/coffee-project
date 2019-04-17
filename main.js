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
tbody.innerHTML = renderCoffees(coffees);
//
// roastSelection.addEventListener("onchange", updateCoffees);
 function getvalueofname(searchingfor) {
     for (var i = 0 ; i < coffees.length; i++){
         if (coffees[i].name.includes(searchingfor) === true){
             console.log("index of "+ (i+1) + " includes " +  coffees[i].name);

         }

     }
 }
 updateCoffees();