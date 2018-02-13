// function log (message){
//     console.log(message);
// }

// var message = 'hello there';
// log (message);

let message; 
message = 'abc';
let endsWitchC = (<string>message).endsWith('c'); //type assertion
let alternativeWay = (message as string).endsWith('c'); //type assertion
 
let log = function (msg){
    console.log(msg);
}
let doLog = (msg) => console.log(msg); // array function


let drawPoint = (point) =>{
    //...
}

drawPoint ({
    name: 'Joy'
});