import React from "react";
import cls from "./FeatureCategories.module.scss";
import FeatureCategoryCard from "./Card";
import Link from "next/link";
import { useFeatureListCategoriesQuery } from "services/feature-list-categories.service";
import { sortFunctionArr } from "utils/sortFunction";
import CategoryCardSkeleton from "components/UI/Loaders/CategoryCardSkeleton";

function FeatureCategories({ data, title, className = "" }) {
  const { data: response, isLoading } = useFeatureListCategoriesQuery({
    data: {
      offset: 0,
      limit: 6,
      featured_lists_id: data.guid,
    },
    queryParams: {
      onSuccess: (res) => {},
      enabled: !!data.guid,
    },
  });

  const featureCategories = response && response.length > 0 ? response : [];

  if (isLoading) return <CategoryCardSkeleton />;

  return (
    <div className={`${cls.root} ${className}`}>
      {title && <h1>{title}</h1>}
      <div className={cls.row}>
        {sortFunctionArr(featureCategories).map((el) => (
          <FeatureCategoryCard data={el?.category_id_data} key={el.guid} />
        ))}
      </div>
    </div>
  );
}

export default FeatureCategories;
