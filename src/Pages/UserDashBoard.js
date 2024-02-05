import React from 'react';
import '../Style/TopSectionMain.css';
import '../Style/UserDashBoard.css';

function UserDashBoard(){
    return(
        <section className='h-100 w-100'>
            <div className='userdashboard-container w-100'>
                <div className='row'>
                    <div className='col top-section-main py-3'>
                        <h1 className='top-section-main-title px-3'>UserDashBoard</h1>
                    </div>                                                                                                     
                </div>
                <div className='row'>
                    <div className='col userdashboard-wrapper'>
                        <div className=''>
                            <h1>This is UserDashBoard</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserDashBoard;