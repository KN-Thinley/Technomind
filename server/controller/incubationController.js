const incubationModel = require("../model/incubationModel");

const sendForm = async (req, res) => {
  try {
    const incubation = await incubationModel.create(req.body);
    console.log(req.body);

    res.status(201).json({
      message: "form submitted succesfully",
      data: { incubationData: incubation },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteForm = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteIncubation = await incubationModel.findByIdAndRemove(id);

    if (!deleteIncubation) {
      res.status(404).json({ message: "incubation not found" });
    }
    res.json({ message: "incubation form deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSingleIncubationForm = async (req, res) => {
  try {
    res.json(req.incubation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllIncubationForm = async (req, res) => {
  try {
    const incubations = await incubationModel.find();
    res.json(incubations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getIncubationCounts = async (req, res) => {
  try {
    const incubationCounts = await incubationModel.countDocuments({});
    res.json(incubationCounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateForm = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      gender,
      dateOfBirth,
      cid,
      academicQualification,
      currentAddress,
      email,
      phoneNumber,
      institution, 
      training, 
      duration,
      proposedBusinessInfo,
      briefDesp,
      supportRequirements,
      technology,
      locationAfterGrad,
      spaceRequirement,
      status,
    } = req.body;

    const updateIncubationForm = await incubationModel.findByIdAndUpdate(
      id,
      {
        name,
        gender,
        dateOfBirth,
        cid,
        academicQualification,
        currentAddress,
        email,
        phoneNumber,
          institution,
          training,
          duration,
        proposedBusinessInfo,
        briefDesp,
        supportRequirements,
        technology,
        locationAfterGrad,
        spaceRequirement,
        status,
      },
      { new: true }
    );

    if (!updateIncubationForm) {
      return res.status(404).json({ message: "Incubation Form Not Found" });
    }
    res.json(updateIncubationForm);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const approvedIncubations = async (req, res) => {
  try {
    const approvedIncubations = await incubationModel.find({
      status: "Approved",
    });

    res.json({ approvedIncubations });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const approvedIncubationCounts = async (req, res) => {
  try {
    const approvedIncubationCounts = await incubationModel.countDocuments({
      status: "Approved",
    });
    res.json(approvedIncubationCounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  sendForm,
  deleteForm,
  getSingleIncubationForm,
  getAllIncubationForm,
  getIncubationCounts,
  updateForm,
  approvedIncubationCounts,
  approvedIncubations,
};
