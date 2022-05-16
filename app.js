const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
const module1 = require('./public/js/module');


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

app.listen(port, () => {
    module1.obj.cal();
    module1.obj.sub();

  console.log(`Example app listening on port ${port}`);
})