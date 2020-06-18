import React from 'react';

export const themes = {
  blue: {
    sidebar: 'blue',
    iconActive: '#1900a8',
    iconDefault: '#61dafb',
  },
  red: {
    sidebar: 'red',
    iconActive: '#550200',
    iconDefault: '#801815',
  },
  green: {
    sidebar: 'green',
    iconActive: '#004400',
    iconDefault: '#116611',
  },
  purple: {
    sidebar: 'purple',
    iconActive: '#260339',
    iconDefault: '#582A72',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.blue,
  toggleTheme: () => {},
});
