'use client';

import NextLink from 'next/link';
import { useTheme } from 'next-themes';
import React, { useCallback, useEffect, useState } from 'react';

import { GITHUB_URL, THEME } from '@/config';
import { GitHubIcon, IconButton, Logo, MoonIcon, SunIcon } from '@/lib/ui';
import { to } from '@/routing';
import { HeaderNavigationLink } from './header-navigation-link';

export function HeaderNavigation() {
  const [isMounted, setIsMounted] = useState(false);

  const { setTheme, resolvedTheme } = useTheme();

  const isDarkTheme = isMounted && resolvedTheme === THEME.dark;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onClickTheme = useCallback(() => {
    setTheme(isDarkTheme ? THEME.light : THEME.dark);
  }, [isDarkTheme, setTheme]);

  const themeButtonLabel = isDarkTheme ? 'Use light mode' : 'Use dark mode';

  return (
    <nav className="flex w-full items-center gap-6 sm:gap-9">
      <Logo as={NextLink} href={to.home()} />

      <div className="flex items-center gap-4 sm:gap-6">
        <HeaderNavigationLink as={NextLink} href={to.blog()}>
          Blog
        </HeaderNavigationLink>
        <HeaderNavigationLink as={NextLink} href={to.projects()}>
          Projects
        </HeaderNavigationLink>
        <HeaderNavigationLink as={NextLink} href={to.aboutMe()}>
          About
        </HeaderNavigationLink>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <IconButton
          as="a"
          href={GITHUB_URL}
          target="_blank"
          paddingMode="outer"
          title="GitHub"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          title={themeButtonLabel}
          aria-label={themeButtonLabel}
          onClick={onClickTheme}
        >
          {isDarkTheme ? <SunIcon /> : <MoonIcon />}
        </IconButton>
      </div>
    </nav>
  );
}
