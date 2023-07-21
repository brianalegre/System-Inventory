// Import React
import React, { useState } from 'react';
import AddSystem from './AddSystem';
import DelSystem from './DelSystem';
import EditSystem from './EditSystem'


export default function Inventory({ deviceInventory }) {


    // Inventory Component
    // function Inventory(dataFromApi) {
    // function Inventory(deviceInventory) {

    //     // Save prop data to variable

    //     console.log('deviceInventory: ', deviceInventory)

    //     // Get data from prop - deviceInventory
    //     // Map out each items returned into a table
    //     // Use all data that is returned

    // State for checkbox
    const [checkboxState, setCheckboxState] = useState([]);

    // Handle checkbox change
    const handleChange = (event) => {
        setCheckboxState(event.target.value);
        // Update checkboxState
        // setCheckboxState({ ...checkboxState, [event.target.id]: event.target.value });

        console.log('checkboxState: ', checkboxState)
    }

    const inventoryData = deviceInventory.map((item) => (

        <tbody className="bg-white divide-y divide-gray-200 text-center">
            <tr key='system_id'>
                <td className="px-6 py-4 whitespace-nowrap" data-id={item.system_id}>
                    <input type="checkbox"
                        value={item.system_id}
                        className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onChange={handleChange}

                    />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {item.system_id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {item.system_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {item.ip_address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {item.state}
                </td>
            </tr>
        </tbody >
    ))


    return (
        <div>
            <div className='flex'>
                <AddSystem />
                <EditSystem checkboxState={checkboxState} />
                <DelSystem checkboxState={checkboxState} />
            </div>
            <div>
                {/* {inventoryData} */}
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 text-center">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Select
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                System ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                System Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                IP Address
                            </th>
                            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                State
                            </th>
                        </tr>
                    </thead>
                    {/* center data */}
                    {inventoryData}
                </table>
            </div>
        </div >


    )
}

// // Export Inventory
// export default Inventory;