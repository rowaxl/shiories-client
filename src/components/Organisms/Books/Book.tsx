import React, { FunctionComponent } from 'react'
import customStyles from 'styles/customStyles'

// interface
import { BookDetails } from 'interfaces'

// components
import Article from 'components/Molecules/Article/Article'
import GridItem from 'components/Atoms/Grid/Item'

// MUI components
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const Book: FunctionComponent<{ detail: BookDetails }> = ({ detail }) => {
  const { id, title } = detail

  const renderRestDetail = (details: BookDetails) => {
    return Object.keys(details).map((key) => {
      if (
        key === 'id'
        || key === 'title'
        || key === 'created'
        || key === 'thumbnail'
      ) return ''

      return (
        <GridItem
          key={`book_${key}_${id}`}
        >
          <Typography
            id={`book_${key}_${id}`}
            className={customStyles().bookDetail}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {key.toUpperCase()} : {details[key]}
          </Typography>
        </GridItem>
      )
    })
  }

  const renderThumbnail = (thumbnail:string | undefined) => {
    if (!thumbnail) return ''

    return (
      <GridItem {...{ xs:6, sm: 5, md: 4 }}>
        <CardMedia
          className={customStyles().bookThumbnail}
          image={detail.thumbnail}
        />
      </GridItem>
    )
  }

  return (
    <Article>
      <Card
        variant="outlined"
        className={customStyles().bookCardContainer}
      >
        {renderThumbnail(detail.thumbnail)}

        <GridItem {...{ xs:6, sm: 7, md: 8 }}
          className={customStyles().bookCardDetail}
        >
          <CardContent>
            <CardHeader
              id={`book_title_${id}`}
              className={customStyles().bookCardHeader}
              title={title}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
            />

            {renderRestDetail(detail)}
          </CardContent>
        </GridItem>
      </Card>
    </Article>
  )
}

export default Book