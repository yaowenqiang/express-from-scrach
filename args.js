console.log(process.argv);
// Usage: node args.js a b c --flag

var os = require('os');
console.log(os.type());
console.log(os.hostname());
console.log(os.platform());
console.log(os.arch());
console.log(os.uptime());
console.log(os.freemem());


