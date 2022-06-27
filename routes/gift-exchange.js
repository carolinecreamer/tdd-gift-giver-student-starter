const express = require("express");
const router  = express.Router();

const GiftExchangeModel = require("../models/gift-exchange");
router.use((req,res,next)=>{
    if(req.body && req.body.names)
    next()
    next({message:"No arguments passed in.", status:400})
})
router.post("/pairs", function(req, res) {
    const names = req.body.names;
    const pairs = GiftExchangeModel.pairs(names);
    res.status(200).send({ pairs });
});

router.post("/traditional", function(req, res) {
    const names = req.body.names;
    const traditional = GiftExchangeModel.traditional(names);
    res.send({ traditional });
});

module.exports = router;