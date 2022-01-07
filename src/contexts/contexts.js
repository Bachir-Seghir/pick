import React, { createContext, useReducer } from 'react'
import { OriginReducer, DestinationReducer } from '../reducers/reducers'

// origin coordinates : from where you will be picked 
export const OriginContext = createContext()

// origin coordinates : Destination 
export const DestinationContext = createContext()

export const OriginContextProvider = (props) => {
    const [origin, dispatchOrigin] = useReducer(OriginReducer, {
        origin: {
            latitude: null,
            longitude: null,
            address: "",
            name: ""
        }
    })

    return (
        <OriginContext.Provider
            value={{ origin, dispatchOrigin }}
        >
            {props.children}
        </OriginContext.Provider>
    )
}
export const DestinationContextProvider = (props) => {
    const [destination, dispatchDestination] = useReducer(DestinationReducer, {
        origin: {
            latitude: null,
            longitude: null,
            address: "",
            name: ""
        }
    })

    return (
        <DestinationContext.Provider
            value={{ destination, dispatchDestination }}
        >
            {props.children}
        </DestinationContext.Provider>
    )
}