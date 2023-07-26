import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export default function EditSystem({ checkboxState }) {

    // States
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formState, setFormState] = useState({ system_name: '', ip_address: '' });

    // Get system_id from prop - checkboxState
    console.log('this is system_id from EditSystem:', checkboxState)




    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const submitModal = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:3001/api/systems/${checkboxState}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    system_name: formState.system_name,
                    ip_address: formState.ip_address
                })

            });
            const jsonData = await response.json();
            console.log(jsonData);
        }
        catch (err) {
            console.error(err.message);
        }
        closeModal();
        // Refresh page
        window.location = '/inventory';
    }

    function handleChange(event) {
        // update formState
        setFormState({ ...formState, [event.target.id]: event.target.value });
    }

    return (
        <div>
            <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-36 m-1">Edit System</button>
            {checkboxState.length === 0 ? (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <h2 className="flex justify-center font-bold underline m-1 p-1">Edit System</h2>
                    <form className='px-8 pt-6 pb-8 mb-4'>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                You Must Select A System First!
                            </label>
                        </div>
                    </form>
                    <div className='flex justify-center'>
                        <button onClick={closeModal}
                            className="py-2.5 w-36 px-5 mr-2 mb-5 text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 transition duration-300">
                            OK</button>
                    </div>
                </Modal>
            ) : (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <h2 className="flex justify-center font-bold underline m-1 p-1">Edit System</h2>
                    <form className='px-8 pt-6 pb-8 mb-4'>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                System Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="system_name"
                                type="text"
                                placeholder="System Name"
                                onChange={handleChange}
                                value={formState.system_name} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                IP Address
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="ip_address"
                                type="text"
                                placeholder="IP Address"
                                onChange={handleChange}
                                value={formState.ip_address} />
                        </div>
                    </form>
                    <div className='flex justify-center'>
                        <button onClick={submitModal}
                            className="py-2.5 w-36 px-5 mr-2 mb-5 text-lg font-semibold focus:outline-none rounded-full text-center bg-green-300 hover:bg-green-700 text-black hover:text-gray-100 transition duration-300">
                            Confirm</button>
                        <button onClick={closeModal}
                            className="py-2.5 w-36 px-5 mr-2 mb-5 text-lg font-semibold focus:outline-none rounded-full text-center bg-red-300 hover:bg-red-700 text-black hover:text-gray-100 transition duration-300">Cancel</button>
                    </div>
                </Modal>
            )}
        </div>

    );
}

