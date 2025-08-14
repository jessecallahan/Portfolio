import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Typography, Container, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { blogPosts } from './BlogPosts';


const useStyles = makeStyles((theme) => ({
  main: {
    padding: 8,
    fontSize: 18
  },
  color: {
    color: '#228B22',
    marginTop: 0
  }
}));

export default function BlogPost() {
  const classes = useStyles();
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <Box>
        <Typography variant="h3" gutterBottom>404 - Post Not Found</Typography>
        <Typography variant="body1">The blog post you're looking for does not exist.</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3} className={classes.main}>
        <h1 className={classes.color}>{post.title}</h1>
        {post.content}
        <Typography variant="caption">{post.date} - Back To <Link to={'/blog'}>Blog</Link></Typography>
      </Paper>
    </Container>
  );
}
