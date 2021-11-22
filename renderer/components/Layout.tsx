import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import 'normalize.css'

import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
      </AppBar>
    </Box>
    {children}
    <footer>
    </footer>
  </div>
)

export default Layout
