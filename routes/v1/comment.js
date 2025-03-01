const express = require("express");
const authMiddleware = require("./../../middlewares/auth");
const isAdminMiddleware = require("./../../middlewares/isAdmin");
const commentsController = require("./../../controllers/v1/comment");

const router = express.Router();

router.route("/").post(authMiddleware, commentsController.create);

router
  .route("/:id")
  .delete(authMiddleware, isAdminMiddleware, commentsController.remove);

module.exports = router;
