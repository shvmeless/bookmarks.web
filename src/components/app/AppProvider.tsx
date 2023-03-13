// IMPORTS
import NotificationsProvider from '../../contexts/NotificationsProvider'

// COMPONENT
export default function AppProvider (props: {
  children: JSX.Element | JSX.Element[]
}): JSX.Element {

  // RETURN
  return <NotificationsProvider>
    {props.children}
  </NotificationsProvider>

}
