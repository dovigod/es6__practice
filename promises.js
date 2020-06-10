///비동기성 동기성
 //fetch()   get data from web


 /*
const hello = fetch("https://www.google.com");
console.log("hello");
console.log(hello);

"js의 비동기성"

결과 ==  hello -> pending -> error
*/


//creating promises

//비동기 작업이 맞이할 미래의 완료 혹은 실패와 그 결과값을 나타냄 
//=> 실행할수 있는 함수 만들어야해 


const hello = new Promise((resolve,reject)=>{
     setTimeout(()=>{
         resolve("finish");
     },3000);
});

//setInterval(console.log,1000,hello);

console.log(hello);

//content가 없다면 계속  pending 상태임.. promise가 끝나길 기다리는중  resol e가 끝나야 시행함
//핵심은 아직모르는 value와 함께 작업 가능하게 해줌



//then 명령어 ->  작업 완료시 값을 넘김

hello.then(value =>console.log(value)).catch(value=>{console.timeLog(value)});

//cathch는 오류 잡을떄   then 실행시 젋댜 실행안댐

///chain reation if, get data of API for decription, decrypt, filization

const jisang = new Promise((resolve,reject)=>{
    resolve(2)
});


jisang.then(numb =>{
    console.log(numb*2);
    return numb*2;
}).then(ot=>{
    console.log(ot);
    return ot;
}).then(()=>{
    throw Error("fuck!!!");
}).then(last =>{
    console.log(last);
}).catch(error => console.log(error)); //이러면 에러 객체가 발생하는 곳을 로그해줌