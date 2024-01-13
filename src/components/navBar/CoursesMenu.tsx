import { FC, forwardRef } from 'react';

type Props = object;

const CoursesMenu: FC<Props> = forwardRef<HTMLElement, Props>(() => {
  return (
    <nav  className="w-full p-5 bg-ce-pink ">
        <div className='w-full px-40'> 
          <div className='grid max-w-full grid-cols-3 gap-4 w-fill'>
              <div className="w-full">
                  <div className='mb-5'>
                    <h2 className='mb-5 text-xl font-bold underline'>General English Beginner To Advance</h2>
                    {/* <p>Reading and Writing</p> */}
                    <p>Provided by Connect English Guest Lecture </p>
                    <p>Contact us for more information</p>
                    <p className='invisible'>xx</p>
                  </div>
                  
                  <div className='mb-5'>
                    <h2 className='mb-5 text-xl font-bold underline'>Conversational English Beginner To Advance</h2>
                    <p>Provided by Connect English Guest Lecture </p>
                    <p>Contact us for more information</p>
                    {/* <p>Coming soon...</p> */}
                  </div>

                  <div className='mb-5'>
                    <h2 className='mb-5 text-xl font-bold underline'>Engineering</h2>
                    <p>Coming Soon...</p>
                  </div>

              </div>
              <div className="w-full pl-10">
                  <div className='mb-5'>
                    <h2 className='mb-5 text-xl font-bold underline'>Business English Beginner To Advance</h2>
                    {/* <p>Customer service, telesales, relationship management, project management and management preparation.</p> */}
                    <p>Provided by Connect English Guest Lecture </p>
                    <p>Contact us for more information</p>
                    <p className='invisible'>xx</p>
                  </div>

                  <div className='mb-5'>
                    <h2 className='mb-5 text-xl font-bold underline'>Robotics</h2>
                    <p>Coming Soon...</p>
                    <p className='invisible'>xx</p>
                  </div>

                  <div className='mb-5'>
                    <h2 className='mb-5 text-xl font-bold underline'>Accounting</h2>
                    <p>Coming Soon...</p>
                  </div>
              </div>
              <div className="w-full">
                <div className='mb-5'>
                  <h2 className='mb-5 text-xl font-bold underline'>Individual Tailer Made Courses</h2>
                  <p>Allows you to decide what you wish to improve on</p>
                  <p>Provided by Connect English guest Lecture </p>
                  <p>Info Coming soon...</p>
                </div>
                <div className='mb-5'>
                  <h2 className='mb-5 text-xl font-bold underline'>Advanced Mathematics </h2>
                  <p>Coming Soon...</p>
                </div>
              </div>
          </div>
        </div>
    </nav>
  );
});

export default CoursesMenu;