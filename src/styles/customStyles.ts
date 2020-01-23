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
    },
    articlePageNo: {
      ...theme.typography.body2
    },
    articleMemo: {
      ...theme.typography.body1
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    postArticlePaper: {
      backgroundColor: theme.palette.background.default,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    floatingActionButton: {
      position: 'absolute',
      right: '1%',
      top: '5%',
      '& > *': {
        marginRight: theme.spacing(1),
      },
    }
  })
)
