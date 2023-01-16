import { useState } from 'react'
import styles from './TextInput.module.css'
import Label from './Label'

export default function TextInput({
  leftIcon,
  placeholder,
  width,
  label,
  name,
  id,
  backgroundColor = '#27292c',
  borderColor = 'var(--border-clr)',
  required = false,
  input,
  setInput
}) {

  // const [input, setInput] = useState('');

  return (
    <>
      {label && <Label name={name}>{label}</Label>}
      <div className={`${styles.textInput} vertical-align`} style={{ backgroundColor, borderColor }}>
        <div className="vertical-align">
          {leftIcon}
          <input type="text"
            name={name}
            id={id}
            placeholder={placeholder}
            style={{ width }}
            value={input}
            onChange={e => setInput(e.target.value)}
            required={required} />
        </div>
      </div>
    </>
  )
}
