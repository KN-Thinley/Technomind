const express = require("express");
const testimonialDetails = require("../controller/testimonialController");
const router = express.Router();

router.post("/testimonials/post", testimonialDetails.postTestimonial);
router.get(
  "/testimonials/getSingle/:id",
  testimonialDetails.getSingleTestimonials
);
router.get("/testimonials/getAll", testimonialDetails.getAllTestimonial);
router.get("/testimonials/allCounts", testimonialDetails.getTestimonialCounts);
router.delete(
  "/testimonials/delete/:id",
  testimonialDetails.deleteTestimonials
);
router.put("/testimonials/update/:id", testimonialDetails.updateTestimonials);
router.get(
  "/testimonials/getApproved",
  testimonialDetails.approvedTestimonials
);
router.get(
  "/testimonials/getApprovedCounts",
  testimonialDetails.approvedTestimonialsCounts
);

module.exports = router;
