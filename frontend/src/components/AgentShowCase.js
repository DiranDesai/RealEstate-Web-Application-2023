import React from 'react'

function AgentShowCase() {
  return (
    <div className="agent-showcase">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4 showcase-img-container">
                    <img src="images/agent1.png" alt="" />
                </div>
                <div className="col-md-8">
                <div className="content">
                        <h2>Become a Real Estate Agent today</h2>
                        <p>We only work with the best companies around the globe Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                        <button className="btn register-btn">Register Now <i class="bi bi-box-arrow-in-right"></i></button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AgentShowCase