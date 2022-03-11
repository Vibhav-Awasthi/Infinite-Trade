import { DropDownListsModel, LoadingModel } from "../model";
import Utils from "../Utils";

export const globalLoaderReducer = (
  state: LoadingModel = new LoadingModel(),
  action: any
) => {
  switch (action.type) {
    case Utils.ActionName.LOADING:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const dropDownReducer = (
  state: DropDownListsModel = new DropDownListsModel(),
  action: any
) => {
  switch (action.type) {
    case Utils.ActionName.SKILLS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
};
