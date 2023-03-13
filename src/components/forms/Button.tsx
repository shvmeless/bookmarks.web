// IMPORTS
import css from './Button.module.scss'

// COMPONENT
export default function Button (props: {
  children: JSX.Element
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}): JSX.Element {

  // PROPS
  const className = props.className ?? ''
  const type = props.type ?? 'button'

  // RETURN
  return <button
    className={`${css.Button} ${className}`}
    type={type}
    onClick={props.onClick}
  >{props.children}</button>

}
