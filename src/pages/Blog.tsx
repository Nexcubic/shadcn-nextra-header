import { Layout } from '@/components/Layout';
import { Gallery4, Gallery4Item } from '@/components/ui/gallery4';
import { Calendar, Clock, ArrowRight, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

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
  {
    id: "save-forests",
    title: "Why Planting Trees Is Only One Part of Saving Our Forests",
    description: "Understanding the deeper truths about reforestation and what it takes to maintain healthy forests beyond just planting trees, according to a UNESCO scientist.",
    href: "https://thebetterindia.com/sustainability/planting-trees-is-not-enough-healthy-forests-reforestation-realities-truths-by-unesco-scientist-10925448",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/12/20/1-2025-12-20-03-28-28.jpg",
  },
  {
    id: "kerala-water-atm",
    title: "How a Kerala Engineer Built Water ATMs That Serve 50,000 People Daily",
    description: "A mechanical engineer from Kerala developed affordable water ATMs that now provide clean drinking water to thousands across rural India.",
    href: "https://thebetterindia.com/stories",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=580&q=80",
  },
  {
    id: "solar-village",
    title: "This Village in Rajasthan Runs Entirely on Solar Power",
    description: "A remote village in Rajasthan has become India's first fully solar-powered community, setting an example for sustainable rural development.",
    href: "https://thebetterindia.com/stories",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=580&q=80",
  },
];

const Blog = () => {
  const recentPosts = [
    {
      title: '17-YO Girl From UP Village Solves a Farm Dust Problem',
      excerpt: 'When dust from a nearby threshing machine filled her classroom, a Class 8 student asked a simple question that led to innovation.',
      date: 'Dec 28, 2025',
      readTime: '5 min',
      category: 'Young Innovators',
      link: 'https://thebetterindia.com/youth/young-innovators/up-teen-pooja-pal-dust-free-threshing-machine-farm-innovation-tokyo-inspire-award-10919573',
      image: 'https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/12/18/feature-size-2025-12-18-00-57-14.png',
    },
    {
      title: 'How to Spend 3 Slow Days in Puducherry',
      excerpt: 'Puducherry offers the perfect setting for couples who prefer slow mornings, quiet walks, and simple meals on a Rs 11,000 budget.',
      date: 'Dec 28, 2025',
      readTime: '6 min',
      category: 'Travel',
      link: 'https://thebetterindia.com/481399/romantic-puducherry-itinerary-couples-budget-friendly-getaway-pondicherry-travel/',
      image: 'https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/post_attachments/uploads/2025/08/Blue-and-Yellow-Modern-Business-Workshop-Facebook-Ad-2025-08-04T215453.147_11zon-1754324711.jpg',
    },
    {
      title: 'Delhi Man Helping 30000+ Women Feel Less Anxious',
      excerpt: 'How Kamal Gulati noticed hesitation at salon counters and built a space where women could feel sure of the bill before the service began.',
      date: 'Dec 28, 2025',
      readTime: '5 min',
      category: 'Startup',
      link: 'https://thebetterindia.com/startup/kamal-gulati-gk-studio-salon-bill-anxiety-women-delhi-ncr-affordable-beauty-10946939',
      image: 'https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/12/26/gk-studio-2025-12-26-13-46-12.png',
    },
    {
      title: 'Why Planting Trees Is Only One Part of Saving Our Forests',
      excerpt: 'Understanding the deeper truths about reforestation and what it takes to maintain healthy forests beyond just planting trees.',
      date: 'Dec 28, 2025',
      readTime: '7 min',
      category: 'Sustainability',
      link: 'https://thebetterindia.com/sustainability/planting-trees-is-not-enough-healthy-forests-reforestation-realities-truths-by-unesco-scientist-10925448',
      image: 'https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/12/20/1-2025-12-20-03-28-28.jpg',
    },
    {
      title: 'Before Chemical Cleaners, Indian Homes Relied on These',
      excerpt: 'Familiar Indian household ingredients reveal a subtle approach to maintaining hygiene combining practicality and tradition.',
      date: 'Dec 28, 2025',
      readTime: '5 min',
      category: 'Sustainability',
      link: 'https://thebetterindia.com/sustainability/natural-cleaners-indian-ingredients-diy-home-cleaning-items-eco-friendly-practises-no-harsh-chemicals-10919717',
      image: 'https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/12/26/natural-home-cleaners-2025-12-26-16-16-56.png',
    },
    {
      title: 'How a Diverse Group of Trekkers Conquered the Himalayas',
      excerpt: 'From amputees to the visually impaired, Treks For All organizes inclusive adventures that give participants lessons for life.',
      date: 'Dec 28, 2025',
      readTime: '8 min',
      category: 'Travel',
      link: 'https://thebetterindia.com/441694/treks-for-all-disabled-people-india-himalayas-uttarakhand-dayara-bugyal-rishikesh-v-shesh-aquaterra-adventures-metores/',
      image: 'https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/post_attachments/uploads/2025/05/treks-for-all-disabled-persons-7-1748608748.jpg',
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Blog & Stories - Nexcubic | Inspiring Innovation & Sustainability</title>
        <meta name="description" content="Discover inspiring stories of innovation, sustainability, and positive change from across India. Read about young innovators, startups, travel, and more." />
        <meta name="keywords" content="inspiring stories, innovation, sustainability, Indian startups, travel India, young innovators, positive change" />
        <link rel="canonical" href="https://nexcubic.com/blog" />
        <meta property="og:title" content="Blog & Stories - Nexcubic" />
        <meta property="og:description" content="Inspiring stories of innovation, sustainability, and positive change from across India." />
        <meta property="og:url" content="https://nexcubic.com/blog" />
      </Helmet>

      {/* Header */}
      <section className="relative overflow-hidden border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in">
              Stories & Insights
            </h1>
            <p className="mt-6 text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Inspiring stories of innovation, sustainability, and the people making a difference across India. Curated content that motivates and informs.
            </p>
            <div className="mt-8 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button asChild variant="outline" className="gap-2">
                <a href="https://www.instagram.com/nexcubic/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                  Follow Nexcubic on Instagram
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
          <header className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Recent Stories
            </h2>
            <p className="mt-2 text-muted-foreground">
              The latest inspiring stories from innovators, entrepreneurs, and changemakers.
            </p>
          </header>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, index) => (
              <article
                key={post.title}
                className="group flex flex-col rounded-xl border bg-card overflow-hidden shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </a>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
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
                    View Story <ArrowRight className="ml-1 h-4 w-4" />
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