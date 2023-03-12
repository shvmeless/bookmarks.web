// IMPORTS
import css from './Switch.module.scss'

// COMPONENT
export default function Switch (props: {
  children: JSX.Element
  value: boolean
  onClick: (value: boolean) => void
  className?: string
  color?: 'favorite' | 'error'
}): JSX.Element {

  // PROPS
  const className = props.className ?? ''
  const color = props.color ?? 'primary'

  // RETURN
  return <button
    className={`${css.Switch} ${props.value ? css.active : ''} ${css[color]} ${className}`}
    type='button'
    onClick={() => { props.onClick(!props.value) }}
  >{props.children}</button>

}
