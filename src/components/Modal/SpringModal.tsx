import React, { forwardRef, useState, FunctionComponent, ReactElement } from 'react'
import customStyles from 'styles/customStyles'

// MUI Components
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'

// animation
import { useSpring, animated } from 'react-spring'

interface FadeProps {
  children?: ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

type Props = {
  children: ReactElement
}

const SpringModal: FunctionComponent<Props> = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false)

  const handleOpen = () => {
    setIsOpened(true)
  };

  const handleClose = () => {
    setIsOpened(false)
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-spring
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={customStyles().modal}
        open={isOpened}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpened}>

          {children}

        </Fade>
      </Modal>
    </div>
  );
}

export default SpringModal
