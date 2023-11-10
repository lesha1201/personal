import { createAsComponent } from '../../utils/react';
import { Icon } from '../icon';

export const MoonIcon = createAsComponent<typeof Icon>(
  function MoonIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21.75 15A9.75 9.75 0 0 1 9 2.25 9.75 9.75 0 1 0 21.75 15Z"
          />
        </svg>
      </Icon>
    );
  },
);
