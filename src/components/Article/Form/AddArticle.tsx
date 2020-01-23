import React, { FunctionComponent, useState } from 'react'
import { ulid } from 'ulid'
import customStyles from 'styles/customStyles'

// interface
import { BookmarkDetails } from 'interfaces/BookmarkDetails'

// components
import GridContainer from 'components/Grid/GridContiner'
import GridItem from 'components/Grid/GridItem'

// MUI components
import { TextField, TextareaAutosize, Button, FormGroup } from '@material-ui/core'

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
        <GridItem>
          <TextField
            id="input_title_add_article"
            label="book title"
            margin="dense"
            autoComplete="off"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
        </GridItem>
        <GridItem>
          <TextField
            id="input_page_no_add_article"
            aria-label="pageNo"
            placeholder="Page No"
            rows={4}
            onChange={e => setPageNo(parseInt(e.target.value))}
            value={pageNo}
          />
        </GridItem>
        <GridItem>
          <TextareaAutosize
            id="input_memo_add_article"
            aria-label="memo"
            placeholder="Memo"
            rows={4}
            onChange={e => setMemo(e.target.value)}
            value={memo}
          />
        </GridItem>
        <GridItem>
          <GridContainer {...{ direction: "row", justify:"space-evenly", alignItems:"center" }}>
            <Button id="button_submit_add_article" variant="contained" color="primary" onClick={onClickedSubmitButton}>
              Submit
            </Button>
            <Button id="button_clear_add_article" variant="contained" onClick={onClickClearButton}>
              Clear
            </Button>
          </GridContainer>
        </GridItem>
      </FormGroup>
    </div>
  )
}

export default AddArticle