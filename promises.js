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

setInterval(console.log,1000,hello);

set
console.log(hello);

//content가 없다면 계속  pending 상태임.. promise가 끝나길 기다리는중  resol e가 끝나야 시행함




