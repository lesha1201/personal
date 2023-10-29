import NextLink from 'next/link';
import React from 'react';

import { GITHUB_URL } from '@/app/config';
import { GitHubIcon, IconButton, Logo } from '@/lib/ui';
import { HeaderNavigationLink } from './header-navigation-link';

export function HeaderNavigation() {
  return (
    <nav className="flex w-full items-center">
      <Logo as={NextLink} href="/" />

      <div className="ml-7 flex items-center gap-6 sm:ml-9">
        <HeaderNavigationLink as={NextLink} href="/blog">
          Blog
        </HeaderNavigationLink>
        <HeaderNavigationLink as={NextLink} href="/projects">
          Projects
        </HeaderNavigationLink>
        <HeaderNavigationLink as={NextLink} href="/about-me">
          About
        </HeaderNavigationLink>
      </div>

      <div className="ml-auto">
        <IconButton
          as="a"
          href={GITHUB_URL}
          target="_blank"
          paddingMode="outer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
      </div>
    </nav>
  );
}
