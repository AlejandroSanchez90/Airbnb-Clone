'use client';

import Image from 'next/image';

type Props = {
  image?: string | null | undefined;
};

function Avatar({ image }: Props) {
  return (
    <Image
      className='rounded-full'
      width={30}
      height={30}
      src={image ? image : '/images/placeholder.jpg'}
      alt='Avatar'
    />
  );
}

export default Avatar;
