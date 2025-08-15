
import GoogleIcon from './google-icon-logo-svgrepo-com.svg'
import Xicon from './icons8-x.svg'
import './App.css'

export function Signup() {

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex justify-center text-2xl font-semibold">
          Create Your Account
        </div>

        <div className='flex gap-4 mb-6 mt-4'>
          <button className='flex items-center justify-center w-full py-3 border rounded-lg bg-white hover:bg-gray-100 transition cursor-pointer'>
            <img src={GoogleIcon} alt="Google logo" className='mr-2 w-5 h-8' />
            <span className='text-gray-700 font-semibold text-md'>Sign up with Google</span>
          </button>
          <button className="flex items-center justify-center w-full py-3 border rounded-xl bg-transparent hover:bg-gray-100 transition cursor-pointer">
            <img src={Xicon} alt="X icon" className='mr-2 2-5 h-8'/>
            <span className="text-gray-700 font-semibold text-md">Sign up with X</span>
          </button>
        </div>

        <div className='flex items-center'>
          <div className='flex-1 border-t border-gray-700'></div>
          <span className='mx-4 text-gray-700 font-medium'>or</span>
          <div className='flex-1 border-t border-gray-700'></div>
        </div>

        <div className=''>
          <div className="pt-5 space-y-4 flex flex-col">
          <label>Username<br />
            <input type="text" title="Username" name="Username" placeholder="xyz" className='border rounded-lg p-2 w-full mt-1' /></label>
          <label>Password <br />
            <input type="password" title="Password" name="Password" placeholder="**********" className='border rounded-lg p-2 w-full mt-1' />
          </label>
        </div>
        <div className="flex pt-6 w-full">
          <button className='w-full text-lg border rounded-lg bg-blue-600 cursor-pointer px-6 py-1 hover:bg-blue-500'>Create an account</button>
        </div>
        <div className='flex pt-2 text-sm'>
          <div>Already have an account?</div><div className='mx-1 text-blue-600 font-semibold'>Login Here</div>
        </div>
        </div>

      </div>
    </div>
  )
}
