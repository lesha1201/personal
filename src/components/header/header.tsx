'use client';

import React, { useLayoutEffect, useState } from 'react';

import { Container, tclsx } from '@/lib/ui';
import { HeaderNavigation } from './header-navigation';

function isHeaderDistinct() {
  return window.scrollY > 0;
}

export function Header() {
  const [isDistinct, setIsDistinct] = useState(false);

  useLayoutEffect(() => {
    setIsDistinct(isHeaderDistinct());

    const onScroll = () => {
      setIsDistinct(isHeaderDistinct());
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={tclsx(
        'sticky top-0 z-20 flex h-16 border-b border-transparent bg-base-bg/60 backdrop-blur',
        isDistinct && 'border-base-border',
      )}
    >
      <Container className="flex">
        <HeaderNavigation />
      </Container>
    </header>
  );
}
