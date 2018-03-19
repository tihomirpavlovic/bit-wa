const memoryInfo = require("./memoryInfo.js");

const onLowMemory = function(message){
    console.log(message);
}

memoryInfo.registerForAlerts(onLowMemory);