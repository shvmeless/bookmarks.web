// IMPORTS
import css from './Input.module.scss'

// COMPONENT
export default function Input (props: {
  value: string
  onChange: (value: string) => void
  autofocus?: boolean
  className?: string
  color?: 'primary' | 'extra' | 'favorite' | 'error'
  placeholder?: string
}): JSX.Element {

  // PROPS
  const autofocus = props.autofocus ?? false
  const className = props.className ?? ''
  const color = props.color ?? 'primary'
  const placeholder = props.placeholder ?? '...'

  // RETURN
  return <input
    className={`${css.Input} ${css[color]} ${className}`}
    placeholder={placeholder}
    type='text'
    autoFocus={autofocus}
    value={props.value}
    onChange={(e) => { props.onChange(e.target.value) }}
  />

}
