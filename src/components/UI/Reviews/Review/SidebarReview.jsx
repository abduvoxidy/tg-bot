import React from "react";
import cls from "./SidebarReview.module.scss";
import CStar from "components/UI/CStars/CStar";
import MainButton from "components/UI/Buttons/MainButton";
import { useRouter } from "next/router";

function SidebarReview() {
  const router = useRouter();

  const percents = [
    {
      value: 75,
      grade: 5,
    },
    {
      value: 18,
      grade: 4,
    },
    {
      value: 2,
      grade: 3,
    },
    {
      value: 5,
      grade: 2,
    },
    {
      value: 1,
      grade: 0,
    },
  ];
  return (
    <div className={cls.sidebar}>
      <div className={cls.firstCard}>
        <div className={cls.header}>
          <CStar />
          <h3 className={cls.value}>4.7 / 5</h3>
        </div>
        <div className={cls.body}>
          <div className={cls.list}>
            {percents.map((el, i) => (
              <div key={i} className={cls.item}>
                <p className={cls.grade}>{el.grade}</p>
                <div className={cls.progress}>
                  <div
                    style={{
                      width: `${el.value}%`,
                    }}
                    className={cls.progressLine}
                  />
                </div>
                <p className={cls.percent}>{`${el.value}%`}</p>
              </div>
            ))}
          </div>
          <MainButton
            onClick={() => {
              router.push("/comments");
            }}
            className={cls.reviewBtn}
            fullWidth
          >
            Написать отзыв
          </MainButton>
        </div>
      </div>
      <div className={cls.secondCard}>
        <p className={cls.title}>По оценку 4 покупателей</p>
        <p className={cls.about}>Мнение о товаре</p>
        <div className={cls.itemProgress}>
          <div className={cls.titles}>
            <span>Рекомендую</span>
            <span>75%</span>
          </div>
          <div className={cls.progress}>
            <div
              style={{
                width: `${75}%`,
              }}
              className={cls.progressLine}
            />
          </div>
        </div>
        <div className={cls.itemProgress}>
          <div className={cls.titles}>
            <span>Не рекомендую</span>
            <span>15%</span>
          </div>
          <div className={cls.progress}>
            <div
              style={{
                width: `${15}%`,
              }}
              className={cls.progressLine}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarReview;
