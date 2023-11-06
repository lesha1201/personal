import dayjs from 'dayjs';
import Image, { StaticImageData } from 'next/image';
import plur from 'plur';
import React from 'react';

export type WorkExperienceJobProps = {
  company: string;
  companyImage?: StaticImageData | null;
  position: string;
  startDate: string;
  endDate?: string | null;
  description: string;
};

export function WorkExperienceJob({
  company,
  companyImage,
  position,
  startDate,
  endDate,
  description,
}: WorkExperienceJobProps) {
  const firstWorkDate = dayjs(startDate);
  const lastWorkDate = endDate ? dayjs(endDate) : dayjs();

  const workTotalMonths = lastWorkDate.diff(firstWorkDate, 'month') + 1;
  const workFullYears = Math.trunc(workTotalMonths / 12);
  const workFullMonths = workTotalMonths % 12;

  const workDurationText = [
    workFullYears > 0 ? `${workFullYears} ${plur('year', workFullYears)}` : '',
    workFullMonths > 0
      ? `${workFullMonths} ${plur('month', workFullMonths)}`
      : '',
  ].join(' ');

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 overflow-hidden rounded border border-base-border bg-base-surface">
          {companyImage && (
            <Image
              src={companyImage}
              alt={`${company} logo`}
              width={60}
              height={60}
              quality={90}
            />
          )}
        </div>
        <div>
          <div className="text-base font-semibold text-base-text-strong">
            {position}
          </div>
          <div className="text-sm text-base-text-weak">{company}</div>
        </div>
      </div>

      <div className="text-sm text-base-text-subtle">
        {firstWorkDate.format('MMM YYYY')} -{' '}
        {endDate ? lastWorkDate.format('MMM YYYY') : 'Present'} ⋅{' '}
        {workDurationText}
      </div>

      <div className="text-sm text-base-text-weak">{description}</div>
    </div>
  );
}
