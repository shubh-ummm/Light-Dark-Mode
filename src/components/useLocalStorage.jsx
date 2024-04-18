import React, { useEffect, useState } from "react";
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.log("Error retrieving data from localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  }, [key, value]);
  console.log(value, setValue);
  return [value, setValue];
};

export default useLocalStorage;
