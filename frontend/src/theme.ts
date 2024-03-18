import { createTheme } from '@mantine/core';

export const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    'athens-blue': [
      '#edf7fc',
      '#c9e8f6',
      '#a4d9ef',
      '#80cae9',
      '#5cbbe3',
      '#38abdd',
      '#2296c7',
      '#1c7ba3',
      '#165f7f',
      '#10445b',
    ],
  },
  primaryColor: 'athens-blue',
  primaryShade: {
    light: 6,
    dark: 7,
  },

  breakpoints: {
    xxs: '24em',
    xxl: '100em',
  },

  fontFamily:
    'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
});
