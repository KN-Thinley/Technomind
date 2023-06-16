const testimonialModel = require("../model/testimonialModel");

const postTestimonial = async (req, res) => {
  try {
    const testimonial = await testimonialModel.create(req.body);
    res.status(201).json({
      message: "posted testimonials",
      data: {
        userData: testimonial,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTestimonials = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTestimonials = await testimonialModel.findByIdAndRemove(id);

    if (!deleteTestimonials) {
      return res.status(404).json({ message: "testimonials not found" });
    }
    res.json({ message: "testimonials deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSingleTestimonials = async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleTestimonials = await testimonialModel.findById(id);

    if (!getSingleTestimonials) {
      res.status(404).json({ message: "testimonials not found" });
    }
    res.json(getSingleTestimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllTestimonial = async (req, res) => {
  try {
    const testimonials = await testimonialModel.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTestimonials = async (req, res) => {
  const { id } = req.params;
  try {
    const { comments, status } = req.body;

    const updatedTestimonial = await testimonialModel.findByIdAndUpdate(
      id,
      { comments, status },
      { new: true }
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial doesn't exist" });
    }

    res.json(updatedTestimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTestimonialCounts = async (req, res) => {
  try {
    const testimonialCounts = await testimonialModel.countDocuments({});
    res.json(testimonialCounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const approvedTestimonials = async (req, res) => {
  try {
    const approvedTestimonials = await testimonialModel.find({
      status: "Approved",
    });

    res.json({ approvedTestimonials });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const approvedTestimonialsCounts = async (req, res) => {
  try {
    const approvedTestimonialsCounts = await testimonialModel.countDocuments({
      status: "Approved",
    });
    res.json(approvedTestimonialsCounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  postTestimonial,
  getSingleTestimonials,
  deleteTestimonials,
  getAllTestimonial,
  updateTestimonials,
  getTestimonialCounts,
  approvedTestimonials,
  approvedTestimonialsCounts,
};
