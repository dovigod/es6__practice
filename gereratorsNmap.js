///generators ==> function we can pause



function* listPeople(){
    yield "jisang";
    yield "Seo";
    yield "book";//return for generator
}

const listG = listPeople();

console.log(listG); // ==> suspended

console.log(listG.next());  // ==> return first value
console.log(listG.next()) ;
console.log(listG.next()) ;
console.log(listG.next()) ;  //done : true

//done false & true   same as async await


///proxy  ==?> like filter
const myObj={
    username: 'jisang',
    age : 25,
    password: 12345
}

const userFilter ={// get, set defalut dont change
    get: (target,prop,receiver) =>{/// original obj, request prop , ??
        console.log("getsss");
        console.log(target);
        console.log(prop);
        console.log(receiver);
        return prop ==="password" ? `${"*".repeat(5)}`:target[prop];
    },

    set: () =>{
        console.log("SB wrote ST");
    },
    deleteProperty: (target,prop) =>{
        if(prop === "password"){
            return ;

        }else{
            target[prop] = "DELETED";
        }
       
    }
};
const filteredUser = new Proxy(myObj,userFilter);

console.log(filteredUser.password);

delete(filteredUser.username);
console.log(filteredUser);
/// obhect accessable

///get ==  > proxies 에서 정보 올떼 발동하는 함정
/// set 무언가를 implement할때 발동
//ㅜnot allow to contact obj
//find at MDn

///library 관전ㅁ에선 유용하네 