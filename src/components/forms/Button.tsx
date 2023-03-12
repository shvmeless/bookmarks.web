// IMPORTS
import css from './Button.module.scss'

// COMPONENT
export default function Button (props: {
  children: JSX.Element
  onClick?: () => void
  className?: string
  color?: 'primary' | 'extra' | 'favorite' | 'error'
  type?: 'button' | 'submit'
}): JSX.Element {

  // PROPS
  const className = props.className ?? ''
  const color = props.color ?? 'primary'
  const type = props.type ?? 'button'

  // RETURN
  return <button
    className={`${css.Button} ${css[color]} ${className}`}
    type={type}
    onClick={props.onClick}
  >{props.children}</button>

}
