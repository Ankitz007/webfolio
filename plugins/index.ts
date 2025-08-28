import remarkDirective from 'remark-directive'
import remarkDirectiveSugar from 'remark-directive-sugar'
import remarkMath from 'remark-math'
import remarkEmoji from 'remark-emoji'

import type { RemarkPlugins } from 'astro'
import type { PropertiesFromTextDirective } from 'remark-directive-sugar'

export const remarkPlugins: RemarkPlugins = [
  // https://github.com/remarkjs/remark-directive
  remarkDirective,
  // https://github.com/lin-stephanie/remark-directive-sugar
  [
    remarkDirectiveSugar,
    {
      badge: {
        presets: {
          n: { text: 'NEW' },
          a: { text: 'ARTICLE' },
          v: { text: 'VIDEO' },
        },
      },
      link: {
        faviconSourceUrl:
          'https://www.google.com/s2/favicons?domain={domain}&sz=128',
        imgProps: (node: Parameters<PropertiesFromTextDirective>[0]) => {
          const props: ReturnType<PropertiesFromTextDirective> = {
            'aria-hidden': 'true',
          }
          if (node.attributes?.class?.includes('github'))
            props.src = 'https://github.githubassets.com/favicons/favicon.svg'
          return props
        },
      },
      image: {
        stripParagraph: false,
      },
    },
  ],
  // https://github.com/remarkjs/remark-math/tree/main/packages/remark-math
  remarkMath,
  remarkEmoji,
]
