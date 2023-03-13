// IMPORTS
import css from './Input.module.scss'

// COMPONENT
export default function Input (props: {
  value: string
  onChange: (value: string) => void
  autofocus?: boolean
  className?: string
  placeholder?: string
}): JSX.Element {

  // PROPS
  const autofocus = props.autofocus ?? false
  const className = props.className ?? ''
  const placeholder = props.placeholder ?? '...'

  // RETURN
  return <input
    className={`${css.Input} ${className}`}
    placeholder={placeholder}
    type='text'
    autoFocus={autofocus}
    value={props.value}
    onChange={(e) => { props.onChange(e.target.value) }}
  />

}
