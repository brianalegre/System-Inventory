// Import React
import React from 'react';


// Navbar Component
function Navbar() {
    return (
        <div className='flex justify-between py-5 bg-slate-800 '>
            <img src='' alt='logo' className='mx-10 h-6' />
            <p className='text-white font-oleo-script text-2xl mx-10'>Inventory</p>
            <img src='./images/wdLogo.png' alt='wdLogo' className='mx-10 h-10' />
        </div>
    )

}

// Export Navbar
export default Navbar;