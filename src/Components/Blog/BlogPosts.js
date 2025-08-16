import { Helmet } from "react-helmet-async";
import sunset from '../../Assets/sunset.jpg'



const BlogPost1 = () => {
   const self = blogPosts.find(post => post.id === '1');

   console.log(self)
  return (
    <>
    <Helmet>
    </Helmet>
          <title>{self.title}</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={self.title} />
        <meta property="og:description" content={self.description} />
        <meta property="og:image" content={self.image} />

        
    <p>I've revamped my website to get a more accurate picture of where I am professionally.</p>

      <p>I also wanted to take a look at my old code. It was fun. I cleaned up some things. Updated my photo. Added this blog.</p>

      <p>I want to use posts from this blog to connect to professional career sites. I’d like to draw more traffic to my site. Also, I can format my ideas the way I want this way, add pictures, etc. You can find this blog in the ‘About’ section. I hope to use it to share ideas and new projects that I am working on. There are a few cool ones I am excited to share. Stay tuned for those. </p>

      <p>Thanks for checking out my site.</p>
   
      
    </>

  )
};

export const blogPosts = [
  {
    id: '1',
    title: 'Welcome to My New Portfolio',
    date: 'Aug 16, 2025',
    description: 'I\'ve revamped my website to get a more accurate picture of where I am professionally.',
    content: <BlogPost1 />,
    image: sunset,
  }
];