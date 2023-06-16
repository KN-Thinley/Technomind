const announcementModel = require("../model/announcementModel");

const postAnnouncement = async (req, res) => {
  try {
    let image;
    if (req.file) {
      image = req.file.filename;
    }
    const postAnnouncement = await announcementModel.create(req.body);
    res.status(201).json({
      message: "announcement added succesfully",
      data: {
        announcementData: postAnnouncement,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAnnouncement = await announcementModel.findByIdAndRemove(id);

    if (!deleteAnnouncement) {
      return res.status(404).json({ message: "announcement not found" });
    }
    res.json({ message: "Announcement deleted successfully" });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const getSingleAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleAnnouncement = await announcementModel.findById(id);

    if (!getSingleAnnouncement) {
      return res
        .status(404)
        .json({ message: "Couldn't find the announcement" });
    }
    res.json(getSingleAnnouncement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await announcementModel.find();
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateAnnouncements = async (req, res) => {
  try {
    const { _id } = req.postAnnouncement;
    const { title, description } = req.body;
    let image;

    if (req.file) {
      image = req.file.filename;
    }
    const updateAnnouncements = await announcementModel.findByIdAndUpdate(_id, {
      title,
      image,
      description,
    });
    res.json(updateAnnouncements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAnnouncementCounts = async (req, res) => {
  try {
    const announcementCounts = await announcementModel.countDocuments({});
    res.json(announcementCounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postAnnouncement,
  updateAnnouncements,
  deleteAnnouncement,
  getSingleAnnouncement,
  getAllAnnouncements,
  getAnnouncementCounts,
};
