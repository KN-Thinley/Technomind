const express = require("express");
const incubationInfo = require("../controller/incubationController");
const router = express.Router();

router.post("/incubation/send", incubationInfo.sendForm);
router.get("/incubation/getSingleForm", incubationInfo.getSingleIncubationForm);
router.get("/incubation/getAllForms", incubationInfo.getAllIncubationForm);
router.get("/incubation/count", incubationInfo.getIncubationCounts);
router.delete("/incubation/deleteForm/:id", incubationInfo.deleteForm);
router.put("/incubation/updateForm/:id", incubationInfo.updateForm);
router.get("/incubation/getApproved", incubationInfo.approvedIncubations);
router.get(
  "/incubation/getApprovedCounts",
  incubationInfo.approvedIncubationCounts
);
router.get("/incubation/getPending", incubationInfo.pendingIncubations);
router.get(
  "/incubation/getPendingCounts",
  incubationInfo.pendingIncubationCounts
);
router.get(
  "/incubation/getRejectedCounts",
  incubationInfo.rejectedIncubationCounts
);

router.put("/incubation/updateToApproved/:id", incubationInfo.updateToApproved);
router.put("/incubation/updateToRejected/:id", incubationInfo.updateToRejected);

module.exports = router;
