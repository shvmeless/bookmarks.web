// IMPORTS
import AppProvider from './AppProvider'
import AppSidebar from './AppSidebar'
import css from './App.module.scss'
import AppBody from './AppBody'

// COMPONENT
export default function App (): JSX.Element {

  // RETURN
  return <main className={css.App}>
    <AppProvider>

      <div className={css.AppContent}>
        <AppSidebar/>
        <AppBody/>
      </div>

    </AppProvider>
  </main>

}
