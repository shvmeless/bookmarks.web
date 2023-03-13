// IMPORTS
import { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

// INTERFACE
export interface AppNotification {
  id: string
  type: 'success' | 'info' | 'error'
  title: string
  message: string
}

// INTERFACE
interface AppNotificationConstructor {
  type: 'success' | 'info' | 'error'
  title: string
  message: string
}

// INTERFACE
export interface NotificationsContextType {
  notifications: AppNotification[]
  addNotification: (notification: AppNotificationConstructor) => void
  removeNotification: (id: string) => void
}

// HOOK
export function useNotifications (): NotificationsContextType {

  // STATE
  const [notifications, setNotifications] = useState<AppNotification[]>([])

  // FUNCTION
  const addNotification = (notification: AppNotificationConstructor): void => {
    const newNotifications = notifications.slice(-2)

    newNotifications.push({
      id: uuid(),
      type: notification.type,
      title: notification.title,
      message: notification.message,
    })

    setNotifications(newNotifications)

  }

  // FUNCTION
  const removeNotification = (id: string): void => {
    const newNotifications = notifications.filter((notification) => (notification.id !== id))
    setNotifications(newNotifications)
  }

  // RETURN
  return { notifications, addNotification, removeNotification }

}

// CONTEXT
export const NotificationsContext = createContext<NotificationsContextType>({
  notifications: [],
  addNotification: () => {},
  removeNotification: () => {},
})
