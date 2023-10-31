import { CategoriessContext } from "../../contexts/categories.context";
import { Fragment, useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";
const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriessContext);
  return (
    <>
      {Object.keys(categoryMap).map((c) => {
        const products = categoryMap[c];
        return <CategoryPreview key={c} products={products} title={c} />;
      })}
    </>
  );
};

export default CategoriesPreview;
