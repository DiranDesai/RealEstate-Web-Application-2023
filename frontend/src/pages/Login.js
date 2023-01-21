import React from 'react'

function Login() {
  return (
    <div className='form-wrapper mt-5'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div>
              <img src="images/signin.svg" alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h3 className='heading'>Welcome Back</h3>
              <p>New here? <a href="#">Create an Account</a></p>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" className='form-control' />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className='form-control' />
                </div>
                <div className='group-1'>
                  <div>
                    <input type="checkbox" name="remember" />
                    <span>Remember me?</span>
                  </div>
                  <div>
                    <a href="#">Forgot password</a>
                  </div>
                </div>
                <button className='btn btn-primary btn-submit'>Login</button>
              </form>
            </div>
          </div>
        </div>
        
      </div>      
    </div>
  )
}

export default Login