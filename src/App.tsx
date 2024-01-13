
import Layout from './layouts/Layout'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Layout />} />
    //   </Routes>
    // </Router>
    <div className='bg-ce-white'>
      <Layout />
      <ToastContainer />
    </div>
  )
}

export default App
