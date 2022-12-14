const compositionRouter = require("express").Router();

const Composition = require("../model/CompositionSchema");

compositionRouter.get("/", async (request, response) => {
  const composition = await Composition.find({});
  response.json(composition);
});

compositionRouter.put("/:id", async (request, response) => {
  const id = request.params.id;
  const composition = await Composition.findById(id);
  composition.price = [...composition.price, request.body];
  const updateComposition = await Composition.findByIdAndUpdate(
    id,
    composition
  );
  console.log(updateComposition);
  response.json(updateComposition);
});

module.exports = compositionRouter;
