import React, { FC, forwardRef } from 'react';

type Props = {};

const CoursesMenu: FC<Props> = forwardRef<HTMLElement, Props>((props, ref) => {
  return (
    <nav ref={ref} className="">
        <div className='w-[401px] max-w-full grid grid-cols-3 gap-4'>
            <div className="">
                <p>GENERAL ENGLISH</p>
            </div>
            <div>
                <p>PROFESSIONAL ENGLISH</p>
            </div>
            <div>HIGHER EDUCATION PROGRAMME</div>
        </div>
    </nav>
  );
});

export default CoursesMenu;