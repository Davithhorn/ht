import { useState } from "react"

const useModal = () => {
    const [value, setValue] = useState(false)
    const onHide = () => setValue(false)
    const onShow = () => setValue(true)
    const onToggle = () => setValue(!value)
  return {
    value,
    onToggle,
    onShow,
    onHide
  }
}

export default useModal