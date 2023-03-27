import React from "react";
import cls from "./Answer.module.scss";
import { LikeBtnIcon } from "components/UI/Icons";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import Textarea from "components/UI/Forms/Textarea";
import MainButton from "components/UI/Buttons/MainButton";
import SubAnswer from "./SubAnswer";
import { formatDate } from "utils/formatDate";
import { useRouter } from "next/router";
import {
  useNewsCommentsCreateMutation,
  useNewsCommentsUpdateMutation,
} from "services/news.comments.service";
import { useQueryClient } from "react-query";

function Answer({
  data,
  isAnswer,
  isSubAnswer,
  subAnswer,
  answer,
  setIsAnswer,
  setAnswer,
  setIsSubAnswer,
  setSubAnswer,
  setAnswerId,
}) {
  const router = useRouter();
  const news_id = router.query.id;
  const queryClient = useQueryClient();

  const { mutate: createComment, isLoading: createLoading } =
    useNewsCommentsCreateMutation({
      onSuccess: (res) => {
        queryClient.refetchQueries(["GET_NEWS_COMMENTS"]);
        setAnswer("");
      },
    });

  const { mutate: updateComment, isLoading: updateLoading } =
    useNewsCommentsUpdateMutation({
      onSuccess: (res) => {
        queryClient.refetchQueries(["GET_NEWS_COMMENTS"]);
      },
    });

  const sendComment = (data) => {
    createComment({
      news_id,
      comment: answer,
      position_number: 1,
      name: "Test",
      user_photo: "",
      comments_id: data?.guid,
    });
  };

  return (
    <div className={cls.answer}>
      <div className={cls.answer__header}>
        <div className={cls.user}>
          <img className={cls.user__img} src="/images/user.jpg" alt="user" />
          <p className={cls.user__name}>{data?.name || "UserName"}</p>
        </div>
        <p className={cls.date}>{formatDate(data?.updated_date)}</p>
      </div>
      <div className={cls.answer__body}>
        <div>
          <p className={cls.comment}>{data?.comment}</p>
          <div className={cls.btns}>
            <div
              className={cls.btn}
              onClick={() => {
                updateComment({
                  guid: data?.guid,
                  like: data.like + 1,
                  news_id,
                });
              }}
            >
              <span>
                <LikeBtnIcon />
              </span>
              <p>{data?.like || 0}</p>
            </div>
            <div className={cls.btn}>
              <p
                onClick={() => {
                  setIsAnswer(data?.guid);
                }}
              >
                Ответить
              </p>
            </div>
          </div>
          {isAnswer === data?.guid && (
            <div className={cls.message}>
              <Textarea
                rows="3"
                placeholder="Напишите свой вопрос"
                className={cls.textarea}
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
              />
              <div className={cls.textAreaBtns}>
                <SecondaryButton
                  onClick={() => {
                    setAnswer("");
                    setIsAnswer("");
                  }}
                  className={cls.cancelBtn}
                >
                  Отмена
                </SecondaryButton>
                <MainButton
                  onClick={() => sendComment(data)}
                  disabled={!answer}
                  className={cls.sendBtn}
                >
                  Отправить
                </MainButton>
              </div>
            </div>
          )}
        </div>
        {
          data?.comment_count ? (
            <p
              onClick={() => setAnswerId(data?.guid)}
              className={cls.commentCount}
            >
              {data?.comment_count} answers
            </p>
          ) : null
          // data?.children?.map((el) => (
          //   <SubAnswer
          //     key={el.guid}
          //     data={el}
          //     subAnswer={subAnswer}
          //     setSubAnswer={setSubAnswer}
          //     isSubAnswer={isSubAnswer}
          //     setIsSubAnswer={setIsSubAnswer}
          //   />
          // ))
        }
      </div>
    </div>
  );
}

export default Answer;
