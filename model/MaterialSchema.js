const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  Obj_id: String,
  Obj_name: String,
  elements: String,
  remarks: String,
  kg: Number,
  compositions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Composition",
    },
  ],
});

materialSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;
