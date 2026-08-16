import { Helmet } from 'react-helmet-async';
import { SITE_URL, company } from '@/data/site';

interface Crumb {
  name: string;
  path: string;
}

interface SeoProps {
  title: string;
  description: string;
  path: string;
  /** Breadcrumb trail excluding Home, which is added automatically. */
  breadcrumbs?: Crumb[];
  /** Additional JSON-LD graph nodes (Service, FAQPage, Person, ...). */
  schemas?: Record<string, unknown>[];
  type?: 'website' | 'article';
}

export function Seo({ title, description, path, breadcrumbs, schemas = [], type = 'website' }: SeoProps) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;

  const graph: Record<string, unknown>[] = [...schemas];

  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [{ name: 'Home', path: '/' }, ...breadcrumbs].map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path === '/' ? '' : crumb.path}`,
      })),
    });
  }

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {graph.map((node, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(node)}
        </script>
      ))}
    </Helmet>
  );
}

export default Seo;
