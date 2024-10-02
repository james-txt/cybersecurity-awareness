import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Analytics } from '@vercel/analytics/react'

const config: DocsThemeConfig = {
  main: ({ children }) => (<>
    {children}
    <Analytics />
</>),
  logo: <span>Cybersecurity Awareness</span>,
  project: {
    link: 'https://github.com/james-txt/cybersecurity-awareness',
  },
  feedback: {
    content:null
  },
  editLink: {
    text: null,
  },
  footer: {
    text: (
      <span>
          <a href="foobar" target="_blank">
           &copy; 2024 Innovatech Solutions
          </a>
      </span>
    )
  }
}

export default config