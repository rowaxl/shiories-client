import React, { FunctionComponent, useState } from 'react'
import { ulid } from 'ulid'

// interface
import { Article } from '../../interfaces/Article'

// Components
import GridContainer from '../Grid/GridContiner'
import GridItem from '../Grid/GridItem'

// MUI Components
import { TextField, TextareaAutosize, Button, FormGroup } from '@material-ui/core'

const AddArticle: FunctionComponent<{ onSubmit: Function }> = ({ onSubmit }) => {
    const [title, setTitle] = useState('')
    const [impression, setImpression] = useState('')

    // FIXME: is it the only way?
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
    }

    const onChangeImpression = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setImpression(e.target.value)
    }

    const onClickedSubmitButton = () => {
      // new Article()
      const newArticle: Article = {
        id: ulid(),
        title,
        impression,
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
          <TextareaAutosize
            id="input_impression_add_article"
            aria-label="impression"
            placeholder="Write your impression"
            rows={4}
            onChange={onChangeImpression}
            value={impression}
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