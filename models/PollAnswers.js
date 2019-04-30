const  mongoose  = require("mongoose");
const  Schema  =  mongoose.Schema;

const pollAnswersSchema = new Schema(
  {
    question: {
      type:String
    },
    answer1: {
      type:Number
    },
    answer2: {
      type:Number
    },
    answer3: {
      type:Number
    },
    answer4: {
      type:Number
    }

});

let PollAnswers = mongoose.model("PollAnswers", pollAnswersSchema);
module.exports = PollAnswers;
