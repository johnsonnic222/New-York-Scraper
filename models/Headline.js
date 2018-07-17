var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var headlineSchema = new Schema({

  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  }
});


var Headline = mongoose.model("Headline", headlineSchema);


module.exports = Headline;