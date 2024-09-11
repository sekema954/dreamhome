
function Login() {
  return (
    <div className='flex flex-col md:flex-row'>
      {/* Image Section */}
      <div className='flex-1 bg-gray-200 flex items-center justify-center'>
        <img
          className='object-cover w-full h-full'
          src='https://via.placeholder.com/800x600.png?text=Your+Image+Here'
          alt='Login Illustration'
        />
      </div>

      {/* Form Section */}
      <div className='flex-1 flex items-center justify-center p-6 md:p-12'>
        <div className='w-full max-w-md bg-white rounded-lg shadow-md p-8'>
          <h2 className='text-2xl font-bold mb-6 text-center text-gray-700'>
            Login to Your Account
          </h2>

          <form>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                id='email'
                placeholder='Enter your email'
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                Password
              </label>
              <input
                type='password'
                id='password'
                placeholder='Enter your password'
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>

            <div className='flex items-center justify-between mb-6'>
              <button
                type='submit'
                className='w-full py-2 px-4 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800 transition duration-300'
              >
                Login
              </button>
            </div>

            <p className='text-center text-gray-600'>
              Don't have an account?{' '}
              <a href='/register' className='text-green-700 hover:underline'>
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
