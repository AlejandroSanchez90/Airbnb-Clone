'use client';
import { PuffLoader } from 'react-spinners';

type Props = {};

function Loader({}: Props) {
  return (
    <div className='h-[70vh] flex flex-col justify-center items-center'>
      <PuffLoader color='red' size={100} />
    </div>
  );
}

export default Loader;
