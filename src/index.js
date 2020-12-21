import "./style.css";
console.log("Hello webpack!");

const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build")
  }
};
