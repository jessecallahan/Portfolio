const BlogPost1 = ({ }) => {
    return (
        <>
            <img src="/Portfolio/images/sunset.jpg" alt="Example photo" style={{
                float: 'left', width: '450px',
                marginRight: '20px',
                marginBottom: '12px',
                height: 'auto'
            }}></img>

            <p>I've revamped my website to give you a better picture of where I am professionally. Also I wanted a easier way to use open graph so I am using Nextjs. My old project was in React 17 which feels like light years ago. It was good to look at my old code and see what could be improved on. I did not use agentic coding to build this site but could see myself using it next time. I've tried for a very long time to not be beholden to one way of "doing it", I've never really had a favorite coding language. But do have to admit, not using agentic coding in the year 2026 feels like the old school way of doing it. Which is not a bad thing. Old isn't always bad, said as a record collector and lover of nature. Using the right technology stack for the right problem is what I was always taught and that mostly always comes with some trial and error and/or experience. I think this applies in agentic coding too.</p>

            <p>I want to do a blog because I enjoy reading other peoples blogs and I am interested in the history of technology. Sometimes I post something interesting on my professional socials. I can do it here, paste the link and then have it all in one place with a nice neat picture of my choosing thanks to the open graph protocol. This also gets me more traffic to my site. Also, I can format the posts the way I want. I like photography and doodling so I'll try to add photos I've taken or drawings. These are photos from Spanish Wells, Bahamas, my gf and I took these on my film camera. Check out my portfolio on my github if you want to see how simple this was to put together the blog part of this.</p>

            <p>
            Usually at the end of the year, I'll revamp a project, update my professional package and/or reach out to old classmates or coworkers. Talking to people, there is no doubt, this year feels like the year of ai and I don't imagine that stopping anytime soon. Looking at the last century, trends in technology and now, I feel like we are still, somewhat, in the infancy of computers. Obviously, they are integrated into our everyday life as consumers, they are also connected to most major infascruture at this point. And some of that started in the 1980's. But take cars for example, the model T was first produced in 1927, use that as the rough start of the consumer vehichle, look at where cars are at now 100 years later. I would argue windows 95 really brought in personal computing and obviously the first iphone in 2007 brought the internet to our pocket. What will the computers, phones, and the internet of things look like 100 years from 2007? What will the world look like? I imagine the difference will be similar to the difference between a model T and a new car. Or maybe it will feel much more acclerated.        
            </p>

            <img src="/Portfolio/images/katy.jpg" alt="Example photo" style={{
                float: 'right', width: '450px',
                marginLeft: '20px',
                height: 'auto'
            }}></img>

            <p>You can find this blog in the ‘About’ section. I hope to use it to share ideas and new projects that I am working on. There are a few cool ones I am excited to share. One a sort of "baseball genius" app, using ai and some local data, baseball stats that are available to the public. The output being a digital baseball card and some stats. Stay tuned for that.</p>

            <p>Thanks for checking out my site.</p>

        </>
    )
};

export const blogPosts: { id: string, title: string; description: string; image: string; content: React.ReactNode }[] = [
    {
        id: '1',
        title: "Welcome to My New Portfolio",
        description: "I\'ve revamped my website to get a more accurate picture of where I am professionally",
        image: "/Portfolio/images/sunset.jpg",
        content: <BlogPost1 />
    }
];