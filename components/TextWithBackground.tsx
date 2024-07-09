import React from 'react';

const TextWithBackground = () => {
  return (
    <div className='container relative max-w-[1800px] mx-auto'>
      <div className='background'>
      <h1 className='absolute text-9xl font-semibold text-gray-900 w-full text-center'>Your<span className='font-bold'> Cards.</span> Your <span className='font-bold'>Rules.</span></h1>
      </div>
      <div className='foreground'>
      <h1 className=' absolute text-7xl font-semibold text-gray-300 right-0 top-0' >Your<span className='font-bold'> Cards.</span> Your <span  className='font-bold'>Rules.</span></h1>
      </div>
    </div>
  );
}

export default TextWithBackground;

/*style={{ left: '500px', top:'30px' }}*/


  