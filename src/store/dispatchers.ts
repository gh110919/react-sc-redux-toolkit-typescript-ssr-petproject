import { AppDispatch, rootAction } from ".";
// главный диспетчер
export const dispatchers = {
  exampleDispatch: (data: number) => {
    return (dispatch: AppDispatch) => {
      dispatch(rootAction.exampleAction.exampleMethod(data));
    };
  },
};
