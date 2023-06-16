const express = require("express");
const controller = require("../controller/userController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 25, // 25MB limit (adjust as needed)
  },
  dest: "../uploads/",
});

const router = express.Router();

router.post("/user/signup", controller.registerUser);
router.post("/user/login", controller.loginUser);
router.get("/user/logout", controller.logoutUser);
router.delete("/user/deleteUser/:id", controller.deleteUser);
router.get("/user/getUser", controller.getSingleUser);
router.get("/user/getAllUsers", controller.getAllUsers);
router.put(
  "/user/updateUser",
  upload.single("profilePic"),
  controller.updateUser
);
router.get("/user/getMentors", controller.getMentorCounts);
router.get("/user/getMentees", controller.getMenteeCounts);

module.exports = router;
