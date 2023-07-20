// Import React
import React from 'react';

// Import AddSystem
import AddSystem from './AddSystem';
import DelSystem from './DelSystem';

// Navbar Component
function Navbar() {
    return (
        <div className='flex justify-between py-5 bg-slate-800 '>
            {/* <img src='' alt='logo1' className='mx-10 h-6' /> */}
            <p className='text-white font-oleo-script text-2xl mx-10'>Inventory</p>
            <AddSystem />
            <DelSystem />
            {/* <img src='' alt='logo2' className='mx-10 h-10' /> */}
        </div>
    )

}

// Export Navbar
export default Navbar;