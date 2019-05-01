const  mongoose  = require("mongoose");
mongoose.Promise  = require("bluebird");
const  url  =  "mongodb://localhost:27017/poll";
const  connect  =  mongoose.connect(url, { useNewUrlParser: true , useFindAndModify: false });
module.exports  =  connect;
