'use client';

import useCountdown from '@/hooks/useCountdown';

const TimeDuration = () => {
  const { days, hours, minutes, seconds } = useCountdown();
  return (
    <div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-4 sm:gap-x-0'>
      <div className='inline-flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 border-dashed px-3 py-2 font-bold text-white'>
        <span id='days' className='text-3xl'>
          {days}
        </span>
        <span className='text-base'>Days</span>
      </div>
      <div className='mx-4 hidden text-2xl font-bold text-white sm:block'>
        :
      </div>
      <div className='inline-flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 border-dashed px-3 py-2 font-bold text-white'>
        <span id='hours' className='text-3xl'>
          {hours}
        </span>
        <span className='text-base'>Hours</span>
      </div>
      <div className='mx-4 hidden text-2xl font-bold text-white sm:block'>
        :
      </div>
      <div className='inline-flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 border-dashed px-3 py-2 font-bold text-white'>
        <span id='minutes' className='text-3xl'>
          {minutes}
        </span>
        <span className='text-base'>Minutes</span>
      </div>
      <div className='mx-4 hidden text-2xl font-bold text-white sm:block'>
        :
      </div>
      <div className='inline-flex h-24 w-24 flex-col items-center justify-center rounded-lg border-2 border-dashed px-3 py-2 font-bold text-white'>
        <span id='seconds' className='text-3xl'>
          {seconds}
        </span>
        <span className='text-base'>Seconds</span>
      </div>
    </div>
  );
};

export default TimeDuration;
