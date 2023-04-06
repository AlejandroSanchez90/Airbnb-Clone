'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
type Props = {};

function Logo({}: Props) {
  const router = useRouter();
  return (
    <Image
      width={100}
      height={100}
      className='hidden md:block cursor-pointer'
      src='/images/logo.png'
      alt='Logo'
    />
  );
}

export default Logo;
