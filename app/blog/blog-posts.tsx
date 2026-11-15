const BlogPost1 = ({ }) => {
    return (
        <>
            <img src="/Portfolio/images/sunset.jpg" alt="Example photo" style={{
                float: 'left', width: '450px',
                marginRight: '20px',
                marginBottom: '12px',
                height: 'auto'
            }}></img>

            <p>I've revamped my website to get a more accurate picture of where I am professionally.orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>

            <p>I also wanted to take a look at my old code. It was fun. I cleaned up some things. Updated my photo. Added this blog.orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
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