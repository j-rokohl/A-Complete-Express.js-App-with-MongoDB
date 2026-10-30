import express from "express";

import {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";
import {
  checkItem,
  validateItemBody,
} from "../middleware/itemMiddleware.js";

const router = express.Router();

// Runs automatically whenever an API route contains :id.
router.param("id", checkItem);

router.route("/").get(getAllItems).post(validateItemBody, createItem);

router
  .route("/:id")
  .get(getItem)
  .patch(validateItemBody, updateItem)
  .delete(deleteItem);

export default router;