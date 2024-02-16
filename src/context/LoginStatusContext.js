import React, { createContext } from 'react'

const defaultState = {
  loginStatus: false,
}

export const LoginStatusContext = createContext(defaultState)
