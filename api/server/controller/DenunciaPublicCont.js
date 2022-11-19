const DenunciaPublic = require("../model/DenunciaSchema");
module.exports = {
  incluir: async (req, res) => {
    let obj = new DenunciaPublic(req.body);
    obj.save((err, obj) => {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },
};
