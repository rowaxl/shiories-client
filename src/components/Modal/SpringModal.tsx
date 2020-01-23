import React, { forwardRef, FunctionComponent, ReactElement } from 'react'
import customStyles from 'styles/customStyles'

// MUI Components
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'

// animation
import { useSpring, animated } from 'react-spring'

interface FadeProps {
  children?: ReactElement
  in: boolean
  onEnter?: () => {}
  onExited?: () => {}
}

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter()
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited()
      }
    },
  })

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  )
})

type Props = {
  children?: ReactElement,
  isOpen: boolean
}

const SpringModal: FunctionComponent<Props> = ({ children, isOpen }) => {
  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={customStyles().modal}
        open={isOpen}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>

          {children}

        </Fade>
      </Modal>
    </div>
  )
}

export default SpringModal
