import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import PdfIcon from '@mui/icons-material/PictureAsPdf'
import Link from '@mui/material/Link'

export interface Deliberations {
  title: string
  date: string
  link: string
}

export default function Deliberations({ title, date, link }: Deliberations) {
  const dateFormatted = new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
  })
  return (
    <ListItem component={Link} href={link} target="_blank">
      <ListItemAvatar>
        <Avatar>
          <PdfIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={dateFormatted}
        primaryTypographyProps={{ color: 'black' }}
      />
    </ListItem>
  )
}
