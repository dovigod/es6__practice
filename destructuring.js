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

const ssetting ={
    notify:{
        follow: follow,
        alert: alert
    }
}
//위처럼 이름이 같을때, 

const ssetting ={
    notify:{
        follow,
        alert
    }
}
