import React, { FunctionComponent, useState } from 'react'
import { ulid } from 'ulid'

// Components
import GridContainer from '../Grid/GridContiner'
import GridItem from '../Grid/GridItem'

// MUI Components
import { TextField, TextareaAutosize, Button, FormGroup } from '@material-ui/core'

const AddArticle:
  FunctionComponent<{ onSubmit: Function }> = ({ onSubmit }) => {
    const [title, setTitle] = useState('')
    const [impression, setImpression] = useState('')

    // FIXME: is it the only way?
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
    }

    const onChangeImpression = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setImpression(e.target.value)
    }

    const onClickedSubmit = () => {
      const newArticle = {
        id: ulid(),
        title,
        impression,
        wrotenAt: Date.now()
      }

      // TODO: Emit POST Article evnet
      onSubmit(newArticle)

      onClickClear()
    }

    const onClickClear = () => {
      setTitle('')
      setImpression('')
    }

    return (
      <FormGroup>
        <GridItem>
          <TextField
            id="title"
            label="book title"
            margin="dense"
            autoComplete="off"
            onChange={onChangeTitle}
            value={title}
          />
        </GridItem>
        <GridItem>
          <TextareaAutosize
            id="impression"
            aria-label="impression"
            placeholder="Write your impression"
            rows={4}
            onChange={onChangeImpression}
            value={impression}
          />
        </GridItem>
        <GridItem>
          <GridContainer {...{ direction: "row", justify:"space-evenly", alignItems:"center" }}>
            <Button variant="contained" color="primary" onClick={onClickedSubmit}>
              Submit
            </Button>
            <Button variant="contained" onClick={onClickClear}>
              Clear
            </Button>
          </GridContainer>
        </GridItem>
      </FormGroup>
    )
}

export default AddArticle