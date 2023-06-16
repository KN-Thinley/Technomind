const express = require("express");
const eventDetails = require("../controller/eventController");
const router = express.Router();

router.post("/event/post", eventDetails.postEvent);
router.get("/event/getSingle/:id", eventDetails.getSingleEvent);
router.get("/event/getAll", eventDetails.getAllEvents);
router.get("/event/getCounts", eventDetails.getEventCounts);
router.delete("/event/delete/:id", eventDetails.deleteEvent);
router.put("/event/update/:id", eventDetails.updateEvents);

module.exports = router;
