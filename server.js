var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content= {
    title:'arc-one',
    heading:'artcile-one',
    date:'aug 18,2017',
    content:`
    <p> the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's.
    </p>
    <p> the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's.conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's.conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's.
     </p>
     <p> the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's. the conectent is baksfjklfda'lsafjska's.
     </p>`
};
function creatTemplate(data) {
    var title= data.title
    var heading= data.heading
    var date= data.date
    var content= data.content
    
    var htmlTemplate = `
    <html>
        <title>
            ${title}
        </title>
            <link href="/ui/style.css" rel="stylesheet" />
        <body>
        <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <div>
                    <h3>
                        ${heading}
                    </h3>
                </div>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
         </div>
        </body>
        
    </html>
    
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/arc-one', function(req, res) {
res.send(creatTemplate(arc-one))
    
});

app.get('/arc-two', function(req, res) {
      res.send(createTemplate(arc-two))
});

app.get('/arc-three', function(req, res) {
res.send(creatTemplate(arc-three))
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
