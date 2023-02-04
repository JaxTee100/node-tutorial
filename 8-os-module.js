const os = require('os');

const user = os.userInfo()


console.log(user)



const time = os.uptime()


console.log(`the system uptime is ${time}`);


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()


}


console.log(currentOs)