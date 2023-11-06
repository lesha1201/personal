import React from 'react';

import { Container } from '@/lib/ui';

export type PageContainerProps = {
  children: React.ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <Container as="main" className="pb-32">
      {children}
    </Container>
  );
}
