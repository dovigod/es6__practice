//


const person = {
    name : "fucker";
    age : 13
}

person.name = "ass";
/// 가능  상수 변수면 못바꾸는데, 멤버 접속은 허용




/////hoisting ////

console.log(jet);
var jet =" awd";

--> undefined  

///
console.log(jey);
---> error

///왜?? --> js가 hoisting 해줘서 마치 원형선언마냥 변수 선언을 내부적으로 가장 먼저 시행함 다만 , undefined로

//이때 !!

console.log(ass);
let ass ="Wdwa";

-->> error 발생 !! hoisting 방지 가능




//var의 쓰레기 같은점 2 no block scope

if(true)
{
    var ass="11";
}

console.log(ass);
 
--> 11 뜸 지역 변수개념 무시
var  자체가 기본적으로 function scope 이어서 function 내에서만 지역변수마냥 활용됨


---- 반대로 잘쓰면 전역변수마냥 활용가능할듯

//////// 접근 가능성


if(condition 1)
    {
        let 2;
        if(condition 2){
             let 1;
        }
    }


변수 1번은 condition 1번 영역에 간섭 가능 하지만 변수2 는 condition 2영역에 접근 못함   안에서 -> 밖으로 가능

