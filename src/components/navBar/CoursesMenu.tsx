import { FC, forwardRef } from 'react';

type Props = object;

const CoursesMenu: FC<Props> = forwardRef<HTMLElement, Props>(() => {
  return (
    <nav  className="">
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