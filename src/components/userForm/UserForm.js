import React, { useState } from "react";
import {
  FormContainer,
  InputField,
  SubmitButton,
  ErrorMessage,
} from "./UserFormStyles";

const UserForm = ({ onSubmit, initialData = {} }) => {
  const [userData, setUserData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};

    if (!userData.username) {
      newErrors.username = "Username is required.";
    } else if (userData.username.length < 2) {
      newErrors.username = "Username must be at least 2 characters.";
    } else if (!/^[a-zA-Z\u0590-\u05FF\s]+$/.test(userData.username)) {
      newErrors.username = "Username can only contain letters and spaces.";
    }

    if (!userData.fullName) {
      newErrors.fullName = "Full Name is required.";
    } else if (userData.fullName.length < 2) {
      newErrors.fullName = "Full Name must be at least 2 characters.";
    } else if (!/^[a-zA-Z\u0590-\u05FF\s]+$/.test(userData.fullName)) {
      newErrors.fullName = "Full Name can only contain letters and spaces.";
    }

    if (!userData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!initialData._id && !userData.password) {
      newErrors.password = "Password is required.";
    } else if (userData.password && userData.password.length < 4) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      onSubmit(userData);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <InputField
          name="username"
          placeholder="Username"
          value={userData.username || ""}
          onChange={handleChange}
        />
        {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
      </div>
      <div>
        <InputField
          name="fullName"
          placeholder="Full Name"
          value={userData.fullName || ""}
          onChange={handleChange}
        />
        {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
      </div>
      <div>
        <InputField
          name="email"
          placeholder="Email"
          value={userData.email || ""}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </div>
      {!initialData._id && (
        <div>
          <InputField
            name="password"
            type="password"
            placeholder="Password"
            value={userData.password || ""}
            onChange={handleChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </div>
      )}
      <SubmitButton type="submit">Save</SubmitButton>
    </FormContainer>
  );
};

export default UserForm;
