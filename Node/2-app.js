const os = require('os');

// method return infor about current user

const user = os.userInfo();
console.log(user);

// methods returns the system uptime in sec

let upTime =  (`uptime ${os.uptime()} sec`); 
console.log(upTime);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);