import React, {
  FunctionComponent,
  useState,
} from 'react'
import { ulid } from 'ulid'
import customStyles from 'styles/customStyles'

// interface
import { BookmarkDetails } from 'interfaces/BookmarkDetails'

// components
import GridContainer from 'components/Grid/GridContiner'
import GridItem from 'components/Grid/GridItem'

// MUI components
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

type Props = {
  onSubmit: Function
}

const AddArticle: FunctionComponent<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState('')
  const [pageNo, setPageNo] = useState(0)
  const [memo, setMemo] = useState('')

  const onClickedSubmitButton = () => {
    const newArticle: BookmarkDetails = {
      id: ulid(),
      pageNo,
      title,
      memo,
      wrotenAt: Date.now()
    }

    // Emit POST evnet
    onSubmit(newArticle)

    onClickClearButton()
  }

  const onClickClearButton = () => {
    setTitle('')
    setMemo('')
    setPageNo(0)
  }

  return (
    <div className={customStyles().postArticlePaper}>
      <FormGroup>

        <GridContainer {...{ spacing: 3 }}>
          <GridItem {...{ xs: 12 }}>
            <Box
              fontSize="h6.fontSize"
              marginTop={1}
              fontFamily="fontFamily"
            >
              Add New Bookmark
            </Box>
          </GridItem>
          {/* TODO: Select book */}

          <GridItem {...{ xs: 6 }}>
            book info
          </GridItem>

          <GridItem {...{ xs: 6 }}>
            <GridContainer {...{ spacing: 3 }}>
              <GridItem>
                <TextField
                  id="input_title_add_article"
                  label="Title"
                  margin="dense"
                  autoComplete="off"
                  onChange={e => setTitle(e.target.value)}
                  value={title}
                  className={customStyles().inputArticleTitle}
                />
              </GridItem>

              <GridItem>
                <TextField
                  id="input_page_no_add_article"
                  aria-label="pageNo"
                  label="Page No"
                  type="number"
                  autoFocus={true}
                  inputProps={{ min: 0, max: 99999, step: '1' }}
                  onChange={e => setPageNo(parseInt(e.target.value))}
                  value={pageNo}
                  className={customStyles().inputArticlePageNo}
                />
              </GridItem>

              <GridItem>
                <TextField
                  id="input_memo_add_article"
                  aria-label="memo"
                  label="Memo"
                  multiline
                  rows="4"
                  onChange={e => setMemo(e.target.value)}
                  value={memo}
                  variant="outlined"
                  className={customStyles().inputArticleMemo}
                />
              </GridItem>
            </GridContainer>
          </GridItem>

          <GridItem className={customStyles().modalButtons}>
            <GridContainer {...{ direction: "row", justify:"space-evenly", alignItems:"center" }}>
              <Button
                id="button_submit_add_article"
                variant="contained"
                color="primary"
                onClick={onClickedSubmitButton}
              >
                Submit
              </Button>

              <Button
                id="button_clear_add_article"
                variant="contained"
                color="default"
                onClick={onClickClearButton}
              >
                Clear
              </Button>
            </GridContainer>
          </GridItem>

        </GridContainer>
      </FormGroup>
    </div>
  )
}

export default AddArticle