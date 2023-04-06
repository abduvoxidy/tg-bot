import cls from "./Banner.module.scss";
import Image from "next/image";
import { SampleNextArrow, SamplePrevArrow } from "../../Arrows";
import Slider from "react-slick";
import MainButton from "components/UI/Buttons/MainButton";
import { useBannersQuery } from "services/banner.service";
import SliderControls from "./Controls";
import useKeyTranslation from "hooks/useKeyTranslation";
import { BannerSkeleton } from "components/UI/Loaders/BannerSkeleton";
import { useState } from "react";

export default function Banner() {
  const getKey = useKeyTranslation();
  const [imageLoader, setImageLoader] = useState(true);
  const { data: banners, isLoading } = useBannersQuery({
    data: {
      offset: 0,
      status: ["active"],
    },
    queryParams: {
      enabled: true,
    },
  });

  if (isLoading) return <BannerSkeleton height={336} />;

  return (
    <div id="bannerSlider" className={`${cls.root}`}>
      <Slider
        lazyLoad={true}
        dots={true}
        infinite={true}
        adaptiveHeight={true}
        autoplay={true}
        autoplaySpeed={2000}
        customPaging={() => <span className={cls.sliderDots}></span>}
        appendDots={(dots) => <SliderControls dots={dots} />}
        {...{
          nextArrow: <SampleNextArrow styles={cls.styleNext} />,
          prevArrow: <SamplePrevArrow styles={cls.stylePrev} />,
        }}
      >
        {banners &&
          banners?.map((el, i) => (
            <div key={i} className={cls.slideItem}>
              <div className={cls.box}>
                <div className={cls.left}>
                  <h1 className={cls.title}>{el?.[getKey("name")]}</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: el?.[getKey("description")],
                    }}
                    className={cls.text}
                  />
                  <MainButton
                    onClick={() => {
                      if (el.url) {
                        window.open(el.url, "_blank");
                      }
                    }}
                    className={cls.btn}
                  >
                    {el?.[getKey("button_text")]}
                  </MainButton>
                </div>
                <div className={cls.right}>
                  <div className={cls.img}>
                    {el?.photo && (
                      <>
                        <Image
                          onLoadingComplete={() => {
                            setImageLoader(false);
                          }}
                          src={el?.photo}
                          placeholder="blur"
                          blurDataURL="/images/skeleton.webp"
                          alt="banner"
                          layout="fill"
                          objectFit="contain"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}
