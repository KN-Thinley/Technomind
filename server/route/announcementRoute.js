const express = require("express");
const announcementDetails = require("../controller/announcementController");
const router = express.Router();

router.post("/announcement/post", announcementDetails.postAnnouncement);
router.get(
  "/announcement/getSingle/:id",
  announcementDetails.getSingleAnnouncement
);
router.get("/announcement/getAll", announcementDetails.getAllAnnouncements);
router.get(
  "/announcement/getCounts",
  announcementDetails.getAnnouncementCounts
);
router.delete(
  "/announcement/delete/:id",
  announcementDetails.deleteAnnouncement
);
router.get("/announcement/update/:id", announcementDetails.updateAnnouncements);

module.exports = router;
