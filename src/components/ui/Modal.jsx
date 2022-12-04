import Button from "./Button";

const Modal = ({ setShowModal, children }) => {
  return (
    <div className="absolute h-full w-screen bg-red-50 pb-4 overflow-y-scroll">
      <div className="relative p-5 border-2 border-violet-600 m-5 rounded-lg ">
        <Button
          className="absolute top-1 right-2"
          onClick={() => {
            setShowModal(false);
          }}
        >
          &#10005;
        </Button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
