// Import React
import React from 'react';

// Inventory Component
function Inventory(dataFromApi) {
    // Get data from prop - dataFromApi
    // Map out each items returned into a table
    // Use all data that is returned

    const inventoryData = dataFromApi.map((inventoryDatas) => (
        < tr >
            <td>{inventoryDatas.system_id}</td>
            <td>{inventoryDatas.system_name}</td>
            <td>{inventoryDatas.ip_address}</td>
            <td>{inventoryDatas.state}</td>
        </tr >
    )
    )

    return (
        <div>
            {inventoryData}
        </div>


    )
}

// Export Inventory
export default Inventory;