// Import React
import React from 'react';

// import AddSystem from './AddSystem';
// import DelSystem from './DelSystem';
// import EditSystem from './EditSystem'
import Search from './Search'

// Navbar Component
function Navbar() {
    return (
        <div className='flex justify-between py-5 bg-slate-800 '>
            <p className='text-white font-oleo-script text-2xl mx-10'>Inventory</p>
            <Search />
        </div>
    )

}

// Export Navbar
export default Navbar;