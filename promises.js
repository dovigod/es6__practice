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

/*

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


*/



///promise.all = => 주어진 모든 약속들이 실행된후 실행되는 하나의 promise 한개의 promise return


const p1 = new Promise((resolve) =>{
    setTimeout(resolve , 5000,"first");
});

const p2 = new Promise((resolve,reject) =>{
    setTimeout(reject , 10000,"fuck");
}); 

const p3 =new Promise((resolve,reject) =>{
    setTimeout(resolve , 3000,"third");
});

//// 여러개의 api들을 받아올떄 사용할수 있ㅇㅇ


const motherPromise = Promise.all([p1,p2,p3]);

/*motherPromise.then(values =>{
    console.log(values);
}).catch(err =>console.log(err));*/

//==> [ f,s,t] ==> 실행 시간에 상관없이 순서대로 array가 만들어짐

//reject로 바꾸면  error발생,, 하나라도 거절당하면 마더약속도 거절당함 거절당하는 순간 바로 거절


//promise race 가장 빠른게 결과임 여러개의 약속들 중 어떤게 먼저와도 상관없다면 쓰자
/*
const racePromise= Promise.race([p1,p2,p3]);
racePromise.then(val => console.log(val)).catch(err => console.log(err));
*/



///finalizing  when u want to save smt either its successs or rejected


/*
const p1 = new Promise((resole,reject) => {
    setTimeout(reject,10000,"first");
}).then(value =>console.log(value))
.catch(err =>console.log(err))
.finally(()=>console.log("fin"));

//보통 api호출시 쓰장
*/

//fetch 가 보통 promise 의 한 종류임
/*
fetch("https://yts.mx/api/v2/list_movies.json")
.then(response => {
    console.log(response);
    return response.json();

}).then( text => console.log(text))
.catch(err => console.log(`{err} fucked ❌`))
.finally(console.log("promise fin"));///==> 우리의 html이 나옴
*/

///async// await ==> for updating promises

///then looks ugly n old fashion  makes code more better
/// can get values for out of promises without then,catch

//async function getMoviesP{}

const getMoviesAsync = async() =>{
    try{
        const responses = await fetch("https://yts.mx/api/v2/list_movies.json");
   ///r responce val을 좌 변수에 대입함  await 기본적으로 async함수안에서 쓰임
   /// 패치 끝날때까지 기다렷다 시행함
   //doesnt matter neither is resolves or rejected
    const json =await responses.json();

    console.log(json);
//  throw Error("Fucked up")
    }catch(e){
        console.log(e);

    } finally{
        console.log("finsihed~~");
    }/// catch는 await쪽 모든 에러를 검출함 뿐만아니라 에러도 잡음 밖에있는

    
}
getMoviesAsync();


//about Parallel with async
