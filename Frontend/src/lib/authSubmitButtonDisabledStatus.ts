const authSubmitButtonDisabledStatus = (
  isRegister: boolean,
  password: string,
  confirmPassword: string,
  isChecked: boolean,
  isLoading: boolean,
): boolean => {
  if (isLoading) return true;
  
  if (!isRegister) return false; // Return 'false' for Login Page.

  // Check for password match and checkbox tick for Register Page.
  if (
    password !== "" &&
    confirmPassword !== "" &&
    password === confirmPassword &&
    isChecked
  )
    return false;
  return true;
};

export default authSubmitButtonDisabledStatus;
