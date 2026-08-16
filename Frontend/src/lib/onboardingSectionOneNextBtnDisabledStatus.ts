const onboardingSectionOneNextBtnDisabledStatus = (
  name: string,
  email: string,
  age: number | undefined,
  gender: "male" | "female" | "others" | undefined,
): boolean => {
  if (name === "" || email === "" || age === undefined || gender === undefined)
    return true;
  if (age < 10 || age > 90 || !["male", "female", "others"].includes(gender))
    return true;
  return false;
};

export default onboardingSectionOneNextBtnDisabledStatus;
