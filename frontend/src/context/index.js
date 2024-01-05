import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const nullFn = () => null;

let initialUserInfo = {
  userId: "",
  avatarUrl: "",
  userName: "",
  name: "",
  description: "",
  followersCount: 0,
  followingCount: 0,
  followersUri: "",
  followingUrl: "",
  profileUrl: "",
};

const CustomContext = createContext({
  loader: false,
  setLoader: nullFn,

  error: false,
  setError: nullFn,

  userInfo: initialUserInfo,
  setUserInfo: nullFn,
});

export const useCustomContext = () => useContext(CustomContext);
const ContextProvider = ({ children }) => {
  const [loaderToggle, setLoaderToggle] = useState(false);
  const [errorToggle, setErrorToggle] = useState(false);
  const [userInformation, setUserInformation] = useState(initialUserInfo);

  const setLoader = (bool) => setLoaderToggle(bool);
  const setError = (bool) => setErrorToggle(bool);
  const setUserInfo = (newUserInfo) => setUserInformation(newUserInfo);

  const value = useMemo(() => {
    return {
      loader: loaderToggle,
      setLoader,

      error: errorToggle,
      setError,

      userInfo: userInformation,
      setUserInfo,
      initialUserInfo,
    };
  }, [loaderToggle, errorToggle, userInformation]);
  return (
    <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
  );
};

export default ContextProvider;
