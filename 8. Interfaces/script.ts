interface Character{
    name:string
}

function atack(character:Character){
    console.log(character);
    console.log(character.name, "Ataca rapidamente");
}

let character:Character = {
    name: "Ian"
}

atack(character);