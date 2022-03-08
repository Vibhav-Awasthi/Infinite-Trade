const collectClass = (multiClass: [string]) => {
  let makeClass = "";
  multiClass?.forEach((cls: string) => makeClass + cls + " ");
  return makeClass;
};

const CommonFunction = {
  collectClass,
};

export default CommonFunction;
