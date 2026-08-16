import type ApiCallResponseInterface from "./apiCallResponse";

export default interface AuthFormSubmitResponseInterface extends ApiCallResponseInterface {
  isAuthentic?: boolean;
  isOnboarded?: boolean;
}
