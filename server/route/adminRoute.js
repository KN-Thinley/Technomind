const express = require("express");
const adminCredentials = require("../controller/adminController");
const router = express.Router();

router.post("/admin/signup", adminCredentials.signUpAdmin);
router.post("/admin/login", adminCredentials.loginAdmin);
router.get("/admin/logout", adminCredentials.logoutAdmin);
router.delete("/admin/delete/:id", adminCredentials.deleteAdmin);
router.get("/admin/getAdmin", adminCredentials.getSingleAdmin);
router.get("/admin/getAllAdmins", adminCredentials.getAllAdmin);
router.put("/admin/updateAdmin", adminCredentials.updateAdmin);
router.get("/admin/adminCounts", adminCredentials.getAdminCounts);

module.exports = router;
