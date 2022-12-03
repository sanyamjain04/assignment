import React from "react";
import Input from "../ui/Input";
import { FormWrapper } from "./FormWrapper";

const UserAddressDetails = ({ address, city, state, zipcode, onChangeData}) => {
  return (
    <FormWrapper title="Address Details">
      <Input
        id="address"
        type="text"
        name="address"
        label="Address"
        value={address}
        autofocus
        required
        onChange={onChangeData}
      />
      <Input
        id="city"
        type="text"
        name="city"
        label="City Name"
        value={city}
        required
        onChange={onChangeData}
      />
      <Input
        id="state"
        type="text"
        label="State Name"
        name="state"
        value={state}
        required
        onChange={onChangeData}
      />
      <Input
        id="zipCode"
        type="number"
        name="zipcode"
        label="Zip Code"
        value={zipcode}
        required
        onChange={onChangeData}
      />
    </FormWrapper>
  );
};

export default UserAddressDetails;
