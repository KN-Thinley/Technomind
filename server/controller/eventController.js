const eventModel = require("../model/eventModel");

const postEvent = async (req, res) => {
  try {
    let image;
    if (req.file) {
      image = req.file.filename;
    }
    const postEvent = await eventModel.create(req.body);
    res.status(201).json({
      message: "event added succesfully",
      data: {
        eventData: postEvent,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEvent = await eventModel.findByIdAndRemove(id);

    if (!deleteEvent) {
      return res.status(404).json({ message: "event not found" });
    }
    res.json({ message: "event deleted successfully" });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const getSingleEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleEvent = await eventModel.findById(id);

    if (!getSingleEvent) {
      return res.status(404).json({ message: "Couldn't find the event" });
    }
    res.json(getSingleEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await eventModel.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateEvents = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    let image;

    if (req.file) {
      image = req.file.filename;
    }
    const updateEvents = await eventModel.findByIdAndUpdate(id, {
      title,
      image,
      description,
    });
    res.json(updateEvents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEventCounts = async (req, res) => {
  try {
    const getEventCounts = await eventModel.countDocuments({});
    res.json(getEventCounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postEvent,
  updateEvents,
  deleteEvent,
  getSingleEvent,
  getAllEvents,
  getEventCounts,
};
