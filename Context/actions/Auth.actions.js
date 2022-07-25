import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import baseURL from '../../assets/common/baseUrl';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const loginUser = (user, dispatch) => {
  fetch(`${baseURL}users/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('---------loginUser, fetch ok , data;', data);
      if (data) {
        const token = data.token;
        AsyncStorage.setItem('jwt', token);
        const decoded = jwt_decode(token);
        console.log(
          '---------loginUser, fetch ok  data ad will call setCurrentUser with decode:',
          decoded,
          'and user',
          user
        );
        dispatch(setCurrentUser(decoded, user));
      } else {
        console.log('---------loginUser, fetch ok without data');
        logoutUser(dispatch);
      }
    })
    .catch((err) => {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Please provide correct credentials',
        text2: '',
      });
      logoutUser(dispatch);
    });
  console.log('Auths.actions.js FINAL DE loginUser');
};

export const getUserProfile = (id) => {
  fetch(`${baseURL}users/${id}`, {
    method: 'GET',
    body: JSON.stringify(user),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const logoutUser = (dispatch) => {
  AsyncStorage.removeItem('jwt');
  dispatch(setCurrentUser({}));
};

export const setCurrentUser = (decoded, user) => {
  console.log(
    '-------Auth.action.js setCurrntUSer returns: type:',
    SET_CURRENT_USER,
    ' PAYLOAD ',
    decoded,
    'userProfile',
    user
  );
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
    userProfile: user,
  };
};
