const BlogPost1 = ({ }) => {
    return (
        <>
            <img src="/Portfolio/images/sunset.jpg" alt="Example photo" style={{
                float: 'left', width: '100%', maxWidth: '450px',
                marginRight: '20px',
                marginBottom: '12px',
                height: 'auto'
            }}></img>

            <p>I've revamped my website to give you a better picture of where I am professionally. Also I wanted an easier way to use Open Graph so I used Nextjs. My old project was in React 17 which feels like light years ago. It was good to look at my old code and see what could be improved. I did not use agentic coding to build this site but could see myself using it next time. I've tried for a long time to not be beholden to one way of "doing it", I've never really had a favorite coding language. But do have to admit, not using agentic coding in the year 2026 feels like the old school way of doing it. Which is not a bad thing. Old isn't always bad, said as a record collector and lover of nature. Using the right technology stack for the right problem is what I was always taught and that mostly always comes with some trial and error and/or experience. I think this applies to agentic coding too.</p>

            <p>I want to do a blog because I enjoy reading other peoples blogs, I like to write, and I am interested in the history of technology. Sometimes I'll post something worth sharing on my professional socials. I can do it here, paste the link and then have it all in one place with a nice neat picture of my choosing, thanks, in part, to the Open Graph protocol. That traffic then goes to my site 💡. Also, I can format the posts the way I want. I like photography and doodling so I'll try to add photos I've taken or drawings I've done. These are photos from Spanish Wells, Bahamas, my gf and I took these on my film camera. Check out my art portfolio in the 'Contact' page of this site to see more of my art.</p>


            <img src="/Portfolio/images/katy.jpg" alt="Example photo" style={{
                float: 'right', width: '100%', maxWidth: '450px',
                marginLeft: '20px',
                marginBottom: '12px',
                height: 'auto'
            }}></img>
            <p>
            Usually at the end of the year, I'll revamp a project, update my professional package and/or reach out to old classmates or coworkers. Talking to people this year, it definitely feels like the year of ai and I don't imagine that stopping anytime soon. Looking at the last century, trends in technology and now, I feel like we are still in the infancy of computers. Even though they are integrated into our everyday life as consumers and they are connected to most major infrastructure. The internet was first brought to our phones in the early 2000's. What will the computers, phones, and the internet of things look like 100 years now? It's hard to decipher if it will be the amount of similarities/difference between a new car and a Model T (first produced around 100 years ago, in 1927) or something much more accelerated. Again, not using agentic coding in the year 2026 seems almost old fashioned and it can't be more than a year or two old. That being said, if you're interested, check out how this blog section was made. Use the server component to render the Open Graph stuff and then make the blog posts dynamic client components that can be interacted with. And still built on the basics, HTML, CSS, OOP. To me, the computer or phone is one big abstraction. Being able to conceptualize the bigger system while also understanding its detail or the pieces that make up the whole has always seemed like the most important skill needed to build complex systems and I don't think that part has changed much.
            </p>


            <p>You can find this blog in the ‘About’ section. I hope to use it to share ideas and new projects that I am working on. There are a few cool ones I am excited to share. One a sort of "baseball genius" app, using ai and some local data - baseball stats that are available to the public. The output being a digital baseball card and a box score. You can compare players and teams and pitcher vs hitter outcomes. Stay tuned for that.</p>

            <p>Thanks for checking out my site.</p>

        </>
    )
};

export const blogPosts: { id: string, title: string; date: Date; description: string; image: string; content: React.ReactNode }[] = [
    {
        id: '1',
        title: "Welcome to My New Portfolio",
        date: new Date(Date.now()),
        description: "I've revamped my website to give you a better picture of where I am professionally.",
        image: "/Portfolio/images/sunset.jpg",
        content: <BlogPost1 />
    }
];