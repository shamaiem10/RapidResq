const express = require('express');
const router = express.Router();
const CommunityPost = require('../models/CommunityPost');

// GET all posts with optional filtering
router.get('/community/posts', async (req, res) => {
  try {
    const { type, urgent, location } = req.query;
    const filter = {};

    if (type && type !== 'All') {
      filter.type = type;
    }

    if (urgent === 'true') {
      filter.urgent = true;
    }

    if (location) {
      filter.location = new RegExp(location, 'i');
    }

    const posts = await CommunityPost.find(filter)
      .sort({ createdAt: -1 })
      .limit(50);

    res.json({
      success: true,
      count: posts.length,
      posts
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching posts',
      error: error.message
    });
  }
});

// GET single post by ID
router.get('/community/posts/:id', async (req, res) => {
  try {
    const post = await CommunityPost.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    res.json({
      success: true,
      post
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching post',
      error: error.message
    });
  }
});

// CREATE new post
router.post('/community/posts', async (req, res) => {
  try {
    const { type, title, description, location, phone, author, urgent } = req.body;

    // Validate required fields
    if (!type || !title || !description || !location || !phone || !author) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required: type, title, description, location, phone, author'
      });
    }

    const newPost = new CommunityPost({
      type,
      title,
      description,
      location,
      phone,
      author,
      urgent: urgent || false,
      responses: 0
    });

    await newPost.save();

    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      post: newPost
    });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating post',
      error: error.message
    });
  }
});

// UPDATE post by ID
router.put('/community/posts/:id', async (req, res) => {
  try {
    const { type, title, description, location, phone, author, urgent } = req.body;

    // Validate required fields
    if (!type || !title || !description || !location || !phone || !author) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required: type, title, description, location, phone, author'
      });
    }

    const updatedPost = await CommunityPost.findByIdAndUpdate(
      req.params.id,
      {
        type,
        title,
        description,
        location,
        phone,
        author,
        urgent
      },
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    res.json({
      success: true,
      message: 'Post updated successfully',
      post: updatedPost
    });
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating post',
      error: error.message
    });
  }
});

// DELETE post by ID
router.delete('/community/posts/:id', async (req, res) => {
  try {
    const deletedPost = await CommunityPost.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    res.json({
      success: true,
      message: 'Post deleted successfully',
      post: deletedPost
    });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting post',
      error: error.message
    });
  }
});

// INCREMENT responses count
router.post('/community/posts/:id/respond', async (req, res) => {
  try {
    const post = await CommunityPost.findByIdAndUpdate(
      req.params.id,
      { $inc: { responses: 1 } },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    res.json({
      success: true,
      message: 'Response counted',
      post
    });
  } catch (error) {
    console.error('Error incrementing responses:', error);
    res.status(500).json({
      success: false,
      message: 'Error incrementing responses',
      error: error.message
    });
  }
});

module.exports = router;
