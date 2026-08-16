export default interface StateInterface {
  name: string;
  email: string;
  password: string;
  passwordType: "password" | "text";
  confirmPassword: string;
  isChecked: boolean;
}