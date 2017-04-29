export interface SignupModel {
  userid: string;
  email: string;
  password: string;
  profile: {
    account: string;
    gender?: string;
  }
}
