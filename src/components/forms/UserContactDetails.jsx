import Input from "../ui/Input";
import { FormWrapper } from "./FormWrapper";

const UserContactDetails = ({firstName,lastName, contact, email, onChangeData}) => {
  return (
    <FormWrapper title="Contact Details">
      <Input
        id="firstname"
        type="text"
        label="First Name"
        name="firstName"
        value={firstName}
        autofocus
        required
        onChange={onChangeData}
      />
      <Input
        id="lastname"
        label="Last Name"
        type="text"
        name="lastName"
        value={lastName}
        onChange={onChangeData}
        required
      />
      <Input
        id="Contact"
        type="number"
        label="Contact No."
        name="contact"
        value={contact}
        onChange={onChangeData}
        required
      />
      <Input
        id="email"
        type="email"
        label="Email"
        name="email"
        value={email}
        onChange={onChangeData}
        required
      />
    </FormWrapper>
  );
};

export default UserContactDetails;
