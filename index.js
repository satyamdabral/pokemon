const searchBar = document.getElementById("searchBar");
const cardContainer = document.getElementById("cardContainer");
const searchButton = document.getElementById("search");
const resetButton = document.getElementById("resetButton")
const filterTypeButton = document.getElementById("filterType");
const typeFilter = document.getElementById("typeFilter");

filterTypeButton.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedType = document.getElementById("typeFilter").value;

  if (selectedType) {
    const filteredByType = pokemonDetails.filter(
      (pokemon) => pokemon.types === selectedType.toLowerCase()
    );

    cardContainer.innerHTML = "";
    filteredByType.forEach((pokemon) => {
      pokemonCard(pokemon);
    });
  }
});



const pokemonDetails = [];
const fetchPokemonDetails = () => {
  const pokemonData = [];
  for (let i = 1; i <= 150; i++) {
    const pokemonurl = `https://pokeapi.co/api/v2/pokemon/${i}`;

    const promise = fetch(pokemonurl).then((response) => {
      return response.json();
    });
    pokemonData.push(promise);
  }
  Promise.all(pokemonData).then((data) => {
    data.map((ele) => {
      
      const pokemonObj = {
        frontShinyImg: ele.sprites["front_shiny"],
        id: ele.id,
        name: ele.name,
        abilities: ele.abilities.map((ele) => {
          return ele.ability.name;
        }),
      
        types: ele.types[0].type.name,
      };
      pokemonDetails.push(pokemonObj);
    });
    pokemonDetails.map((pokemon) => {
      pokemonCard(pokemon);
    });
  });
};

const pokemonCard = (pokemon) => {
  const cardDiv = document.createElement("div");
  const span = document.createElement("span");
  const heading = document.createElement("h2");
  const img = document.createElement("img");
  const abilitiesDiv = document.createElement("div");

  const abilitiesParas = pokemon.abilities.map((ele, idx) => {
    const abilityPara = document.createElement("p");
    abilityPara.innerText = ele;
    return abilityPara;
  });
 
  const typePara = document.createElement("p");

  span.innerText = pokemon.id;
  img.src = pokemon.frontShinyImg;
  heading.innerText = pokemon.name;
  typePara.innerText = "Type: "+ pokemon.types;
  
  cardDiv.appendChild(span);
  cardDiv.appendChild(img);
  cardDiv.appendChild(heading);
  cardDiv.classList.add("cardDiv");
  abilitiesParas.map((ele)=>{
  
    abilitiesDiv.appendChild(ele);
  })
  cardDiv.appendChild(abilitiesDiv);
  abilitiesDiv.classList.add("abilitiesDiv");
  cardDiv.appendChild(typePara);
  typePara.classList.add("typePara")
  cardContainer.appendChild(cardDiv);
};

searchButton.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(searchBar.value);
    const filteredValues = pokemonDetails.filter((ele)=> ele.name.includes(searchBar.value.toLowerCase()));
  
    cardContainer.innerHTML="";
    filteredValues.map((pokemon)=>{
        pokemonCard(pokemon);
    });
    searchBar.value = "";
})

resetButton.addEventListener("click" ,(e)=>{
    e.preventDefault();
    cardContainer.innerHTML="";
    fetchPokemonDetails();

    typeFilter.innerText = "Types";
})
fetchPokemonDetails();
