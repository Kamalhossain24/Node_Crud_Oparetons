const mongoose = require("mongoose");
require("./employe.model")

mongoose.connect(
    "mongodb+srv://<useNmaae>:<password>@cluster0.b3klw.mongodb.net/EmployeeDB?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
        // useUnifiedTopology: true
    }, (err) => {
        if (!err) {
            console.log("mongo db connection secsess");
        }
        else {
            console.log("Error in db connections");
        }
    }
)