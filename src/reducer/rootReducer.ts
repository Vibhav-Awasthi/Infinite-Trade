import { LoadingModel } from "../model";
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