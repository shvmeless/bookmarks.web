// IMPORTS
import { NotificationsContext, useNotifications } from './NotificationsContext'

// COMPONENT
export default function NotificationsProvider (props: {
  children: JSX.Element | JSX.Element[]
}): JSX.Element {

  // STATE
  const state = useNotifications()

  // RETURN
  return <NotificationsContext.Provider value={state}>
    {props.children}
  </NotificationsContext.Provider>

}
