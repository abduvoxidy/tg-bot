import React from "react";
import cls from "./FeatureCategories.module.scss";
import FeatureCategoryCard from "./Card";
import Link from "next/link";
import { useFeatureListCategoriesQuery } from "services/feature-list-categories.service";
import { sortFunctionArr } from "utils/sortFunction";

function FeatureCategories({ data, title, className = "" }) {
  const { data: featureCategories } = useFeatureListCategoriesQuery({
    data: {
      offset: 0,
      limit: 6,
      featured_lists_id: data.guid,
    },
    queryParams: {
      enabled: !!data.guid,
    },
  });
  const response = sortFunctionArr(featureCategories?.data?.response);

  return (
    <div className={`${cls.root} ${className}`}>
      {title && <h1>{title}</h1>}
      <div className={cls.row}>
        {response.map((el) => (
          <FeatureCategoryCard data={el?.category_id_data} key={el.guid} />
        ))}
      </div>
    </div>
  );
}

export default FeatureCategories;
