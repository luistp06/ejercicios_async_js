
const select = document.getElementById("character-list")
const image= document.createElement('img')
document.body.appendChild(image)

async function obtenerpersonajes(){
    try{
    const res= await fetch('https://thronesapi.com/api/v2/Characters');
    const characters= await res.json();
    
    for (const character of characters) {
       const option= document.createElement("option")
       option.setAttribute('value',character.imageUrl)
       option.textContent=character.fullName
        select.appendChild(option)
        console.log(character)
    }
    select.addEventListener('change',function(){
        image.src = select.value;
       })
   
}catch(error){
    console.log(error)
}
}
obtenerpersonajes()


