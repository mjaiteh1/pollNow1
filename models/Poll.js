const  mongoose  = require("mongoose");
const  Schema  =  mongoose.Schema;

const pollSchema = new Schema(
  {
    question: {
      type:String
    },
    answer1: {
      type:String
    },
    answer2: {
      type:String
    },
    answer3: {
      type:String
    },
    answer4: {
      type:String
    }

});

let Poll = mongoose.model("Poll", pollSchema);
module.exports = Poll;
