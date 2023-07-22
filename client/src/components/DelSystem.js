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

export default function DelSystem({ checkboxState }) {
    // function DelSystem(checkboxState) {

    // States
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formState, setFormState] = useState({ system_id: '' });

    // Get system_id from prop - checkboxState
    console.log('this is checkboxState from DelSystem:', checkboxState)



    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const submitModal = async (event) => {
        event.preventDefault();
        // Send data to API
        // Send DELETE request to API
        try {
            const response = await fetch(`http://localhost:3001/api/systems/${checkboxState}`, {
                method: 'DELETE',

            });
            const jsonData = await response.json();
            console.log(jsonData);
        }
        catch (err) {
            console.error(err.message);
        }
        closeModal();
    }


    function handleChange(event) {
        // update formState
        setFormState({ ...formState, [event.target.id]: event.target.value });
    }


    return (
        <div>
            <button onClick={openModal} className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-36 m-1">Delete System</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h2 className="flex justify-center font-bold underline m-1 p-1">Confirmation</h2>
                <form className='px-8 pt-6 pb-8 mb-4'>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">
                            Are you sure you want to delete this system?
                        </label>
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
        </div>
    )
}