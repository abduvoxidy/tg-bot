import React from "react";
import cls from "./CatalogBanner.module.scss";
import Image from "next/image";
import useKeyTranslation from "hooks/useKeyTranslation";
import { useCategoryBannersQuery } from "services/category.service";
import { useRouter } from "next/router";
import { BannerSkeleton } from "components/UI/Loaders/BannerSkeleton";

function CatalogBanner() {
  const router = useRouter();
  const getKey = useKeyTranslation();
  const category_id = router.query?.id;

  const { data, isLoading } = useCategoryBannersQuery({
    data: {
      category_id: [category_id],
    },
    queryParams: {
      enabled: !!category_id,
    },
  });

  const banner = data && data?.[0];

  if (isLoading) return <BannerSkeleton />;

  return (
    <div className={cls.root}>
      <div className={cls.left}>
        <h1>{banner?.[getKey("name")] || "Смартфоны в рассрочку"}</h1>
        <div
          className={cls.description}
          dangerouslySetInnerHTML={{
            __html:
              (banner && banner?.[getKey("description")]) ||
              "Купить любимые смартфоны в рассрочку",
          }}
        />
      </div>
      <div className={cls.right}>
        <div className={cls.img}>
          <Image
            src={(banner && banner.photo) || "/images/no-photo.png"}
            layout="fill"
            objectFit="contain"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
}

export default CatalogBanner;
