import Button from "./Button";

const Modal = ({ setShowModal, children }) => {
  return (
    <div className="absolute h-screen w-screen bg-red-50">
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
