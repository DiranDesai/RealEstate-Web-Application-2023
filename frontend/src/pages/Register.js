import React, {useState} from 'react'

function Register() {
  const [formData, setFormData] = useState({});

  const handleFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevForm) => {
      return {...prevForm, [name]: value}
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(123);
  }



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
            <h3 className='heading'>Create An Account</h3>
            <p>Already have account? <a href="#">Login</a></p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className='form-control' name='username' onChange={handleFormData} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" className='form-control' name='email' onChange={handleFormData} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' name='password1' onChange={handleFormData} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input type="password" className='form-control' name='password2' onChange={handleFormData} />
              </div>
              <div className='group-1'>
                <div>
                  <input type="checkbox" name="remember" />
                  <span>Keep me signed in</span>
                </div>
              </div>
              <button className='btn btn-primary btn-submit'>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>      
    </div>
  )
}

export default Register