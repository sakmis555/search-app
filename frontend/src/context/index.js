import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const nullFn = () => null;

let initialLoanInfo = {
  loanId: "",
  businessId: "",
  customerId: "",
  secondOwnerId: "",
  personalDetails: null,
  secondOwnerDetails: null,
  businessDetails: null,
  loanDetails: null,
};

const CustomContext = createContext({
  loader: false,
  setLoader: nullFn,

  error: false,
  setError: nullFn,

  loanInfo: initialLoanInfo,
  setLoanInfo: nullFn,
});

export const useCustomContext = () => useContext(CustomContext);
const ContextProvider = ({ children }) => {
  const [loaderToggle, setLoaderToggle] = useState(false);
  const [errorToggle, setErrorToggle] = useState(false);
  const [loanInformation, setLoanInformation] = useState(initialLoanInfo);

  const setLoader = (bool) => setLoaderToggle(bool);
  const setError = (bool) => setErrorToggle(bool);
  const setLoanInfo = (newLoanInfo) => setLoanInformation(newLoanInfo);

  const value = useMemo(() => {
    return {
      loader: loaderToggle,
      setLoader,

      error: errorToggle,
      setError,

      loanInfo: loanInformation,
      setLoanInfo,
      initialLoanInfo,
    };
  }, [loaderToggle, errorToggle, loanInformation]);
  return (
    <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
  );
};

export default ContextProvider;
