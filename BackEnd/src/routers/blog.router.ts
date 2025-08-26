import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { BlogModel } from "../models/blog.model";

const router=Router();

router.get("/", expressAsyncHandler(
    async (req, res) => {
      const blog = await BlogModel.find();
      res.send(blog);
    }
  ));

export default router;