import React from 'react'

function Estates() {
  return (
    <div className='col-12 estates-wrapper'>
        <div className='estate-container card p-3'>
            <div className='estates-top d-flex align-items-center justify-content-between'>
                <div className='left'>
                    <p>Estates Progress</p>
                    <p>Updated 21 minutes ago</p>
                </div>
                <div className='right'>
                    <button className='btn'>History</button>
                </div>
            </div>
            <table className='table'>
                <thead>
                    <th><tr>Item</tr></th>
                    <th><tr>Price</tr></th>
                    <th><tr>Progress</tr></th>
                    <th><tr>Status</tr></th>
                    <th><tr>Chart</tr></th>
                    <th><tr>View</tr></th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <div>
                            <img src="images/house1.jpg" alt="" />
                            <div>
                                <p className='estate-name'>Lushomo lodge</p>
                            </div>
                        </div>
                        </td>
                        <td><p>$32, 000</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Estates