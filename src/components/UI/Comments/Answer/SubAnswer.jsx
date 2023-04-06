import React from "react";
import cls from "./Answer.module.scss";
import { LikeBtnIcon } from "components/UI/Icons";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import Textarea from "components/UI/Forms/Textarea";
import MainButton from "components/UI/Buttons/MainButton";
import { formatDateTime } from "utils/formatDate";
import {
  useNewsCommentsCreateMutation,
  useNewsCommentsUpdateMutation,
} from "services/news.comments.service";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { useState } from "react";

function SubAnswer({ parentData, data }) {
  const [subAnswer, setSubAnswer] = useState("");
  const [isSubAnswer, setIsSubAnswer] = useState("");
  const router = useRouter();

  const news_id = router.query.id;
  const queryClient = useQueryClient();

  const { mutate: updateComment, isLoading: updateLoading } =
    useNewsCommentsUpdateMutation({
      onSuccess: (res) => {
        queryClient.refetchQueries(["GET_NEWS_COMMENTS"]);
      },
    });
  const { mutate: createComment, isLoading: createLoading } =
    useNewsCommentsCreateMutation({
      onSuccess: (res) => {
        setSubAnswer("");
        updateComment({
          guid: parentData?.guid,
          comment_count: parentData.comment_count + 1,
          news_id,
        });
      },
    });

  const sendComment = () => {
    createComment({
      news_id,
      comment: subAnswer,
      position_number: parentData.comment_count + 1,
      name: "Test",
      user_photo: "",
      comments_id: parentData?.guid,
    });
  };
  return (
    <div className={cls.subAnswer}>
      <div className={cls.answer__header}>
        <div className={cls.user}>
          <img className={cls.user__img} src='/images/user.jpg' alt='user' />
          <p className={cls.user__name}>{data?.name || "UserName"}</p>
        </div>
        <p className={cls.date}>{formatDateTime(data?.updated_date)}</p>
      </div>
      <div className={cls.answer__body}>
        <div>
          <p className={cls.comment}>{data?.comment}</p>
          <div className={cls.btns}>
            <div
              onClick={() => {
                updateComment({
                  guid: data?.guid,
                  like: data.like + 1,
                  news_id,
                });
              }}
              className={cls.btn}
            >
              <span>
                <LikeBtnIcon />
              </span>
              <p>{data?.like || 0}</p>
            </div>
            <div className={cls.btn}>
              <p
                onClick={() => {
                  setSubAnswer("");
                  setIsSubAnswer(data?.guid);
                }}
              >
                Ответить
              </p>
            </div>
          </div>
          {isSubAnswer === data?.guid && (
            <div className={cls.message}>
              <Textarea
                rows='3'
                placeholder='Напишите свой вопрос'
                className={cls.textarea}
                value={subAnswer}
                onChange={(e) => {
                  setSubAnswer(e.target.value);
                }}
              />
              <div className={cls.textAreaBtns}>
                <SecondaryButton
                  onClick={() => {
                    setSubAnswer("");
                    setIsSubAnswer("");
                  }}
                  className={cls.cancelBtn}
                >
                  Отмена
                </SecondaryButton>
                <MainButton
                  onClick={sendComment}
                  disabled={!subAnswer}
                  className={cls.sendBtn}
                  loading={createLoading}
                >
                  Отправить
                </MainButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubAnswer;
