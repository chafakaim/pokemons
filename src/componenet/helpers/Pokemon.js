export default class Pokemon{
   
    constructor(id=new Date().getTime(),name,picture='https://',hp,cp,types){

    this.id=id;
    this.name=name;
    this.picture=picture;
    this.hp=hp;
    this.cp=cp;
    this.types=types;
    }

}