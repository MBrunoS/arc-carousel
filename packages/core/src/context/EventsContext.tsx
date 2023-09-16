import { Events } from '@/types/Events'
import { createContext, useContext } from 'react'

const EventsContext = createContext<Events>({})

export interface EventsProviderProps extends Events {
  children: React.ReactNode
}

export const EventsProvider = ({ children, ...events }: EventsProviderProps) => {
  return <EventsContext.Provider value={{ ...events }}>{children}</EventsContext.Provider>
}

export const useEvents = () => {
  return useContext(EventsContext)
}
