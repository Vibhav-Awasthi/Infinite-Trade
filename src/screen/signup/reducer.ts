import Utils from "../../Utils/index";
import { ProfileSelectorModel, SignupModel } from "../../model/index";

export const SignUpReducer = (
  state: SignupModel = new SignupModel(),
  action: any
) => {
  switch (action.type) {
    case Utils.ActionName.SIGNUP:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const profileSelectorReducer = (
  state: ProfileSelectorModel = new ProfileSelectorModel(),
  action: { [key: string]: any }
) => {
  switch (action.type) {
    case Utils.ActionName.PROFILESELECTOR: {
      return { ...state, ...action.payload };
    }
    default:
      return { ...state };
  }
};
