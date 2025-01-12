// import styled from 'styled-components';

// // קונטיינר לכל הטופס
// export const FormContainer = styled.form`
//   width: 100%;
//   max-width: 500px;
//   margin: 0 auto;
//   background-color: #fff;
//   padding: 30px;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// `;

// // עיצוב השדות
// export const InputField = styled.input`
//   padding: 12px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
//   color: #333;
//   outline: none;
//   transition: border-color 0.3s ease-in-out;

//   &:focus {
//     border-color: #3b82f6;
//   }

//   &::placeholder {
//     color: #999;
//   }
// `;

// // עיצוב כפתור השמירה
// export const SubmitButton = styled.button`
//   padding: 14px;
//   background-color: #3b82f6;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s ease-in-out;

//   &:hover {
//     background-color: #2563eb;
//   }
  
//   &:active {
//     background-color: #1d4ed8;
//   }
// `;



import styled from "styled-components";

// קונטיינר לכל הטופס
export const FormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// עיצוב השדות
export const InputField = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #3b82f6;
  }

  &::placeholder {
    color: #999;
  }
`;

// הודעות שגיאה
export const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
`;

// עיצוב כפתור השמירה
export const SubmitButton = styled.button`
  padding: 14px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #2563eb;
  }

  &:active {
    background-color: #1d4ed8;
  }
`;
