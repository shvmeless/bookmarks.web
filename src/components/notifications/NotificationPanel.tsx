// IMPORTS
import { NotificationsContext } from '../../contexts/notifications/NotificationsContext'
import NotificationMessage from './NotificationMessage'
import css from './NotificationPanel.module.scss'
import { useContext } from 'react'

// COMPONENT
export default function NotificationPanel (props: {
  className?: string
}): JSX.Element {

  // PROPS
  const className = props.className ?? ''

  // CONTEXT
  const { notifications } = useContext(NotificationsContext)

  // RETURN
  return <div className={`${css.NotificationPanel} ${className}`}>
    {notifications.map((notification) => <NotificationMessage data={notification} key={notification.id}/>)}
  </div>

}
