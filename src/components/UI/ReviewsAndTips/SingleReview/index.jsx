import { Container } from "@mui/material";
import BreadCrumbs from "components/UI/BreadCrumbs";
import cls from "./SingleReview.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import useKeyTranslation from "hooks/useKeyTranslation";
import LastNews from "components/UI/News/SingleNew/LastNews";
import { useReviewByIdQuery } from "services/reviews.service";
import { useNewsQuery } from "services/news.service";
import Comments from "components/UI/Comments";

const SingleReview = () => {
  const getKey = useKeyTranslation();
  const router = useRouter();
  const article_id = router.query?.id;

  const { data: news } = useNewsQuery(); //

  const { data, isLoading } = useReviewByIdQuery({
    params: {},
    id: article_id,
    queryParams: {
      enabled: !!article_id,
    },
  });

  const breadcrumbItems = [
    {
      link: "/",
      label: "Главная",
    },
    {
      link: "/reviews",
      label: "Обзоры и советы",
    },
    {
      link: "/single",
      label: data?.[getKey("title")],
    },
  ];

  return (
    <main className={cls.main}>
      <Container className={cls.container}>
        <BreadCrumbs items={breadcrumbItems} />{" "}
        <h1 className={cls.title}>{data?.[getKey("title")]}</h1>
        <div className={cls.wrap}>
          <div className={cls.leftSide}>
            <div className={cls.body}>
              <div className={cls.bannerImg}>
                <Image
                  src={data?.photo || `/images/no-photo.png`}
                  objectFit="cover"
                  layout="fill"
                  alt="img"
                />
              </div>
              <h3 className={cls.desc__title}>{data?.[getKey("title")]}</h3>
              <p
                className={cls.description}
                dangerouslySetInnerHTML={{
                  __html: data && data?.[getKey("short_description")],
                }}
              />
            </div>

            <Comments />
          </div>
          <div className={cls.rightSide}>
            <LastNews news={news} />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default SingleReview;
