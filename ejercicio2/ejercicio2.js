const image= document.getElementById("random-image");


function getrandom(max){
    return Math.floor(Math.random() * max);
}
firstgeneration = getrandom(151);



async function obtenerpokemon(){
    try{
    const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${firstgeneration}`);
    const poke= await res.json();
    console.log(poke)
    image.src= poke.sprites.front_default;
    }
    catch(error){
        console.log("error")
}
}
obtenerpokemon()
