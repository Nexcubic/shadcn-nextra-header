import { Layout } from '@/components/Layout';
import { Gallery4, Gallery4Item } from '@/components/ui/gallery4';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const featuredPosts: Gallery4Item[] = [
  {
    id: "cybersecurity-tips",
    title: "10 Essential Cybersecurity Tips for Small Businesses",
    description: "Protect your business from cyber threats with these practical and easy-to-implement security measures that every organization should know.",
    href: "#",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    id: "cloud-migration",
    title: "The Benefits of Cloud Migration for Growing Companies",
    description: "Discover how moving to the cloud can reduce costs, improve scalability, and enhance collaboration across your organization.",
    href: "#",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
  },
  {
    id: "it-support-guide",
    title: "How to Choose the Right IT Support Provider",
    description: "Key factors to consider when selecting a technology partner for your business needs and long-term growth.",
    href: "#",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    id: "remote-security",
    title: "Remote Work Security: Best Practices for 2024",
    description: "Keep your remote workforce secure with these updated security protocols and essential tools for distributed teams.",
    href: "#",
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&q=80",
  },
  {
    id: "managed-services",
    title: "Understanding Managed IT Services vs. Break-Fix",
    description: "Compare the two most common IT support models and find out which approach is right for your business.",
    href: "#",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  },
];

const Blog = () => {
  const recentPosts = [
    {
      title: 'Top 5 Server Monitoring Tools for SMBs',
      excerpt: 'Essential tools to keep your servers running smoothly and catch issues before they become problems.',
      date: 'Nov 15, 2024',
      readTime: '6 min read',
      category: 'Tools',
    },
    {
      title: 'Why Regular Data Backups Are Critical',
      excerpt: 'Learn how a proper backup strategy can save your business from catastrophic data loss.',
      date: 'Nov 10, 2024',
      readTime: '5 min read',
      category: 'Security',
    },
    {
      title: 'The Rise of AI in IT Support',
      excerpt: 'How artificial intelligence is transforming help desk operations and customer support.',
      date: 'Nov 5, 2024',
      readTime: '7 min read',
      category: 'Innovation',
    },
    {
      title: 'Network Security Fundamentals',
      excerpt: 'A comprehensive guide to securing your business network infrastructure.',
      date: 'Oct 30, 2024',
      readTime: '8 min read',
      category: 'Security',
    },
    {
      title: 'Optimizing Your IT Budget',
      excerpt: 'Strategic approaches to maximize your technology investments while minimizing costs.',
      date: 'Oct 25, 2024',
      readTime: '6 min read',
      category: 'Business',
    },
    {
      title: 'Disaster Recovery Planning Guide',
      excerpt: 'Step-by-step instructions for creating a robust disaster recovery plan.',
      date: 'Oct 20, 2024',
      readTime: '9 min read',
      category: 'Planning',
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
              Stay up to date with the latest tech trends, tips, and best practices from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      <Gallery4 
        title="Featured Articles"
        description="Our most popular and impactful articles to help you stay ahead in technology."
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
