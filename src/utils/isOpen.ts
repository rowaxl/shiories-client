import { useState } from 'react'

export default () => {
  const [isOpened, setIsOpened] = useState(false)

  const toggle = () => {
    setIsOpened(!isOpened)
  }

  const open = () => {
    setIsOpened(true)
  }

  const close = () => {
    setIsOpened(false)
  }

  return {
    isOpened,
    toggle,
    close,
    open
  }
}
