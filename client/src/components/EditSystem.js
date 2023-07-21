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
    let subtitle;

    // States
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formState, setFormState] = useState({ system_name: '', ip_address: '' });

    // Get system_id from prop - checkboxState
    console.log('this is system_id from EditSystem:', checkboxState)


    
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
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
    }

    function handleChange(event) {
        // update formState
        setFormState({ ...formState, [event.target.id]: event.target.value });
    }


    return (
        <div>
            <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit System</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Confirmation</h2>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">
                            System Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="system_name"
                            type="text"
                            placeholder="System Name"
                            onChange={handleChange}
                            value={formState.system_name} />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">
                            IP Address
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="ip_address"
                            type="text"
                            placeholder="IP Address"
                            onChange={handleChange}
                            value={formState.ip_address} />
                    </div>
                </form>
                <div>
                    <button onClick={submitModal}>Confirm</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </Modal>
        </div>
    );
}

