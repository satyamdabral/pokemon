# POKEMON
This is a simple web app that allows you to search for your favorite Pokémon and filter them by type. You can easily find Pokémon of a specific type and view their details.

const searchBar = document.getElementById("searchBar");
const cardContainer = document.getElementById("cardContainer");
const searchButton = document.getElementById("search");
const resetButton = document.getElementById("resetButton");
const filterTypeButton = document.getElementById("filterType");
const typeFilter = document.getElementById("typeFilter");
In this section, various HTML elements are selected using the getElementById method.

filterTypeButton  his code adds a click event listener to the "FILTER" button. When the button is clicked, it gets the selected Pokémon type from the dropdown

const fetchPokemonDetails This code defines the pokemonDetails array, which will store information about Pokémon. 
The fetchPokemonDetails function sends requests to the Pokémon API to fetch details about the first Pokémon
