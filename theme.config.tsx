import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Analytics } from '@vercel/analytics/react'

const config: DocsThemeConfig = {
  logo: <span>Cybersecurity Awareness</span>,
  project: {
    link: 'https://github.com/james-txt/cybersecurity-awareness',
  },
  feedback: {
    content:null
  },
  editLink:
  {
    component: null    
  },
  footer: {
    text: (
      <span>
          <a href="foobar" target="_blank">
           &copy; 2024 Innovatech Solutions
          </a>
      </span>
    )
  },
  head: ({ title, meta }: { title: string; meta: { description?: string } }) => (
    <>
      {meta.description && <meta name="description" content={meta.description} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <Analytics />
    </>
  ),
}

export default config