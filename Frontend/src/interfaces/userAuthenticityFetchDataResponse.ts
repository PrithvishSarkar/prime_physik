import type ApiCallResponseInterface from "./apiCallResponse";

export default interface UserAuthenticityFetchDataResponseInterface extends ApiCallResponseInterface {
  data?: { isAuthentic: boolean; isOnboarded: boolean };
}
