const os = require("os")

let currentCallback = [];

setInterval(()=>{
    const memory = os.freemem()/1024/1024;
    if (memory < 2500){
        for(let i=0; i < currentCallback.length; i++){
            currentCallback[i](`Alert! You have only: ${memory}MB left!`);
        }
    }
    console.log(memory)
},1000);

const registerForAlerts = (callbackFunction)=>{
    currentCallback.push(callbackFunction);
}

module.exports.registerForAlerts = registerForAlerts;
