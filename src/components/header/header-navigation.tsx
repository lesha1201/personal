import NextLink from 'next/link';
import React from 'react';

import { GITHUB_URL, IS_BLOG_AVAILABLE } from '@/config';
import { GitHubIcon, IconButton, Logo } from '@/lib/ui';
import { to } from '@/routing';
import { HeaderNavigationLink } from './header-navigation-link';

export function HeaderNavigation() {
  return (
    <nav className="flex w-full items-center">
      <Logo as={NextLink} href={to.home()} />

      <div className="ml-7 flex items-center gap-6 sm:ml-9">
        {IS_BLOG_AVAILABLE && (
          <HeaderNavigationLink as={NextLink} href={to.blog()}>
            Blog
          </HeaderNavigationLink>
        )}
        <HeaderNavigationLink as={NextLink} href={to.projects()}>
          Projects
        </HeaderNavigationLink>
        <HeaderNavigationLink as={NextLink} href={to.aboutMe()}>
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
