import  { FC } from 'react'

type Props = object

const AdditionalServicesMenu:FC<Props> = () => {
  return (
    <nav  className="w-full  bg-ce-pink p-5">
        <div className='w-full px-40'> 
          <div className='grid max-w-full grid-cols-2 gap-4 w-fill'>
              <div className="w-full">
                  <div className='mb-5'>
                    <h2 className='mb-5 text-xl font-bold underline'>International Life Coaching </h2>
                    <p>Coming soon</p>
                  </div>
              </div>
              <div className="w-full">
                <div className='mb-5'>
                    <h2 className='mb-5 text-xl font-bold underline'>Business Analytics </h2>
                    <p>Coming soon...</p>
                  </div>
              </div>
              <div className="w-full">
                <div className='mb-5'>
                    <h2 className='mb-5 text-xl font-bold underline'>Contact Center Consulting </h2>
                    <p>Coming Soon...</p>
                  </div>
              </div>
              <div className="w-full">
                <div className='mb-5'>
                    <h2 className='mb-5 text-xl font-bold underline'>IT Support</h2>
                    <p>Coming Soon...</p>
                  </div>
              </div>

              <div className="w-full">
                <div className='mb-5'>
                    <h2 className='mb-5 text-xl font-bold underline'>Website Development </h2>
                    <p>Coming Soon...</p>
                  </div>
              </div>
          </div>
        </div>
    </nav>
  )
}

export default AdditionalServicesMenu