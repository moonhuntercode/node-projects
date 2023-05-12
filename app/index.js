/*archivos importantes
 *para la api
 *
 */
//dependencies
let http = require("http");
let { StringDecoder } = require("node:string_decoder");
const url = require("node:url");
const { hostname } = require("os");
// el server tiene que
// responder todas las
// solicitudes
let server = http.createServer(function (req, res) {
  // Get the URL and parse it
  let myUrl = new URL(req.url, `http://${req.headers.host}`);
  // igual funciona,pero ignora la base
  // porque el req.url es absoluto
  // let myUrl = new URL(req.url, `http://localhost:3000`);

  // console.log(url.href);

  // get query
  // convert query string as an object
  const query = new URLSearchParams(myUrl.search);
  console.log(query);
  console.log("--------");

  // get the path
  let path = myUrl.pathname;

  //get the method
  let metodo = req.method;
  console.log(`el metodo usado fue:\n${metodo}`);
  console.log("--------");

  // get the headers as an object
  console.log(req.headers);
  console.log("--------");

  // get the payload , if any
  let decoder = new StringDecoder("utf8");
  let buffer = "";
  req.on("data", function (data) {
    buffer += decoder.write(data);
  });
  req.on("end", function () {
    buffer += decoder.end();

    console.log("Request received with this payload:\n" + buffer);
    res.end("ok success");
  });

  // enviar la respuesta ||
  // send the response
  res.end("Hola mundaso");
  console.log("--------");
  console.log(`este es el path:${path}`);
  // console.log(myUrl);
  // registrar la solicitud de el path
  // log the request path
});
// start the server
// and have it listen
// on port 3000
const PORT = 3000;
server.listen(PORT, function () {
  console.log(` the server is listening on port: ${PORT}`);
});
