const  express  = require("express");
const  connectdb  = require("./../dbconnect");
const  Polls  = require("./../models/Poll");
const  router  =  express.Router();

router.route("/results").get((req, res, next) =>  {
        res.setHeader("Content-Type", "application/json");
        res.statusCode  =  200;
        connectdb.then(db  =>  {
            Polls.find({}).then(chat  =>  {
            res.json(chat);
        });
    });
});
module.exports  =  router;
