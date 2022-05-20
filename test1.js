const os = require("os");

console.log("SO: ", os.platform());
console.log("FREE MEM:", os.freemem(), "Bytes");
console.log("Release: ", os.release());
