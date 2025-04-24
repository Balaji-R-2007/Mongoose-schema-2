const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.post('/posts', async (req, res) => {
  try {
      const post = await createBlogPost(req.body);
      res.status(201).json(post);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});

app.get('/posts', async (req, res) => {
  try {
      const posts = await getAllBlogPosts();
      res.status(200).json(posts);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


app.get('/posts/:id', async (req, res) => {
  try {
      const post = await getBlogPostById(req.params.id);
      if (!post) return res.status(404).json({ message: 'Post not found' });
      res.status(200).json(post);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


app.put('/posts/:id', async (req, res) => {
  try {
      const updatedPost = await updateBlogPost(req.params.id, req.body);
      if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
      res.status(200).json(updatedPost);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});


app.delete('/posts/:id', async (req, res) => {
  try {
      const deletedPost = await deleteBlogPost(req.params.id);
      if (!deletedPost) return res.status(404).json({ message: 'Post not found' });
      res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});