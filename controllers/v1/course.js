const courseModel = require("./../../models/course");
const sessionModel = require("./../../models/session");

exports.create = async (req, res) => {
  const {
    name,
    description,
    support,
    href,
    price,
    status,
    discount,
    categoryID,
  } = req.body;

  const course = await courseModel.create({
    name,
    description,
    creator: req.user._id,
    categoryID,
    support,
    price,
    href,
    status,
    discount,
    cover: req.file.filename,
  });

  const mainCourse = await courseModel
    .findById(course._id)
    .populate("creator", "-password");

  return res.status(201).json(mainCourse);
};

exports.createSession = async (req, res) => {
  const { title, free, time } = req.body;
  const { id } = req.params;

  const session = await sessionModel.create({
    title,
    time,
    free,
    video: "Video.mp4", // req.file.filename
    course: id,
  });

  return res.status(201).json(session);
};
