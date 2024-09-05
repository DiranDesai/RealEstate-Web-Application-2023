import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className='platform'>
                <img src="images/telephone-call.png" alt="" />
                <span>Call</span>
            </div>
            <div className='platform'>
                <img src="images/mail.png" alt="" />
                <span>Email</span>
            </div>
            <div className='platform'>
                <img src="images/whatsapp.png" alt="" />
                <span>WhatsApp</span>
            </div>
            <div className='platform'>
                <img src="images/world-wide-web.png" alt="" />
                <span>Website</span>
            </div>
        </div>
    </div>
  )
}

export default Footer
