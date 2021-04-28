const express = require('express');
const app = express();

// app.use(express.static("public"));
// app.set("view engine",'ejs');

app.get("/" , function(req,res){
   res.send("Welcome Deploy Suceessfully");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("Server started on port ", PORT);
}); 