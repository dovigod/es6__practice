
//about functions

const fuck = function testing(yeah){ return 0;};

console.log(fuck);  ///가능

function assss(awdwa){

}   //// Most basic style


//arrow function

const names = ['jisang', 'fuck', ' dong'];

function addHeart(item){
    return item + '🎈';
}
const hearts = names.map(addHeart);

console.log(hearts);

/// map 메소드는 항상 뭔갈 리턴하는데, 이놈이 예를 들어 0리턴하게하면, 000 배열만듬;;

// arrow function ->
//인자 1개면 가로 안쳐도됨
const greet = names.map((item,index)=>{
    console.log(`hi ${item} its ${index}`);
});
greet;

//gooood~~


//implicit return 🌄

const grett = names.map(item => item+ '🚒');

//아이템 프러스 이모티콘이 리턴됨 자동으로   **********키포인트는 {}쓰는 순간 implicit return 기능을 소실함  인자 필요없으면 ()=> 하셈

const sayHi = ( hey = "jis") => "hellow" + hey;

console.log(sayHi());



///Trash Method 1



/// use `back ticks 



/// not to use arrow func while this statement
buttona.addEventListener(function(){
    this  ///자바스크립트가 자체적으로 클릭 버튼을 this에 넣음
    console.log("AWDWADA");

    this.style.backgroundcolor = "red"; /// 쌉가능
})

///근데 여기서 만약 function 없애고 애로우 함수로 빠꾼다? ->  this 는 더이상 버튼을 안가르키고 window 를 가르킴 이게 뭘까

const jisang ={
    name : "jisang",
    age : "25",
    addyear : () =>{
        this.age ++;
    }

    ///해결버 -> addyear(){ this.age++;}
}


jisang.addyear();
///해도 25세임 왜냐? this가 window를 가르키고있기 떄문!



///method

//find

const email = ["www.naver.com","wwww.hmaowfaw","www.@gmail","@@@gmail","wwwwmnaver.com@gmail"];

const asss  = email.find(item= true);

console.log(asss);
/// 네이버 검출

 const adwda = email.find(iti => iti.includes("hm"));   // ㅈㄴ 유용해애애~~~~~~~~~~₩

//include는 만족시 트루


///fillter

const noGmail = email.filter(im => im.includes(!im.includes("gmail")));
///필터는 해당 조건 만족시 그걸로만 배열 생성


(email.forEach(po => po.split("@")[0]));

//@기준으로 앞뒤로 나눠 2차원 배열 따라서 앞쪽만 가져오고싶으면 위처럼

//map은 위를 배열화 시켜주니깐,

const clean=[];

clean.push(email.forEach(po => po.split("@")[0]));

/*반면에 콜백함수를 이용하여 동작을 구현하면 처리가 끝날 때까지 기다리는 것이 아니라 처리가 끝나는 시점에서 함수를 호출합니다. 즉, 정말로 필요할 때만 함수를 호출해서 효율이 좋고 웹사이트에서도 여러 가지 동작을 동시에 할 수 있습니다.
 
 이와 같은 방법을  비동기식 처리방법이라고 합니다. 현재 웹사이트들은 비동기식 처리방법인 ajax를 활용하여 더 활발하게 동작할 수 있게 되었습니다. 따라서 콜백 함수는 비동기식 처리방법에 있어서 정말 중요한 개념이라고 할 수 있습니다*/


 //만약 오브젝트화 시켜서 반환하고프면?

 const cleaned = email.map((emails,index)=> ({
     name : emails.split("@"),
     index}
 ))






 