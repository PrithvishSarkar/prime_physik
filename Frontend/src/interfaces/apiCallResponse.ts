export default interface ApiCallResponseInterface {
  status: "success" | "failure";
  message: string;
}