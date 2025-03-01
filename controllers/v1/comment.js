const commentModel = require("./../../models/comment");
const courseModel = require("./../../models/course");

exports.create = async (req, res) => {
  const { body, courseHref, score } = req.body;

  const course = await courseModel.findOne({ href: courseHref }).lean();

  const comment = await commentModel.create({
    body,
    course: course._id,
    creator: req.user._id,
    score,
    isAnswer: 0,
    isAccept: 0, // 1 => show as public
  });

  return res.status(201).json(comment);
};

exports.remove = async (req, res) => {
  const deletedComment = await commentModel.findOneAndRemove({
    _id: req.params.id,
  });

  if (!deletedComment) {
    return res.status(404).json({
      message: "Comment not found !!",
    });
  }

  return res.json(deletedComment);
};
