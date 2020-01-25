import React, {
  FunctionComponent,
  useState,
} from 'react'
import { ulid } from 'ulid'
import customStyles from 'styles/customStyles'

// interface
import BookmarkDetails from 'interfaces/BookmarkDetails'

// components
import AddArticle from 'components/Molecules/Article/Form/AddArticle'
import GridContainer from 'components/Atoms/Grid/Continer'
import GridItem from 'components/Atoms/Grid/Item'

// MUI components
import {
  TextField,
  FormGroup
} from '@material-ui/core'

type Props = {
  onSubmit: Function
}

const AddBookmark: FunctionComponent<Props> = ({ onSubmit }) => {
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
    <AddArticle
      title="Add Bookmark"
      onSubmit={onClickedSubmitButton}
      onClear={onClickClearButton}
    >

      <GridContainer>

        <GridItem {...{ xs: 6 }}>
          book info
        </GridItem>

        <GridItem {...{ xs: 6 }}>
          <FormGroup>
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
          </FormGroup>
        </GridItem>

      </GridContainer>
    </AddArticle>
  )
}

export default AddBookmark