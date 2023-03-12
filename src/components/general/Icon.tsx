// IMPORTS
import css from './Icon.module.scss'

// ICONS
const ICONS = {
  bookmark: <><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'></path></>,
  edit: <><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1'></path><path d='M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z'></path><path d='M16 5l3 3'></path></>,
  delete: <><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M4 7h16'></path><path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'></path><path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'></path><path d='M10 12l4 4m0 -4l-4 4'></path></>,
  favorite: <><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z'></path></>,
  favoriteOff: <><path stroke='none' d='M0 0h24v24H0z' fill='none'></path><path d='M3 3l18 18'></path><path d='M10.012 6.016l1.981 -4.014l3.086 6.253l6.9 1l-4.421 4.304m.012 4.01l.588 3.426l-6.158 -3.245l-6.172 3.245l1.179 -6.873l-5 -4.867l6.327 -.917'></path></>,
}

// TYPE
type IconName = keyof typeof ICONS

// COMPONENT
export default function Icon (props: {
  className?: string
  icon: IconName
}): JSX.Element {

  // PROPS
  const className = props.className ?? ''

  // RETURN
  return <svg
    className={`${css.Icon} ${className}`}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
  >{ICONS[props.icon]}</svg>

}
