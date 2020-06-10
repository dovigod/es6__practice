//of Method



//const friends = ["nico","jisang","mark"]; same as below

const friends = Array.of("nico","jisang","mark");


/// from method   reference index.html


///background 

const button = document.getElementsByClassName("buttons");
// give eventlisteners

//button.foreach();
//위에 성립 x error 발생 이런 상황에서 from method 가 유용함


//Array.from()  array-like-object를 array로 만들어줌

Array.from(button).forEach(button =>{
    button.addEventListener("click", btn => {
        console.dir(btn.target);
        btn.target.style.color ="red";
        })
});

/// 유용하쥬?
//find ==> element 중 true 를 리턴
//findindex ==>  elemt 중 true의 index 리턴
//fill from start~end    arr.fill(val,start,end);

