import { useMultiForm } from "../hooks/useMultiForm";
import UserAddressDetails from "./forms/UserAddressDetails";
import BioForm from "./forms/BioForm";
import UserContactDetails from "./forms/UserContactDetails";
import { useState } from "react";
import Button from "./ui/Button";
import Modal from "./ui/Modal";

const Form = ({ userData }) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(userData);
  const { currentFormIndex, form, nextForm, prevForm, isLastForm } =
    useMultiForm([
      <UserContactDetails {...data} onChangeData={onChangeData} />,
      <UserAddressDetails {...data} onChangeData={onChangeData} />,
      <BioForm {...data} onChangeData={onChangeData} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();
    if (isLastForm) return nextForm();
    setShowModal(true);
  }
  function onChangeData(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="p-2 border-violet-900 rounded-lg flex flex-col border-2 min-h-[375px] max-w-sm"
      >
        {form}
        <div className="flex items-center mt-auto">
          {currentFormIndex !== 0 && (
            <Button type="Button" onClick={prevForm}>
              Back
            </Button>
          )}
          <Button type="submit" className="ml-auto">
            {isLastForm ? "Next" : "Preview"}
          </Button>
        </div>
      </form>
      {showModal && <UserProfile setShowModal={setShowModal} data={data} />}
    </div>
  );
};

const UserProfile = ({ setShowModal , data }) => {
  const {
    firstName,
    lastName,
    contact,
    email,
    address,
    city,
    state,
    zipcode,
    bio,
    age
  } = data;

  function handleSubmit() {
    localStorage.setItem("userData", JSON.stringify(data))
    setShowModal(false)
  }
  return (
    <Modal setShowModal={setShowModal} >
        <h1 className="sm:text-center text-lg font-semibold">User Profile Editor</h1>
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="underline font-semibold">Contact Details</h1>
            <p>Name: {firstName + " " +  lastName}</p>
            <p>Age : {age}</p>
            <p>Contact No. : {contact}</p>
            <p>Email Id : {email}</p>
          </div>
          <div className="flex gap-2" >
            <h1 className="underline font-semibold">Bio: </h1>
            <p>{bio}</p>
          </div>
          <div>
            <h1 className="underline font-semibold">Address Details</h1>
            <p>Address : {address}</p>
            <p>City : {city}</p>
            <p>State : {state}</p>
            <p>Zip Code : {zipcode}</p>
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
    </Modal>
  );
};

export default Form;
