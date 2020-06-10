//class


class User{
    constructor(name,lastName,email,password){
        this.username = name;
        this.lastName = lastName;
        this.email=email;
        this.password=password;


    }
    sayhello(){
        console.log(`hellow my name is ${this.username}`)

    }
    getProfile(){
        console.log(`${this.username},${this.password}`);
    }
    updatePW(old,newP){
        if(old === this.password){
            this.password = newP;
        }
        else{
            console.log("error");        }
    }
}

const user = new User();

console.log(user.username);

setTimeout(user.sayhello(),2000);

const cObject ={
    username: "jisang",
    sayHello : () =>console.log(`hello my name is ${username}`)
}
/// this refers whole class!!!!!!

///diff is object = created , class == blueprint  factory of obj
 
/
class Admin extends User{
    /*constructor(superadmin){
        this.superadmin = superadmin;
    } /// 이러면 전에 있던 건설자를 잃음*/
    deleteWebsite(){
        console.log("deleting all");
    }
}

