import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Alert = ({ message, type, onClose }) => {
    const alertStyles = {
        success: "bg-green-100 border border-green-400 text-green-700",
        error: "bg-red-100 border border-red-400 text-red-700",
    };

    return (
        <div className={`p-4 mb-4 rounded ${alertStyles[type]} flex justify-between items-center`}>
            <div>{message}</div>
            <button onClick={onClose} className="text-lg ml-4">
                <FaTimes />
            </button>
        </div>
    );
};

export default Alert;
