// IMPORTS
import AppSidebar from './AppSidebar'
import css from './App.module.scss'
import AppBody from './AppBody'

// COMPONENT
export default function App (): JSX.Element {

  // RETURN
  return <main className={css.App}>
    <div className={css.AppContent}>
      <AppSidebar/>
      <AppBody/>
    </div>
  </main>

}
