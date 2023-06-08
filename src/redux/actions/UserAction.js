export const addNewUser = (user) => async (dispatch, getState) => {
  debugger;
  try {
    dispatch({
      type: "ADD_NEW_USER",
      payload: user,
      //   payload: user == undefined ? [] : user,
    });
    // localStorage.setItem("usersList", JSON.stringify(user));
  } catch (error) {
    console.log("Error =", error);
  }
};

export const deleteUserAction = (id) => async (dispatch, getState) => {
  debugger;
  try {
    dispatch({
      type: "DELETE_THIS_USER",
      payload: id,
    });
  } catch (error) {
    console.log("Error =", error);
  }
};

export const updateUserAction = (user) => async (dispatch, getState) => {
  debugger;
  try {
    dispatch({
      type: "UPDATE_THIS_USER",
      payload: user,
    });
  } catch (error) {
    console.log("Error =", error);
  }
};

export const updateThisUserAction = (user) => async (dispatch, getState) => {
  debugger;
  try {
    dispatch({
      type: "UPDATE_THIS_EDITED_USER",
      payload: user,
    });
  } catch (error) {
    console.log("Error =", error);
  }
};
