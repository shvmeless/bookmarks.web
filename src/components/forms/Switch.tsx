// IMPORTS
import css from './Switch.module.scss'

// COMPONENT
export default function Switch (props: {
  children: JSX.Element
  value: boolean
  onClick: (value: boolean) => void
  className?: string
}): JSX.Element {

  // PROPS
  const className = props.className ?? ''

  // RETURN
  return <button
    className={`${css.Switch} ${props.value ? css.active : ''} ${className}`}
    type='button'
    onClick={() => { props.onClick(!props.value) }}
  >{props.children}</button>

}
