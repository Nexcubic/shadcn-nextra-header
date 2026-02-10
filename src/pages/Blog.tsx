import { Layout } from '@/components/Layout';
import { Gallery4, Gallery4Item } from '@/components/ui/gallery4';
import { FinancialHero } from '@/components/ui/hero-section';
import { Calendar, Clock, ArrowRight, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import womensSpecialImg from '@/assets/womens-special.png';
import studentProgramImg from '@/assets/student-program.png';
import waveteaImg from '@/assets/wavetea-student.png';
import tremblyImg from '@/assets/trembly-student.png';
import mushroomFarmingImg from '@/assets/mushroom-farming.jpg';
import hydroponicsImg from '@/assets/hydroponics-farming.jpg';
import aiNewsCoverImg from '@/assets/ai-news-cover.jpg';
import studentEntrepreneurImg from '@/assets/student-entrepreneur.jpg';
import chatgptNewsImg from '@/assets/chatgpt-news.jpg';
import studentStartupTeamImg from '@/assets/student-startup-team.jpg';
import googleAiStudioImg from '@/assets/google-ai-studio.jpg';
import lovableAiCoverImg from '@/assets/lovable-ai-cover.jpg';
import aiComparisonImg from '@/assets/ai-comparison.jpg';

const featuredPosts: Gallery4Item[] = [
  {
    id: "openai-gpt5-2025",
    title: "OpenAI Announces GPT-5: The Most Powerful AI Model Yet",
    description: "OpenAI's GPT-5 promises revolutionary reasoning capabilities, multimodal understanding, and unprecedented accuracy. Here's what developers and businesses need to know.",
    href: "https://openai.com/",
    image: chatgptNewsImg,
  },
  {
    id: "ai-agents-future",
    title: "AI Agents Are Taking Over: How Autonomous AI is Changing Work in 2025",
    description: "From coding assistants to autonomous research agents, AI is becoming more independent. Explore how AI agents are transforming productivity and what it means for the future.",
    href: "https://www.anthropic.com/",
    image: aiNewsCoverImg,
  },
  {
    id: "google-ai-studio-2025",
    title: "Google AI Studio: Build AI Apps Without Code in 2025",
    description: "Google AI Studio lets you prototype and build generative AI applications with Gemini models. Create chatbots, content generators, and more — all from your browser.",
    href: "https://aistudio.google.com/",
    image: googleAiStudioImg,
  },
  {
    id: "lovable-ai-coding",
    title: "Lovable: The AI That Builds Full-Stack Apps From Your Ideas",
    description: "Lovable is revolutionizing how we build software. Describe what you want, and watch AI create beautiful, functional web applications in real-time.",
    href: "https://lovable.dev/",
    image: lovableAiCoverImg,
  },
  {
    id: "gemini-2-flash",
    title: "Google Launches Gemini 2.0 Flash — Faster, Smarter AI for Everyone",
    description: "Google's latest Gemini 2.0 Flash model delivers unprecedented speed and intelligence, making advanced AI accessible for developers and creators worldwide.",
    href: "https://blog.google/technology/google-deepmind/gemini-model-updates-february-2025/",
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.format-webp.webp",
  },
  {
    id: "waste-recycling-delhi",
    title: "20-YO Delhi Boy Recycles 450 Tonnes of Waste & Brings Dignity to 70 Waste Pickers",
    description: "A chance conversation with a waste collector changed how 20-year-old Karan saw Delhi's recycling chain. Finobadi has processed 450 tonnes of waste and planted 3,318 trees.",
    href: "https://thebetterindia.com/young-achievers/karan-kumar-finobadi-delhi-waste-recycling-waste-collectors-dignified-income-10893986",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/12/10/karan-kumar-finobadi-2025-12-10-21-45-08.png",
  },
  {
    id: "textile-ai-tech",
    title: "Two Bengaluru Innovators Saved 10000 Kg Textile Waste & Cut 35000 Kg CO₂ With AI Tech",
    description: "KOSHA.ai uses IoT and AI to verify handloom authenticity and bring accuracy to textile recycling, reshaping how craft and circularity are valued in India.",
    href: "https://thebetterindia.com/startup/kosha-restoring-trust-in-indias-textile-sector-technology-for-craft-and-circularity-textile-waste-transparency-10817138",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/12/01/featured-img-14-2025-12-01-17-44-24.png",
  },
  {
    id: "bihar-farmer-venture",
    title: "Labelled 'Dehati', This 24-YO Bihar Boy Built a Rs 2.5 Crore Venture Helping 10000 Farmers",
    description: "At 24, Prince Shukla returned to his Bihar village with plans on hold. What he started next is now shaping the way thousands of farmers grow, learn, and earn.",
    href: "https://thebetterindia.com/startup/bihar-dehati-prince-shukla-agrate-farming-tools-training-young-founder-farmers-10814733",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/11/26/prince-shukla-agrate-2025-11-26-18-01-50.png",
  },
  {
    id: "senior-travel-startup",
    title: "The Startup Giving 5000 Seniors a Second Innings of Travel, Fun & Freedom",
    description: "From scuba diving and learning new tech skills to exploring 20 countries, SeniorWorld is giving India's seniors a vibrant second innings with travel and freedom.",
    href: "https://thebetterindia.com/travel/senior-travel-india-seniorworld-startup-10790023",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/11/19/senior-world-2025-11-19-21-19-58.png",
  },
  {
    id: "electric-trike-startup",
    title: "Bengaluru Startup Builds an Electric Trike That Stays Upright — Even on India's Toughest Roads",
    description: "iGowise Mobility's self-balancing electric trike empowers delivery workers, commuters, and micro-entrepreneurs to travel confidently on India's streets.",
    href: "https://thebetterindia.com/innovation/igowise-mobility-anti-topple-electric-trike-bengaluru-startup-self-balancing-trike-safe-mobility-riders-10791612",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/11/20/igowise-mobility-electric-trike-2025-11-20-12-49-16.png",
  },
  {
    id: "women-tech-careers",
    title: "She Now Helps 1000+ Women Build Careers in Tech After Being Told Career Would Hurt Marriage",
    description: "Pooja Bangad's SheWork helps women return to tech after breaks, fights for equal opportunities, and challenges gender bias holding women back.",
    href: "https://thebetterindia.com/368833/shework-hiring-more-women-in-tech-industry-pooja-bangad-entrepreneur-gender-bias/",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/post_attachments/uploads/2024/10/Pooja-Bangad-SheWork.in_-1728051227.jpg",
  },
  {
    id: "mushroom-furniture",
    title: "Furniture From Mushrooms? Meet the Couple Turning Waste Into Pieces That Return to Soil",
    description: "In Mumbai, architects launched 'Anomalia' to turn mushrooms into consoles, blocks, and textiles — light, durable pieces that challenge design thinking.",
    href: "https://thebetterindia.com/innovation/mumbai-anomalia-startup-mushroom-furniture-sustainable-design-from-crop-waste-innovation-10487491",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/09/22/anomalia-2025-09-22-15-13-44.jpg",
  },
  {
    id: "air-to-water-startup",
    title: "This Kolkata Startup Is Turning Air Into Water — Over 100 Million Litres and Counting",
    description: "Akvo Atmospheric Water Systems creates clean drinking water from air. With over 100 million litres generated across 15 countries, it offers a sustainable alternative.",
    href: "https://thebetterindia.com/web-stories/sustainability/akvo-kolkata-water-from-air-navkaran-singh-bagga-atmospheric-water-generators-condensation-10473208",
    image: "https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/09/17/akvo-atmospheric-water-systems-2025-09-17-16-16-11.png",
  },
];

const Blog = () => {
  const recentPosts = [
    {
      title: 'OpenAI GPT-5: What We Know About the Next-Gen AI Model',
      excerpt: 'OpenAI is preparing to launch GPT-5, promising revolutionary improvements in reasoning, multimodal capabilities, and real-world task completion. Here\'s everything we know so far.',
      date: 'Feb 5, 2025',
      readTime: '6 min',
      category: 'AI News',
      link: 'https://openai.com/',
      image: chatgptNewsImg,
    },
    {
      title: 'How AI Agents Are Revolutionizing Software Development',
      excerpt: 'From Devin to Claude Computer Use, AI agents are now writing code, debugging, and even deploying applications. Discover how autonomous AI is transforming the developer experience.',
      date: 'Feb 4, 2025',
      readTime: '5 min',
      category: 'AI News',
      link: 'https://www.anthropic.com/',
      image: aiNewsCoverImg,
    },
    {
      title: 'College Student Launches EdTech Startup with Nexcubic Support',
      excerpt: 'A 21-year-old engineering student built an innovative learning platform with Nexcubic\'s free student program. From idea validation to complete branding — here\'s their inspiring journey.',
      date: 'Feb 3, 2025',
      readTime: '4 min',
      category: 'Student Startup',
      link: 'https://www.instagram.com/nexcubic/',
      image: studentEntrepreneurImg,
    },
    {
      title: 'Student Startup Incubator: How Young Founders Are Building the Future',
      excerpt: 'Meet the next generation of entrepreneurs. These college students are turning classroom projects into real businesses with mentorship, branding, and tech support from Nexcubic.',
      date: 'Feb 2, 2025',
      readTime: '5 min',
      category: 'Student Startup',
      link: 'https://www.instagram.com/nexcubic/',
      image: studentStartupTeamImg,
    },
    {
      title: 'How to Use Google AI Studio to Build AI Apps for Free',
      excerpt: 'Google AI Studio is a free, browser-based IDE for prototyping with generative AI models. Learn how to create chatbots, analyze data, and generate content using Gemini — no coding required.',
      date: 'Jan 28, 2025',
      readTime: '5 min',
      category: 'AI Tools',
      link: 'https://aistudio.google.com/',
      image: googleAiStudioImg,
    },
    {
      title: 'Lovable AI: Build Web Apps by Just Describing What You Want',
      excerpt: 'Lovable is changing how we create software. Simply describe your idea, and watch as AI generates a complete, functional web application with React, Tailwind, and more — in real-time.',
      date: 'Jan 27, 2025',
      readTime: '4 min',
      category: 'AI Tools',
      link: 'https://lovable.dev/',
      image: lovableAiCoverImg,
    },
    {
      title: 'ChatGPT vs Gemini vs Claude: Which AI Assistant Should You Use in 2025?',
      excerpt: 'A comprehensive comparison of the top AI assistants. Learn the strengths and best use cases for ChatGPT, Google Gemini, and Anthropic Claude to pick the right one for your needs.',
      date: 'Jan 26, 2025',
      readTime: '6 min',
      category: 'AI Comparison',
      link: 'https://www.theverge.com/24249510/chatgpt-gemini-claude-best-ai-assistant-chatbot',
      image: aiComparisonImg,
    },
    {
      title: 'WaveTea - First Student Success Story',
      excerpt: 'Meet our first student entrepreneur! A college student turned their passion for tropical smoothies and iced herbal teas into a thriving beverage brand with complete support from Nexcubic — 100% free. Visit wavetea.shop',
      date: 'Dec 30, 2025',
      readTime: '4 min',
      category: 'Student Success',
      link: 'https://www.instagram.com/nexcubic/',
      image: waveteaImg,
    },
    {
      title: 'Trembly - Fashion Startup by Our Student',
      excerpt: 'From a dorm room idea to a fashion brand launching soon! Discover how this student built Trembly with trendy outfits, stylish cuts, bold colors, and unique textures — powered by Nexcubic\'s free student program. Visit trembly.shop',
      date: 'Dec 30, 2025',
      readTime: '4 min',
      category: 'Student Success',
      link: 'https://www.instagram.com/nexcubic/',
      image: tremblyImg,
    },
    {
      title: 'Nexcubic Student Program - Launch Your Tech Career',
      excerpt: 'Join our exclusive student program designed to bridge the gap between academic learning and industry demands. Get hands-on experience, mentorship, and real project opportunities.',
      date: 'Dec 29, 2025',
      readTime: '3 min',
      category: 'Nexcubic',
      link: 'https://www.instagram.com/nexcubic/',
      image: studentProgramImg,
    },
    {
      title: 'Bengaluru Family Startup Earns Rs 5.2 Cr/Year With Bio-Degradable Packaging',
      excerpt: 'Aecoz is proving that sustainable solutions don\'t have to come at the cost of quality, durability, or revenue growth with their biodegradable food packaging.',
      date: 'Dec 29, 2025',
      readTime: '6 min',
      category: 'Startup',
      link: 'https://thebetterindia.com/402852/aecoz-biodegradable-packaging-for-food-in-india/',
      image: 'https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/post_attachments/uploads/2025/02/Mervin-Feature-image-44-1738591986.jpg',
    },
    {
      title: 'Dehradun Startup Gets 5x the Funding on Shark Tank India',
      excerpt: 'A surprising pitch, an unexpected Rs 2.5 crore deal — here\'s how this Dehradun venture impressed Shark Tank India\'s sharks while helping farmers.',
      date: 'Dec 29, 2025',
      readTime: '5 min',
      category: 'Startup',
      link: 'https://thebetterindia.com/401644/dehradun-startup-gets-5x-the-funding-they-asked-for-heres-how-theyre-helping-farmers/',
      image: 'https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/post_attachments/uploads/2025/01/TBI-featured-image-3-1_11zon-1738330031.jpg',
    },
    {
      title: '17-YO Girl From UP Village Takes Innovation to Tokyo',
      excerpt: 'When dust from a nearby threshing machine filled her classroom, a Class 8 student asked a simple question that led to global recognition.',
      date: 'Dec 29, 2025',
      readTime: '5 min',
      category: 'Young Innovators',
      link: 'https://thebetterindia.com/youth/young-innovators/up-teen-pooja-pal-dust-free-threshing-machine-farm-innovation-tokyo-inspire-award-10919573',
      image: 'https://img-cdn.publive.online/fit-in/580x348/filters:format(webp)/english-betterindia/media/media_files/2025/12/18/feature-size-2025-12-18-00-57-14.png',
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

      {/* NGO Project Section - Mushroom Farming & Hydroponics */}
      <FinancialHero
        title={
          <>
            Building Self-Sufficient <span className="text-primary">Communities</span>
          </>
        }
        description="We're launching an in-house project to help orphanages and old age homes become self-sufficient through mushroom farming and hydroponics. Fresh food, sustainable income, and dignity for those who need it most."
        buttonText="Coming Soon"
        buttonLink="/about#contact"
        imageUrl1={mushroomFarmingImg}
        imageUrl2={hydroponicsImg}
      />

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
                {post.link.startsWith('/') ? (
                  <Link to={post.link} className="block">
                    <div className="bg-muted/50 p-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                ) : (
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="bg-muted/50 p-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </a>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                    {post.link.startsWith('/') ? (
                      <Link to={post.link}>{post.title}</Link>
                    ) : (
                      <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
                    )}
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
                  {post.link.startsWith('/') ? (
                    <Link 
                      to={post.link}
                      className="mt-4 flex items-center text-sm font-medium text-accent hover:underline"
                    >
                      View Story <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  ) : (
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center text-sm font-medium text-accent hover:underline"
                    >
                      View Story <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Women Special Offer - Big Featured Post */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5 border-t">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
                Special Offer
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-6">
                Women's Special Offer
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                <strong>Connect with your idea and get your business going.</strong>
              </p>
              <p className="text-muted-foreground mb-6">
                At Nexcubic, we are committed to empowering women entrepreneurs and startups. We believe that women-led businesses have the power to transform industries and create lasting impact. That's why we're offering exclusive benefits designed specifically for women in business.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                  <span className="text-muted-foreground">Up to <strong>30% discount</strong> on all our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                  <span className="text-muted-foreground"><strong>Free consultation</strong> and business guidance sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                  <span className="text-muted-foreground">Priority support for <strong>GST, Udhyam & Startup India</strong> registrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                  <span className="text-muted-foreground"><strong>Mentorship program</strong> with industry experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                  <span className="text-muted-foreground"><strong>Networking opportunities</strong> with other women entrepreneurs</span>
                </li>
              </ul>
              <Link to="/about#contact">
                <Button size="lg" className="gap-2">
                  Get Started Today <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={womensSpecialImg} 
                  alt="Nexcubic Women's Special Offer - Connect with your idea and get your business going"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;