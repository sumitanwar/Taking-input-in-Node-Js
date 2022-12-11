const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Please Enter Your Name: ", (name) => {
  console.log("Hello" + " " + name);
  rl.close();
});
