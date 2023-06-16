const express = require("express");
const incubationInfo = require("../controller/incubationController");
const router = express.Router();

router.post("/incubation/send", incubationInfo.sendForm);
router.get("/incubation/getSingleForm", incubationInfo.getSingleIncubationForm);
router.get("/incubation/getAllForms", incubationInfo.getAllIncubationForm);
router.get("/incubation/count", incubationInfo.getIncubationCounts);
router.delete("/incubation/deleteForm/:id", incubationInfo.deleteForm);
router.put("/incubation/updateForm/:id", incubationInfo.updateForm);

module.exports = router;
