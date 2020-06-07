// var fs = require('fs');
let j = require("../static/text.json");
export default (req, res) => {
    let one = j[Math.floor((Math.random() * j.length))];
    res.status(200).json(one);
}