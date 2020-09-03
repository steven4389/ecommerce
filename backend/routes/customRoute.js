import express from 'express';
import Custom from '../models/customModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.put("/:id", isAuth, isAdmin, async (req, res) => {
    console.log("la request", req.body);
    const custom = await Custom.findById(req.params.id);
    if (custom) {
      custom.colorTheme = req.body.colorTheme;
      custom.storeName = req.body.storeName;
      custom.logotipo = req.body.logotipo;
      custom.width = req.body.width;
      custom.height = req.body.height;
      const updatedCustom = await custom.save();
      res.send({ message: 'Custom Updated.', custom: updatedCustom });
    } else {
      res.status(404).send({ message: 'Custom not found.' })
    }
  });

  router.get("/",  async (req, res) => {
    const custom = await Custom.find({});
    res.send(custom);
  });

export default router;