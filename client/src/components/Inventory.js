// Import React
import React from 'react';

// Inventory Component
// function Inventory(dataFromApi) {
function Inventory() {

    // Get data from prop - dataFromApi
    // Map out each items returned into a table
    // Use all data that is returned

    // const inventoryData = dataFromApi.map((inventoryDatas) => (
    //     < tr >
    //         <td>{inventoryDatas.system_id}</td>
    //         <td>{inventoryDatas.system_name}</td>
    //         <td>{inventoryDatas.ip_address}</td>
    //         <td>{inventoryDatas.state}</td>
    //     </tr >
    // )
    // )

    return (
        <div>
            {/* {inventoryData} */}
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 text-center">
                    <tr>
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
                <tbody className="bg-white divide-y divide-gray-200 text-center">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            1
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Personal
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            192.168.100.100
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Active
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>


    )
}

// Export Inventory
export default Inventory;