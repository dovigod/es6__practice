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
/*
const cObject ={
    username: "jisang",
    sayHello : () =>console.log(`hello my name is ${username}`)
}*/
/// this refers whole class!!!!!!

///diff is object = created , class == blueprint  factory of obj
 
/*
class Admin extends User{
    /*constructor(superadmin){
        this.superadmin = superadmin;
    } /// 이러면 전에 있던 건설자를 잃음*/
  /*  deleteWebsite(){
        console.log("deleting all");
    }
}*/

////super의 배경 ,, extend시 constructor 에 작성하면 기존것을 잃게 되는데...


class Admin extends User{
    constructor({name,lastName,email,password,superAdmin,isActive}){
        super({name,lastName,email,password}); // calls constructor of base class
        this.superAdmin = superAdmin;
        this.isActive = isActive;
    }

}

const admin = new Admin({
    username: 'jisang',
    lastName:"seo",
    email: "inaki@naver.com",
    password: 123124,
    superAdmin: true,
    isActive: true
})


console.log(admin);

///import 해서 class 가져오고 extend해서 써도돼


class Counter{
    constructor({counterId,plusId,minusId,initialNumber =0}){
        this.count = initialNumber;
        this.counter = document.getElementById(counterId);
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.addEventListeners();

        
    }
    /////event Listener 사용시, event handler의 this 는 event target 를 가르킴
    addEventListeners(){
        console.log(this);
        
        this.plusBtn.addEventListener("click",this.increase);
        this.minusBtn.addEventListener("click",this.decrease);
    }
  /*  increase(){
       
        this.count = this.count +1;
        console.dir(this.parentNode);
        console.dir(this.parentNode.childNodes[1]);
        this.parentNode.childNodes[1].repaintCount();
    }*/

    increase = () =>{
        this.count = this.count+1;
        this.repaintCount();
    }
    decrease=()=>{  //애로우 함수로 바꾸면 this가 항상 클래스를 가르킴
        this.count = this.count -1;
        this.repaintCount();
    }
    repaintCount(){
        console.dir(this);
        this.counter.innerText = this.count;
    }
}

const col = new Counter({counterId: "count",plusId: "add", minusId:"minus"});

