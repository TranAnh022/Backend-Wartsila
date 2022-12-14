const materialsRouter = require("express").Router();

const Material = require("../model/MaterialSchema");

materialsRouter.get("/", async (request, response) => {
  const materials = await Material.find({}).populate("compositions");
  response.json(materials);
});

materialsRouter.put("/:id", async (request, response) => {
  const { id } = request.params.id
  const materials = await Material.findById(id)
  const updateMaterial = [...materials,

  ]
})

module.exports = materialsRouter;
