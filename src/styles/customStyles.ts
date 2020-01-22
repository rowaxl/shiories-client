import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export default makeStyles(
  (theme: Theme) => createStyles({
    articleGridItem: {},
    articlePaper: {
      padding: theme.spacing(2)
    },
    articleTitle: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      fontSize: '1.2em',
      padding: theme.spacing(0),
      marginBottom: theme.spacing(2)
    },
    wrotenAtDiv: {
      ...theme.typography.subtitle1,
      position: 'absolute',
      fontSize: '0.8em',
      right: '2%',
      top: '0%',
      textAlign: 'right',
      width: '100px'
    }
  })
)
