import cls from "./Banner.module.scss";
import Image from "next/image";
import { SampleNextArrow, SamplePrevArrow } from "../../Arrows";
import Slider from "react-slick";
import { Container } from "@mui/material";
import MainButton from "../../Buttons/MainButton";

export default function Banner() {
  return (
    <div className={cls.root}>
      <Container>
        <Slider
          {...{
            dots: false,
            lazyLoad: true,
            nextArrow: <SampleNextArrow styles={cls.styleNext} />,
            prevArrow: <SamplePrevArrow styles={cls.stylePrev} />,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  dots: true,
                },
              },
            ],
          }}
        >
          <div className={cls.slideItem}>
            <div className={cls.box}>
              <div className={cls.left}>
                <h1 className={cls.title}>
                  Смартфоны в <br /> рассрочку
                </h1>
                <p className={cls.text}>Купить любимые смартфоны в рассрочку</p>
                <MainButton className={cls.btn}>Смотреть все</MainButton>
              </div>
              <div className={cls.right}>
                <div className={cls.first_img}>
                  <Image
                    src="/images/main/pencil-1.png"
                    alt="banner"
                    layout="fill"
                  />
                </div>
                <div className={cls.second_img}>
                  <Image
                    src="/images/main/ipad.png"
                    alt="banner"
                    layout="fill"
                  />
                </div>
                <div className={cls.third_img}>
                  <Image
                    src="/images/main/pencil-2.png"
                    alt="banner"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={cls.slideItem}>
            <div className={cls.box}>
              <div className={cls.left}>
                <h1 className={cls.title}>Смартфоны в рассрочку</h1>
                <p className={cls.text}>Купить любимые смартфоны в рассрочку</p>
                <MainButton className={cls.btn}>Смотреть все</MainButton>
              </div>
              <div className={cls.right}>
                <div className={cls.first_img}>
                  <Image
                    src="/images/main/pencil-1.png"
                    alt="banner"
                    layout="fill"
                  />
                </div>
                <div className={cls.second_img}>
                  <Image
                    src="/images/main/ipad.png"
                    alt="banner"
                    layout="fill"
                  />
                </div>
                <div className={cls.third_img}>
                  <Image
                    src="/images/main/pencil-2.png"
                    alt="banner"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
}
