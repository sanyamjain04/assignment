import React, { useRef } from "react";
import { fileReader } from "../../utils/fileReader";
import Input from "../ui/Input";
import { FormWrapper } from "./FormWrapper";

const UserFormDetails = ({ bio, onChangeData, age, userImage, setData }) => {
  return (
    <FormWrapper title="Bio Details">
      <Input
        id="bio"
        type="text"
        name="bio"
        label="Bio"
        value={bio}
        autofocus
        required
        onChange={onChangeData}
      />
      <Input
        id="email"
        type="number"
        label="Age"
        name="age"
        value={age}
        required
        onChange={onChangeData}
      />
      <Image setData={setData} userImage={userImage} />
    </FormWrapper>
  );
};

const Image = ({ setData, userImage }) => {
  const imageRef = useRef();
  const changeImage = async(e) => {
      const base64Image = await fileReader(e)
      setData((prev) => ({ ...prev, userImage: base64Image }));
  };
  const removeImage = () => setData((prev) => ({ ...prev, userImage: "" }));

  return (
    <>
      <button
        onClick={() => imageRef?.current?.click()}
        type="button"
        className="flex gap-2 p-2"
      >
        <h1> Upload Image</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </button>

      <input
        type="file"
        id="file"
        name="userImage"
        ref={imageRef}
        label="User Profile"
        onChange={changeImage}
        className="sr-only"
      />

      {userImage && (
        <div className="relative max-w-max">
          <button
            type="button"
            className="absolute w-8 h-8 -top-3 -right-6"
            onClick={removeImage}
          >
            &#10005;
          </button>
          <img
            src={userImage}
            alt=""
            className="max-w-[100px] max-h-[100px] object-contain"
          />
        </div>
      )}
    </>
  );
};

export default UserFormDetails;
