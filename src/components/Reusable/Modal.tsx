"use client";

import React from "react";
import { TbX } from "react-icons/tb";

interface GeneralModalProps {
    close: () => void;
    handleClose: () => void;
    content: React.ReactNode;
}

const GeneralModal: React.FC<GeneralModalProps> = ({ close, handleClose, content }) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-[500] modal-overlay w-full overflow-y-scroll`}
        >
            <div
                onClick={handleClose}
                className={`modal  fixed inset-0 flex items-center justify-center`}
            >
                <div
                    className={`modal-content backdrop-blur-sm border-[#FCEE21] border-[2px] w-[95%] rounded-xl overflow-y-auto transform transition-transform duration-300 ease-in-out bounce`}
                >
                    <div className="flex p-6 items-center justify-end">
                        <span
                            onClick={close}
                            className="text-xl cursor-pointer text-[var(--text-color)]"
                        >
                            <button className="w-[20px] h-[20px] bg-[#FCEE21] rounded-md">
                                <TbX />
                            </button>
                        </span>
                    </div>
                    <div className="px-6 pb-6 overflow-y-auto">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralModal;
