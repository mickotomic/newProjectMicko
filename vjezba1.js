class Proba {
    constructor(name, lastName, adress, phone){
        this.name = name;
        this.lastName = lastName;
        this.adress = adress;
        this.phone = phone;
    }

    nameCheck (){
        if(this.name === "Micko" || this.lastName === "Tomic"){
            console.log(this.name + " " + this.lastName);  
        }else{
            console.log("Greska u logovanju!");
        }
}
}

const proba = new Proba ("Micko","Tomic","Amajlije","065/608-999");
proba.nameCheck();
