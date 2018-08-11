export class Character {

    type:string= undefined;
    name:string = undefined;
    power:number = 0;
    pv:number = 100;
    pm:number = 0;

    constructor(type:string, name:string, power:number, pm:number){
        this.type = type;
        this.name = name;
        this.power = power;
        this.pm = pm;
    }
}