import React from 'react';

export interface ThemeContextType {
  theme: string; // 修改这里，之前可能是直接 string
  toggleTheme: () => void;
}

// 当不使用Provider时，默认值为light
export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});
