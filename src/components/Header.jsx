import React from 'react'

import { AppBar, Toolbar, Typography, Button } from '@mui/material'

export default function Header() {
  return (
    <div>
      <AppBar position='fixed' sx={{zIndex:(theme)=> theme.zIndex.drawer +1}}>
        <Toolbar>
          <Typography variant="h6">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
