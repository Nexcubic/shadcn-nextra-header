import { Layout } from '@/components/Layout';
import { Gallery4, Gallery4Item } from '@/components/ui/gallery4';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const featuredPosts: Gallery4Item[] = [
  {
    id: "ai-automation-business",
    title: "How AI Automation is Transforming Business Operations in 2024",
    description: "Discover how businesses are leveraging AI to streamline operations, reduce costs, and boost productivity in the modern digital landscape.",
    href: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    id: "startup-india-success",
    title: "Startup India: Building the Next Generation of Entrepreneurs",
    description: "Exploring the impact of the Startup India initiative and how young entrepreneurs are creating innovative solutions to real-world problems.",
    href: "#",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
  },
  {
    id: "digital-presence-guide",
    title: "The Complete Guide to Building Your Digital Presence",
    description: "From website development to social media strategy, learn how to establish a strong online presence that drives growth.",
    href: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: "better-india-tech",
    title: "Technology for Good: How Indian Startups are Making a Difference",
    description: "Inspiring stories of Indian startups using technology to solve social challenges and create positive impact in communities.",
    href: "#",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  },
  {
    id: "ux-design-trends",
    title: "UI/UX Design Trends Shaping the Future of Digital Products",
    description: "Stay ahead of the curve with the latest design trends that are redefining user experiences across web and mobile platforms.",
    href: "#",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
];

const Blog = () => {
  const recentPosts = [
    {
      title: 'Nexcubic Launches Free Startup Support Program for College Students',
      excerpt: 'Announcing our initiative to help aspiring entrepreneurs validate their ideas and build their first products.',
      date: 'Dec 20, 2024',
      readTime: '4 min read',
      category: 'Company News',
    },
    {
      title: 'The Rise of AI in Web Development',
      excerpt: 'How AI tools are revolutionizing the way we build websites and applications, from code generation to design.',
      date: 'Dec 15, 2024',
      readTime: '6 min read',
      category: 'AI Development',
    },
    {
      title: '5 Essential Steps to Launch Your Startup in India',
      excerpt: 'A practical guide for first-time founders navigating the Indian startup ecosystem.',
      date: 'Dec 10, 2024',
      readTime: '7 min read',
      category: 'Startup India',
    },
    {
      title: 'How Small Businesses Can Leverage Digital Marketing',
      excerpt: 'Cost-effective strategies to build your brand and reach customers online without breaking the bank.',
      date: 'Dec 5, 2024',
      readTime: '5 min read',
      category: 'Digital Marketing',
    },
    {
      title: 'The Better India: Tech Solutions Driving Social Change',
      excerpt: 'Highlighting innovative technology solutions that are making India a better place for everyone.',
      date: 'Nov 30, 2024',
      readTime: '8 min read',
      category: 'Innovation',
    },
    {
      title: 'Building Scalable Mobile Apps: Best Practices',
      excerpt: 'Technical insights on creating mobile applications that can grow with your business.',
      date: 'Nov 25, 2024',
      readTime: '6 min read',
      category: 'Development',
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative overflow-hidden border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in">
              Blog & Insights
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Stay updated with the latest in AI, startups, digital innovation, and technology trends from the Nexcubic team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      <Gallery4 
        title="Featured Articles"
        description="Our most popular articles on AI, startups, and digital transformation."
        items={featuredPosts}
      />

      {/* Recent Posts Grid */}
      <section className="py-16 lg:py-20 border-t">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-10 sm:text-3xl">
            Recent Articles
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, index) => (
              <article
                key={post.title}
                className="group flex flex-col rounded-xl border bg-card overflow-hidden shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="h-40 bg-gradient-to-br from-accent/20 to-primary/20" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-accent group-hover:underline">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
