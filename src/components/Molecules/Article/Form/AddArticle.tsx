import React, {
  FunctionComponent,
  // useState,
  ReactNode,
} from 'react'
import customStyles from 'styles/customStyles'

// components
import GridContainer from 'components/Atoms/Grid/Continer'
import GridItem from 'components/Atoms/Grid/Item'

// MUI components
import {
  FormGroup,
  Button,
  Box
} from '@material-ui/core'

type Props = {
  title: string
  children?: ReactNode
  onSubmit?: Function
  onClear?: Function
}

const AddArticle: FunctionComponent<Props> = ({ title, onSubmit, onClear, children }) => {
  const onClickSubmit = () => {
    onSubmit && onSubmit()
  }

  const onClickClear = () => {
    onClear && onClear()
  }

  const renderOnClear = () => 
    onClear ?
      <Button
        id="button_clear_add_article"
        variant="contained"
        color="default"
        onClick={onClickClear}
      >
        Clear
      </Button>
    : <></>

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
              {title}
            </Box>
          </GridItem>

          <GridItem>
            {children}
          </GridItem>

          <GridItem className={customStyles().modalButtons}>
            <GridContainer {...{
              direction: "row",
              justify: "space-evenly",
              alignItems: "center"
            }}>
              <Button
                id="button_submit_add_article"
                variant="contained"
                color="primary"
                onClick={onClickSubmit}
              >
                Submit
              </Button>

              {renderOnClear()}
            </GridContainer>
          </GridItem>

        </GridContainer>
      </FormGroup>
    </div>
  )
}

export default AddArticle