'use client';

import Image from 'next/image';

type Props = {};

function Avatar({}: Props) {
  return (
    <Image
      className='rounded-full'
      width={30}
      height={30}
      src='/images/placeholder.jpg'
      alt='Avatar'
    />
  );
}

export default Avatar;
