import React from "react";
import Banner from "components/UI/Banners/Banner";
import cls from "./Home.module.scss";
import BannerImg from "components/UI/Banners/BannerImg";
import { installments, cars, appliances } from "./data";
import NewsList from "components/UI/NewsList";
import PopularBrands from "components/UI/PopularBrands";
import FeatureCategories from "components/UI/Products/FeatureCategories";
import FeatureProducts from "components/UI/Products/FeatureProducts";
import { Container } from "@mui/material";
import { useFeaturedListsQuery } from "services/featured-lists.service";
import { sortFunctionArr } from "utils/sortFunction";
import useKeyTranslation from "hooks/useKeyTranslation";
import { useRouter } from "next/router";
import TelegramLoginButton from "react-telegram-login";

function Home() {
  const router = useRouter();
  const getKey = useKeyTranslation();
  const { data: featuredLists } = useFeaturedListsQuery({
    data: {
      status: ["active"],
    },
  });

  const response = sortFunctionArr(featuredLists) || [];

  const handleTelegramResponse = (response) => {
    console.log(response);
    // Do something with the response
  };

  return (
    <main className={cls.main}>
      <TelegramLoginButton
        dataOnauth={handleTelegramResponse}
        botName="pragrafexample_bot"
      />
      <Container>
        {/* <Banner />
        {response.map((el) => (
          <WrapperComponent
            key={el.guid}
            data={el}
            title={el?.[getKey("name")]}
            type={el.type[0]}
          />
        ))}
        <NewsList /> */}
        {/* <PopularBrands /> */}
      </Container>
    </main>
  );
}

export default Home;

const WrapperComponent = ({ type, title, ...restProps }) => {
  if (type === "photo") return <BannerImg {...restProps} />;
  if (type === "category")
    return <FeatureCategories title={title} {...restProps} />;
  if (type === "product")
    return <FeatureProducts title={title} {...restProps} />;
};
