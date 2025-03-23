import React, { useEffect } from 'react';

interface SuccessModalProps {
  message: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ message, onClose }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-4">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold text-dark-blue mb-2">Success</h2>
          <p className="text-gray-700 mb-6">{message}</p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-dark-blue text-white font-semibold py-2 px-6 rounded-md transition-colors hover:bg-blue-700"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
