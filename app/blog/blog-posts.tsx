const BlogPost1 = ({ }) => {
    return (
        <>
            <img src="/Portfolio/images/sunset.jpg" alt="Example photo" style={{
                float: 'left', width: '450px',
                marginRight: '20px',
                marginBottom: '12px',
                height: 'auto'
            }}></img>

            <p>I've revamped my website to get a better picture of where I am professionally. Also I wanted to use the Open Graph feature of Nextjs. My old project was in React 7. Its on 19 as we speak, I made it like 6 years ago. Things move fast and have been for a while. I did not use ai to write this. I did not use agents to build my portfolio. I probably will next time.</p>

            <p>I want to do a blog because I enjoy reading other peoples blogs. Sometimes I want to brag about something on professional social sites. I can do it here and have it all in one place. Plus more traffic to my site. I can format it the way I want and its an ode to the old school. I also like photography and doodling so I'll try to add photos I've taken or drawings. These are photos from Spanish Wells, Bahamas, that I asked ai to recreate. Just kidding. I took these on film and got digital scans.</p>

            <p></p>
            <img src="/Portfolio/images/sunset.jpg" alt="Example photo" style={{
                float: 'right', width: '450px',
                marginRight: '20px',
                marginBottom: '12px',
                height: 'auto'
            }}></img>
            <p>I want to use posts from this blog to connect to professional career sites. I’d like to draw more traffic to my site. Also, I can format my ideas the way I want this way, add pictures, etc. You can find this blog in the ‘About’ section. I hope to use it to share ideas and new projects that I am working on. There are a few cool ones I am excited to share. Stay tuned for those. </p>

            <p>Thanks for checking out my site.</p>

        </>
    )
};

export const blogPosts: { id: string, title: string; description: string; image: string; content: React.ReactNode }[] = [
    {
        id: '1',
        title: "Welcome to My New Portfolio",
        description: "I\'ve revamped my website to get a more accurate picture of where I am professionally",
        image: "./images/sunset.png",
        content: <BlogPost1 />
    }
];