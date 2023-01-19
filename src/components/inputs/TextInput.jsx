import styles from './TextInput.module.css'

export default function TextInput({
  leftIcon,
  placeholder,
  width = "100%",
  label,
  name,
  id,
  backgroundColor = '#27292c',
  borderColor = 'var(--border-clr)',
  required = false,
  value,
  setValue
}) {

  return (
    <>
      {label && <label name={name}>{label}</label>}
      <div className={`${styles.textInput} vertical-align`} style={{ backgroundColor, borderColor }}>
        {leftIcon}
        <input type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
          required={required} />
      </div>
    </>
  )
}
