const express = require('express');
// const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;


app.get('/', (req, res) => {

  res.setHeader('Content-Type', 'text/html');
  res.write("<p>This is from the server</p>");
  
  res.json(console.log('hi from server'));
  res.send('hello from the server');
  
  res.send(`<ul>
    <li> Download <a href="/server/raspberrypiserver/public/logo192.png">1</a> >/li>
    </ul>`);
});

app.get("/server/raspberrypiserver/public/logo192.png", function(req, res, next){
  var filePath = path.join(__dirname, 'server','raspberrypiserver','public','logo192.png');

  res.download(filePath, function (err) {
    if (!err) return; // file sent
    if (err.status !== 404) return next(err); // non-404 error
    // file for download not found
    res.statusCode = 404;
    res.send('Cant find that file, sorry!');
  });
});


// app.get('./raspberrypiserver/public/index.html',(req,res)=>{

//   res.sendFile(path.join(__dirname,'raspberrypiserver','public','index.html'));

// })

// app.get('/',(req,res) => {
// });


// app.listen(process.env.port || 5000);

app.listen(port, () => console.log(`Server running on port ${port}`));