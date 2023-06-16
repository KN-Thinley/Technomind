const adminModel = require("../model/adminModel");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "../configuration/config.env" });

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signUpAdmin = async (req, res) => {
  try {
    const admin = await adminModel.create(req.body);

    console.log(req.body);
    res.status(201).json({
      message: "successful",
      data: {
        adminData: admin,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const admin = await adminModel.findbyCredentials(
      req.body.email,
      req.body.password
    );
    const token = signToken(admin._id);
    //checking the admins credentials
    res.status(200).send({ message: admin, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logoutAdmin = (req, res) => {
  try {
    res.clearCookie(`session_id`);
    res.status(200).json({ message: "Admin Logged Out" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAdmin = await adminModel.findByIdAndRemove(id);

    if (!deleteAdmin) {
      return res.status(404).json({ message: "admin not found" });
    }
    res.json({ message: "admin deleted successfully" });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const getSingleAdmin = async (req, res) => {
  try {
    res.json(req.admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllAdmin = async (req, res) => {
  try {
    const admins = await adminModel.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getAdminCounts = async (req, res) => {
  try {
    const adminCounts = await adminModel.countDocuments({});
    res.json(adminCounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const { _id } = req.admin;
    const { name } = req.body;

    const updateUser = await userModel.findByIdAndUpdate(_id, {
      name,
    });

    if (!updateUser) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.json(updateUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signUpAdmin,
  loginAdmin,
  logoutAdmin,
  deleteAdmin,
  updateAdmin,
  getSingleAdmin,
  getAllAdmin,
  getAdminCounts,
};
