////symbol  super unique data type
/*

const hello = Symbol("hello")/;///description 가능 no effects
const bye = Symbol("hello");  //nothing matters
//hello === bye ///false   unique


const superBig ={
[Symbol("jisang")]:{
        age:123,
        handsome: true
    },
    [Symbol("jisang")]:{
        age:1010;

    }
}*/

//Object.keys(superBig)  => symbol is not considered  ==> []
/*
const s = Object.getOwnPropertySymbols(superBig);

//s.forEach(symbot=>console.log(~~~))


//superBig[jisang].handsome = false;  ==> 기존 jisang 파괴됨 이때 심볼 필요


//////sets~~~ stores any unique val


const user ={
    age: 12,
    name : "jisang",

};

user.oneMore =true;

*/
const SSets = new Set([1,2,3,4,4,5,6]);

///-> erase combinated value
console.log(SSets);

SSets.has(9);
//delete --> return boolean true false
SSets.clear();
console.log(SSets);

///dont have to specify index;

SSets.add("Hi");
SSets.add([1,2,3,4,5]);

console.log(SSets);
SSets.delete("Hi");
SSets.clear();

SSets.size;
SSets.add(1,2,3,4,5);

SSets.keys();

//save obj ~~~ like database


///weak Sets



const weakSet = new WeakSet();
//can only store Obj;

//add delete has usable
/// garbage colletion  ==> if nothing inside???  --automaticly deleted

const ass ={
    im: true
}

weakSet.add(ass);
/// never go away

weakSet.add({hello:true});

console.log(weakSet);
//hello 같은경우 제거당함

