import React, { FunctionComponent, useState } from 'react'
import { ulid } from 'ulid'

// interface
import { BookmarkDetails } from 'interfaces/BookmarkDetails'

// Components
import GridContainer from 'components/Grid/GridContiner'
import GridItem from 'components/Grid/GridItem'

// MUI Components
import { TextField, TextareaAutosize, Button, FormGroup } from '@material-ui/core'

const AddArticle: FunctionComponent<{ onSubmit: Function }> = ({ onSubmit }) => {
    const [title, setTitle] = useState('')
    const [pageNo, setPages] = useState(0)
    const [memo, setImpression] = useState('')

    // FIXME: is it the only way?
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
    }

    const onChangePageNo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setPages(parseInt(e.target.value))
    }

    const onChagneMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setImpression(e.target.value)
    }

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
      setImpression('')
    }

    return (
      <FormGroup>
        <GridItem>
          <TextField
            id="input_title_add_article"
            label="book title"
            margin="dense"
            autoComplete="off"
            onChange={onChangeTitle}
            value={title}
          />
        </GridItem>
        <GridItem>
          <TextField
            id="input_page_no_add_article"
            aria-label="pageNo"
            placeholder="Page No"
            rows={4}
            onChange={onChangePageNo}
            value={pageNo}
          />
        </GridItem>
        <GridItem>
          <TextareaAutosize
            id="input_impression_add_article"
            aria-label="impression"
            placeholder="Memo"
            rows={4}
            onChange={onChagneMemo}
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
    )
}

export default AddArticle