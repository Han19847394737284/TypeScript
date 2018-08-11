function a( b:Function){
    console.log(b);
}

@a
class Character {
    name:string;

    constructor(name:string){
        this.name=name;
    }
}