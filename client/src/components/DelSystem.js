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

function DelSystem(checkboxState) {
    let subtitle;

    // States
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formState, setFormState] = useState({ system_id: '' });


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
        // Send data to API
        try {
            const response = await fetch('http://localhost:3001/api/systems/', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    system_name: formState.system_name,
                    ip_address: formState.ip_address
                })
            });
            const jsonData = await response.json();
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
        // Close Modal
        setIsOpen(false);
    }

    function handleChange(event) {
        // update formState
        setFormState({ ...formState, [event.target.id]: event.target.value });
    }


    return (
        <div>
            <button onClick={openModal} className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete System</button>
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
                            Are you sure you want to delete this system?
                        </label>
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

// Export Component
export default DelSystem