import { createAsComponent } from '../../utils/react';
import { Icon } from '../icon';

export const SunIcon = createAsComponent<typeof Icon>(
  function SunIcon(props, ref) {
    return (
      <Icon ref={ref} {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 3v2.25m6.36.39-1.59 1.59M21 12h-2.25m-.39 6.36-1.59-1.59M12 18.75V21m-4.77-4.23-1.6 1.6M5.26 12H3m4.23-4.77-1.6-1.6M15.76 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      </Icon>
    );
  },
);
