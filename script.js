// let count = 0;

// for(let i = 0; i < 100000000; i++){
//     console.log(i);
// }


let count = 0;
let whatToDo= function(){
    // console.log(count);
    document.querySelector("div").innerHTML = count;
    count += 1;

}

var myVar;
function start(){
 myVar = setInterval(whatToDo, 1000);
}

function stop(){
    clearInterval(myVar);


}