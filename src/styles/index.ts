import 'typeface-roboto'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export const customStyles = makeStyles((theme: Theme) => createStyles({
  buttonDiv: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
  },
  wrotenAtDiv: {
    ...theme.typography.subtitle1,
    position: 'absolute',
    right: 0,
    top: 0
  }
}))
