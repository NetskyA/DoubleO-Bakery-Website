import React from 'react';

const DialogDelete = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center mx-auto z-50">
            <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Konfirmasi Hapus</h2>
                <p className="text-gray-600 mb-6 text-center">Apakah Anda yakin menghapus item ini?</p>
                <div className="flex mx-auto justify-center space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 w-full bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 w-full bg-primary text-white rounded-lg hover:bg-second"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DialogDelete;
