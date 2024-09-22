import express from 'express';
const router = express.Router();

import { zodToJsonSchema } from 'zod-to-json-schema';
import { userSchema } from '../user/user.schema';
import { PostSchema } from '../post/post.schema';

const schema = {
  userResponse: zodToJsonSchema(userSchema),
  post: zodToJsonSchema(PostSchema),
};

router.get('/', (req, res) => {
  res.json(schema);
  // res.json({ message: 'Hello, TypeScript Express!' });
});

export default router;
