const https = require("https");

if (process.argv.length < 4) return (console.log("Error: Need 2 arguments (size, specid)"));

const size = process.argv[2];
const specid = process.argv[3];

const options = {
  host: "www.puzzle-nonograms.com",
  method: "GET",
  path: `/?specific=1&size=${size}&specid=${specid}`
};

const callback = function(response) {
  let str = "";

  response.on("data", function(chunk) {
    str += chunk;
  });

  response.on("end", function() {
    const regexExp = /var task = '([\d.\/]+)'.+puzzleWidth: (\d+), puzzleHeight: (\d+)/;
    const match = regexExp.exec(str);
    const table = match[1].replace(/\./g, ",").replace(/\//g, " ");
    const width = match[2];
    const height = match[3];
    const param = `"${width} ${height} ${table}"`;
    console.log(param);
  })
}

https.request(options, callback).end();