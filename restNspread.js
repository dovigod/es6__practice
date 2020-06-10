/*const friends = [1,2,3,4];

///spread ==> 변수 가져와서 풀어헤침


const n = ["a","b"];
console.log(friends);
console.log(...friends);// 결과에 배열 상태 해제

console.log([...friends,...n]);


const nice = {
    name: "jisang",
    age: "25"
};

const hello = {
    nice: true,
    hello:"hello"

};

console.log({...nice, ...hello});*/
/// into 1 obj;


///addding obj erase obj


const people = ["jisang","nico"];

const newp = ["ass",...people];


const jisang = {
    name:"jisang",
    age: 25
}

console.log({...jisang, password: 123});


const lastName = prompt("Last name");
/*
const user = {
    username : "jisang",
    age:25,
    lastName : lastName !== "" ? lastName : null
}*/

const user = {
    username:"jisa",
    age: 25,
    ...(lastName !=="" && {myname:lastName})///여기 중가로 안치면 글자마다 배열화됨;
}

console.log(user);

///조건부로 넣어줬엉

