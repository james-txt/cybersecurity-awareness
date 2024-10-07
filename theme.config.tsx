import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Analytics } from '@vercel/analytics/react'

const config: DocsThemeConfig = {
  head: (
    <>
      <title>Cybersecurity Awareness</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Cybersecurity Awareness"/>
      <meta property="og:description" content="Innovatech Solutions: Cybersecurity Awareness Website" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  main: ({ children }) => (
    <>
      {children}
      <Analytics />
    </>
  ),
  logo: <span>Cybersecurity Awareness</span>,
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
  },
  search: {
    placeholder: 'Search cybersecurity topics..'
  }
}

export default config