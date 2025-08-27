import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Ankitz007',
  description:
    'Personal site and blog by Ankit Singh',
  href: 'https://ankitz007.vercel.app',
  author: 'ankitz007',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/Ankitz007',
    label: 'GitHub',
  },
  {
    href: "https://www.linkedin.com/in/ankitz007/",
    label: 'LinkedIn'
  },
  {
    href: 'mailto:ankitkumarsingh11061999@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
