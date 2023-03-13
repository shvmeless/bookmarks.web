// IMPORTS
import NotificationPanel from '../notifications/NotificationPanel'
import css from './AppBody.module.scss'

// COMPONENT
export default function AppBody (): JSX.Element {

  // RETURN
  return <div className={css.AppBody}>
    <NotificationPanel/>
  </div>

}
