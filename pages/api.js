var fs = require('fs');
export default (req, res) => {
    let f = fs.readFile("./static/text.json", "utf-8", function (err, data) {
        let j = JSON.parse(data);
        let one = j[Math.floor((Math.random() * j.length))];
        res.status(200).json(one);
    })
}