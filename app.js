///cloning css Components with template literalss


const sty1led = (css) => console.log(css);

sty1led`boreder-radius:10px;
color:blue`;


/// -> styled 옆에 string들로 함수가 시행됨

// 목표 :: 

const sty2led = aElement => {
    return document.createElement(aElement);
}

const title = sty2led("h1");

console.log(title);
// h1 element made;


//sty2led("hi")(`border-radius:10px;
//color:blue;`);

///이건 안됨 why? 함수 두번 호출의 느낌임 밑과 같음

//<h1><h1>`border-radius:10px;
//color:blue;`;   h1을 한번더 호출하는 느낌이야 

console.log("ㅡㅡㅡㅡㅡㅡㅡ");

const styled = elem =>{
    const el = document.createElement(elem);

    return args => {
        const styled = args[0];
        el.style = styled;
        console.log(args[0],args[1]);
        console.log("11111");
        console.log(args);
        return hellow =>{
            console.log(`1번 ::${hellow[0]}, 2번:: ${hellow[1]}`);
            console.log(hellow);
            console.log(args);
        };
    }
}

console.log("ㅡㅡㅡㅡㅡㅡㅡ tit 1");
const tit = styled("div")`{
    border-radius:5px;
    color:blue;
}`;
console.log(tit);


console.log("ㅡㅡㅡㅡㅡㅡㅡ tit 2");
const tit2 = styled("div")`{
    border-radius:5px;
    color:blue;
}``{cursor : pointer;}`;

console.log(tit2);
console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

//////test
const tmp = styled("h1");

console.log(tmp);

const test = qqq =>{
   
    return smt=any =>{
        return "aaaa";
    };
}

console.log(test("aaa"));


const riddle1 = asss =>{
    console.log(asss);
    return riddle2 =>{
        console.log(riddle2);
    }
}
const or = "12312"
const qpqp = `heaallows fuckers`;
riddle1(qpqp)("123");
