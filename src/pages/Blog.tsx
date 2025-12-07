import { Layout } from '@/components/Layout';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: '10 Essential Cybersecurity Tips for Small Businesses',
      excerpt: 'Protect your business from cyber threats with these practical and easy-to-implement security measures.',
      date: 'Dec 5, 2024',
      readTime: '5 min read',
      category: 'Security',
    },
    {
      title: 'The Benefits of Cloud Migration for Growing Companies',
      excerpt: 'Discover how moving to the cloud can reduce costs, improve scalability, and enhance collaboration.',
      date: 'Dec 3, 2024',
      readTime: '7 min read',
      category: 'Cloud',
    },
    {
      title: 'How to Choose the Right IT Support Provider',
      excerpt: 'Key factors to consider when selecting a technology partner for your business needs.',
      date: 'Nov 28, 2024',
      readTime: '6 min read',
      category: 'Business',
    },
    {
      title: 'Remote Work Security: Best Practices for 2024',
      excerpt: 'Keep your remote workforce secure with these updated security protocols and tools.',
      date: 'Nov 25, 2024',
      readTime: '8 min read',
      category: 'Security',
    },
    {
      title: 'Understanding Managed IT Services vs. Break-Fix',
      excerpt: 'Compare the two most common IT support models and find out which is right for you.',
      date: 'Nov 20, 2024',
      readTime: '5 min read',
      category: 'Business',
    },
    {
      title: 'Top 5 Server Monitoring Tools for SMBs',
      excerpt: 'Essential tools to keep your servers running smoothly and catch issues before they become problems.',
      date: 'Nov 15, 2024',
      readTime: '6 min read',
      category: 'Tools',
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

      {/* Blog Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <article
                key={post.title}
                className="group flex flex-col rounded-xl border bg-card overflow-hidden shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20" />
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
