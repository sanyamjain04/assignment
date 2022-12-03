import React from "react";
import Input from "../ui/Input";
import { FormWrapper } from "./FormWrapper";

const UserFormDetails = ({bio, onChangeData, age}) => {
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
    </FormWrapper>
  );
};

export default UserFormDetails;
