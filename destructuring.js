///비구조화 , object,array안에 요소들을 활용할수 있는 방법 정리


const setting = {
    notification:{
        follow : true,
        alerts : true,
        unfollow : false
    },
    color:{
        theme: "dark"
    }
};

if(setting.notification.follow){
    //send email
    ///improve pls~~!!!!
}

const{
    notification: {follow =false} = {}, // 디폴트 선언을 통해 만약 오브젝트내에 이 값이 안정해졌으면 수정 가능,, 오브젝트 디폴트 선언 false
    color
    } = setting;

console.log(follow);
console.log(color);


////// Array destructuring
///array 내에 정보 조작 안할시 유용하게 쓸듯

//const API_DATA = ["Mon","Tues","Wed","thurs"];

const API_DATA=() => ["Mon","Tues","Wed","thurs"];
//key 이름이 없으므로 인덱스로만 destructuring 가능

const [mon,tu,we]= API_DATA();

///함수처럼 쓸수도 있음
// 함수가 오브젝트 반환해도 사용 가능함



//renaming ==> API 나 이런곳에서 뻐₩₩₩킹하게 이름이 들어왔을때 사용하자~

// background


const {
    notification:{followss}
} = setting;

const follows = setting.notification.follow || false;

/*
///new method ;
let changedTheme = "blue"

/////API LOADED
( {
    color :{
        theme : changedTheme = "light"
    }
} = setting); 
*/
//기존에 있는 변수 update ~~~~


///// function destructuring

const s1aveSettings = (followAlert,unfollowAlert,mrkAler,them) =>{
    //sm~~
}

/*const saveSettings =  settings => {

    console.log(settings);
}*/
console.log("functionDES");


let saveSettings = ({notificationss,colorss:{themes}}) => {
    
    console.log(colorss);
}


saveSettings({
    notificationss:{
    follow: true,
    alert:true,
    mkt:true,
},
colorss:{
    themes:"red"
}});



///mcuh better





