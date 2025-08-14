import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Container, List, ListItem, ListItemText, Divider, Paper, Box, Card, CardContent, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blogPosts } from './BlogPosts';

const useStyles = makeStyles((theme) => ({
  color: {
    color: '#228B22',
    padding: '4px 0',
    fontSize: 18
  }
}));

export default function Blog() {
  const classes = useStyles();
  return (
    <Container>
  
      <Box>
        {blogPosts.map((post, index) => (
          <React.Fragment key={post.id}>
          <Card>
            <CardActionArea component={Link} to={`/blog/${post.id}`}>
            <CardContent >
              <Typography variant="h5" component="div" gutterBottom>
                {post.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" className={classes.color}>
                {post.description}
              </Typography>

              <Typography variant="caption" color="text.disabled">
                {post.date}
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
          {index < blogPosts.length - 1 && (
            <Box sx={{ mt: 1 }} /> // 8px (1 unit) margin-top for spacing between cards
          )}
        </React.Fragment>
        ))}
      </Box>
  </Container>
  )
}
