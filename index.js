const server = require("./api/server");

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  return console.log(`\n *** Server is listening on port 9000 *** \n`);
});
