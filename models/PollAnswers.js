const  mongoose  = require("mongoose");
const  Schema  =  mongoose.Schema;

const pollAnswersSchema = new Schema(
  {
    question: {
      type:String
    },
    answer1: {
      type:Number,
      default:0
    },
    answer2: {
      type:Number,
      default:0
    },
    answer3: {
      type:Number,
      default:0
    },
    answer4: {
      type:Number,
      default:0
    }

});

let PollAnswers = mongoose.model("PollAnswers", pollAnswersSchema);
module.exports = PollAnswers;
