const mongoose = require("mongoose");

const compositionSchema = new mongoose.Schema({
  name: String,
  percentage: Number,
  price: Array,
  date: Date,
  material: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Material",
  },
});

compositionSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Composition = mongoose.model("Composition", compositionSchema);

module.exports = Composition;