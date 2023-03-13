// IMPORTS
import { type AppNotification, NotificationsContext } from '../../contexts/notifications/NotificationsContext'
import css from './NotificationMessage.module.scss'
import { useContext } from 'react'

// COMPONENT
export default function NotificationMessage (props: {
  className?: string
  data: AppNotification
}): JSX.Element {

  // PROPS
  const className = props.className ?? ''

  // CONTEXT
  const { removeNotification } = useContext(NotificationsContext)

  // HANDLER
  const onClickHandler = (): void => {
    removeNotification(props.data.id)
  }

  // RETURN
  return <div className={`${css.NotificationMessage} ${css[props.data.type]} ${className}`} onClick={onClickHandler}>
    <h2 className={css.title} >{props.data.title}</h2>
    <p className={css.message} >{props.data.message}</p>
  </div>

}
