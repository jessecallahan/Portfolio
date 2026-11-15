'use client'
import Link from 'next/dist/client/link';
import { blogPosts } from './blog-posts';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';


export default function Blog() {

  return (
    <>
      <Box>
        {blogPosts.map((post, index) => (
          <React.Fragment key={post.id}>
          <Card>
            <CardActionArea component={Link} href={`/blog/${post.id}`}>
            <CardContent >
              <Typography variant="h5" component="div" gutterBottom>
                {post.title}
              </Typography>

              <Typography style={{color: '#228B22'}}>
                {post.description}
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </React.Fragment>
        ))}
      </Box>
  </>
  )
}
