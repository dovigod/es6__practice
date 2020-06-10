let saveSetting = ({notification, color:{theme}}) =>{
    console.log(theme);
    console.log(notification);
}

/*
saveSetting({
    notification:{
        alert:true,
        send:true
    },
    color:{
        theme: "red"
    }
});*/


////value shorthands


const follow = checkFollow();

const alert = checkAlert();

/*const ssetting ={
    notify:{
        follow: follow,
        alert: alert
    }
}*/
//위처럼 이름이 같을때, 아래처럼 써도 같이 인식함

const ssetting ={
    notify:{
        follow,
        alert
    }
}



///  variable swapping & skipping



let mon = "Sat";
let sat = "Mon";

[sat,mon] = [mon,sat];
// swapping!!!   val은 let이어야해

const days = ["mon","tues","wed"];

const [, , ,thu,fri] = days;

console.log(thu,fri);

//스킵!

