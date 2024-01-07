import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = object

const ErrorPage:FC<Props> = () => {
  return (
    <div className='w-screen h-screen bg-ce-blue flex items-center justify-center'>
        <div>
            <h1 className='text-6xl text-ce-pink text-center'>404</h1>
            <p className='text-ce-white text-center mb-8'>Oops! Something is wrong.</p>
            <Link className='text-ce-white bg-ce-pink px-10 py-3 rounded-lg' to='/' > Go back in initial page, is better. </Link>
        </div>
    </div>
  )
}

export default ErrorPage