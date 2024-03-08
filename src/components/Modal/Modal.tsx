import { ReactNode, memo } from "react";
import { IoIosClose } from "react-icons/io";
import ReactModal from "react-modal";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(30, 41, 59, 0.8)",
  },
  content: {
    opacity: "100%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%,-50%)",
    minWidth: "500px",
    backgroundColor: "#1D201F",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    borderColor: "#00040e",
    borderWidth: "2px",
  },
} as ReactModal.Styles;

type ModalProps = {
  isOpen: boolean;
  title?: string;
  handleClose: () => void;
  children: ReactNode;
};

const ModalBase = ({
  children,
  isOpen,
  title = "",
  handleClose,
}: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={modalStyles}
    >
      <div className="flex flex-col space-y-4 h-full">
        <div className="space-y-2 h-full">
          <div className="flex justify-between items-center">
            <div />
            {<span className="text-xl font-bold text-secondary">{title}</span>}
            <button onClick={handleClose}>
              <IoIosClose size={32} color={"#f3f4f6"} />
            </button>
          </div>
          <div className="w-full h-[1px] bg-gray-50" />
        </div>
        {children}
      </div>
    </ReactModal>
  );
};

export const Modal = memo(ModalBase);
