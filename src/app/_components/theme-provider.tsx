'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { THEMES } from '@/config';

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      storageKey="aryabov-theme"
      enableSystem
      disableTransitionOnChange
      enableColorScheme={false}
      themes={THEMES}
    >
      {children}
    </NextThemesProvider>
  );
}
