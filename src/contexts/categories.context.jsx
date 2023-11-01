import { createContext, useEffect, useState } from "react";

import SHOP_DATA from "../shop-data";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.util";

export const CategoriessContext = createContext({
  categoryMap: {},
});

export const CategoriesProvider = ({ children }) => {
  useEffect(() => {
    // addCollectionAndDocuments("categories", SHOP_DATA);
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoryMap(categoryMap);
    };
    getCategories();
  }, []);
  const [categoryMap, setCategoryMap] = useState({});
  const value = { categoryMap };

  return (
    <CategoriessContext.Provider value={value}>
      {children}
    </CategoriessContext.Provider>
  );
};
