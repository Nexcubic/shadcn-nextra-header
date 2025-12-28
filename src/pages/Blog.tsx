import { Layout } from '@/components/Layout';
import { Gallery4, Gallery4Item } from '@/components/ui/gallery4';
import { Calendar, Clock, ArrowRight, ExternalLink, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredPosts: Gallery4Item[] = [
  {
    id: "young-innovator-tokyo",
    title: "17-YO Girl From UP Village Solves a Farm Dust Problem; Takes Her Idea to Tokyo",
    description: "When dust from a nearby threshing machine filled her classroom, a Class 8 student asked a simple question. Years later, that moment took her from a village school in Uttar Pradesh to Tokyo.",
    href: "https://thebetterindia.com/youth/young-innovators/up-teen-pooja-pal-dust-free-threshing-machine-farm-innovation-tokyo-inspire-award-10919573",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/12/18/feature-size-2025-12-18-00-57-14.png",
  },
  {
    id: "puducherry-travel",
    title: "How to Spend 3 Slow, Unhurried Days in Puducherry With Your Partner",
    description: "Puducherry offers the perfect setting for couples who prefer slow mornings, quiet walks, and simple meals. This 3-day itinerary features heritage stays, coastal cafes, and local experiences.",
    href: "https://thebetterindia.com/481399/romantic-puducherry-itinerary-couples-budget-friendly-getaway-pondicherry-travel/",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/post_attachments/uploads/2025/08/Blue-and-Yellow-Modern-Business-Workshop-Facebook-Ad-2025-08-04T215453.147_11zon-1754324711.jpg",
  },
  {
    id: "delhi-salon-startup",
    title: "Meet the Delhi Man Helping 30000+ Women Feel Less Anxious About Salon Bills",
    description: "A salon visit often begins with ease and ends with anxiety at the counter. This story follows how Kamal Gulati built a space where women could feel sure of the bill before the service began.",
    href: "https://thebetterindia.com/startup/kamal-gulati-gk-studio-salon-bill-anxiety-women-delhi-ncr-affordable-beauty-10946939",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/12/26/gk-studio-2025-12-26-13-46-12.png",
  },
  {
    id: "natural-cleaners",
    title: "Before Chemical Cleaners, Indian Homes Relied on These Ingredients",
    description: "Looking beyond commercial cleaners, familiar Indian household ingredients reveal a subtle approach to maintaining hygiene that combines practicality, tradition and environmental awareness.",
    href: "https://thebetterindia.com/sustainability/natural-cleaners-indian-ingredients-diy-home-cleaning-items-eco-friendly-practises-no-harsh-chemicals-10919717",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/12/26/natural-home-cleaners-2025-12-26-16-16-56.png",
  },
  {
    id: "himalayan-trekkers",
    title: "From Amputees to the Visually Impaired: How a Diverse Group Conquered the Himalayas",
    description: "Treks For All has upcoming treks, river rafting, kayaking and more for disabled persons. Their trek to Dayara Bugyal in Uttarakhand gave them lessons for life.",
    href: "https://thebetterindia.com/441694/treks-for-all-disabled-people-india-himalayas-uttarakhand-dayara-bugyal-rishikesh-v-shesh-aquaterra-adventures-metores/",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/post_attachments/uploads/2025/05/treks-for-all-disabled-persons-7-1748608748.jpg",
  },
];

const Blog = () => {
  const recentPosts = [
    {
      title: '17-YO Girl From UP Village Solves a Farm Dust Problem',
      excerpt: 'When dust from a nearby threshing machine filled her classroom, a Class 8 student asked a simple question that led to innovation.',
      date: 'Dec 28, 2025',
      readTime: '5 min read',
      category: 'Young Innovators',
      link: 'https://thebetterindia.com/youth/young-innovators/up-teen-pooja-pal-dust-free-threshing-machine-farm-innovation-tokyo-inspire-award-10919573',
    },
    {
      title: 'How to Spend 3 Slow Days in Puducherry',
      excerpt: 'Puducherry offers the perfect setting for couples who prefer slow mornings, quiet walks, and simple meals on a Rs 11,000 budget.',
      date: 'Dec 28, 2025',
      readTime: '6 min read',
      category: 'Travel',
      link: 'https://thebetterindia.com/481399/romantic-puducherry-itinerary-couples-budget-friendly-getaway-pondicherry-travel/',
    },
    {
      title: 'Delhi Man Helping 30000+ Women Feel Less Anxious',
      excerpt: 'How Kamal Gulati noticed hesitation at salon counters and built a space where women could feel sure of the bill before the service began.',
      date: 'Dec 28, 2025',
      readTime: '5 min read',
      category: 'Startup',
      link: 'https://thebetterindia.com/startup/kamal-gulati-gk-studio-salon-bill-anxiety-women-delhi-ncr-affordable-beauty-10946939',
    },
    {
      title: 'Why Planting Trees Is Only One Part of Saving Our Forests',
      excerpt: 'Understanding the deeper truths about reforestation and what it takes to maintain healthy forests beyond just planting trees.',
      date: 'Dec 27, 2025',
      readTime: '7 min read',
      category: 'Sustainability',
      link: 'https://thebetterindia.com/sustainability/planting-trees-is-not-enough-healthy-forests-reforestation-realities-truths-by-unesco-scientist-10925448',
    },
    {
      title: 'Before Chemical Cleaners, Indian Homes Relied on These',
      excerpt: 'Familiar Indian household ingredients reveal a subtle approach to maintaining hygiene combining practicality and tradition.',
      date: 'Dec 27, 2025',
      readTime: '5 min read',
      category: 'Sustainability',
      link: 'https://thebetterindia.com/sustainability/natural-cleaners-indian-ingredients-diy-home-cleaning-items-eco-friendly-practises-no-harsh-chemicals-10919717',
    },
    {
      title: 'How a Diverse Group of Trekkers Conquered the Himalayas',
      excerpt: 'From amputees to the visually impaired, Treks For All organizes inclusive adventures that give participants lessons for life.',
      date: 'Dec 27, 2025',
      readTime: '8 min read',
      category: 'Travel',
      link: 'https://thebetterindia.com/441694/treks-for-all-disabled-people-india-himalayas-uttarakhand-dayara-bugyal-rishikesh-v-shesh-aquaterra-adventures-metores/',
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="relative overflow-hidden border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in">
              Stories & Insights
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Inspiring stories from The Better India and updates from Nexcubic. Discover innovation, sustainability, and the people making a difference.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button asChild variant="outline" className="gap-2">
                <a href="https://www.instagram.com/nexcubic/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                  Follow Nexcubic
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="https://thebetterindia.com/stories" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  The Better India
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      <Gallery4 
        title="Featured Stories"
        description="Inspiring stories of innovation, sustainability, and positive change from across India."
        items={featuredPosts}
      />

      {/* Recent Posts Grid */}
      <section className="py-16 lg:py-20 border-t">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-10 sm:text-3xl">
            Recent Stories
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
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center text-sm font-medium text-accent group-hover:underline"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
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