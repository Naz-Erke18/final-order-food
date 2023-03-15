import { store } from '../../store/store'

export const lightTheme = {
  palette: {
    primary: {
      main: '#4b0f00',
      light: '#7a1f09',
      dark: '#5f1c0b',
      constrastText: '#00000',
    },
    secondary: {
      main: '#5c5957',
      light: '#fff',
      dark: '#fff',
      constrastText: '#FFFF',
    },
    error: {
      main: '#ee1616',
      light: '#ee1616',
      dark: '#ee1616',
      constrastText: '#FFFF',
    },
    success: {
      main: '#0ff',
      light: '#0ff',
      dark: '#0ff',
      constrastText: 'bisque',
    },
  },
  typoghraphy: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
}

export const darkTheme = {
  palette: {
    primary: {
      main: 'rgb(0,0,241)',
      light: 'rgb(0,0,241)',
      dark: 'rgb(0,0,241)',
      constrastText: '#FFFF',
    },
    secondary: {
      main: 'rgb(0,0,241)',
      light: 'rgb(0,0,241)',
      dark: 'rgb(0,0,241)',
      constrastText: '#FFFF',
    },
    error: {
      main: 'rgb(0,0,241)',
      light: 'rgb(0,0,241)',
      dark: 'rgb(0,0,241)',
      constrastText: '#FFFF',
    },
    success: {
      main: '#0ff',
      light: '#0ff',
      dark: '#0ff',
      constrastText: '#fff',
    },
  },
  typoghraphy: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
}

export const getTheme = () => {
  const currentTheme = store.getState().ui.themeMode
  return currentTheme === 'light' ? lightTheme : darkTheme
}
