var http = require("http");
http.get(process.argv[2], function(response) {
    if (response.statusCode != 200) {
        console.log("request failed, status " + response.statusCode);
        return;
    }
    response.setEncoding('utf8');
    var body = "";
    response.on("data", function(data) {
        body = body + data;
    });
    response.on('end', function() {
        console.log(body.length);
        console.log(body);
  });
}).on("error",console.error);