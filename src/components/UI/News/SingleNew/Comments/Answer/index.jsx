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
  useNewsCommentsQuery,
} from "services/news.comments.service";
import { useQueryClient } from "react-query";
import { useState } from "react";
import SimpleLoader from "components/UI/Loaders/SimpleLoader";

function Answer({ data }) {
  const router = useRouter();
  const news_id = router.query.id;
  const queryClient = useQueryClient();
  const [moreCommentId, setMoreCommentId] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerId, setAnswerId] = useState("");

  const {
    data: commentsData,
    refetch,
    isLoading,
  } = useNewsCommentsQuery({
    data: {
      news_id,
      view_fields: ["comments_id"],
      search: moreCommentId,
    },
    comments_id: moreCommentId === data.guid,
    queryParams: {
      enabled: true,
      onSuccess: (res) => {},
      select: (res) => res.response,
    },
  });

  const { mutate: updateComment, isLoading: updateLoading } =
    useNewsCommentsUpdateMutation({
      onSuccess: (res) => {
        queryClient.refetchQueries(["GET_NEWS_COMMENTS"]);
      },
    });

  const { mutate: createComment, isLoading: createLoading } =
    useNewsCommentsCreateMutation({
      onSuccess: (res) => {
        setAnswer("");
        updateComment({
          guid: data?.guid,
          comment_count: data.comment_count + 1,
          news_id,
        });
      },
    });

  const sendComment = () => {
    createComment({
      news_id,
      comment: answer,
      position_number: data.comment_count + 1,
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
                  setAnswerId(data?.guid);
                }}
              >
                Ответить
              </p>
            </div>
          </div>
          {answerId === data?.guid && (
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
                    setAnswerId("");
                  }}
                  className={cls.cancelBtn}
                >
                  Отмена
                </SecondaryButton>
                <MainButton
                  onClick={sendComment}
                  disabled={!answer}
                  className={cls.sendBtn}
                  loading={createLoading}
                >
                  Отправить
                </MainButton>
              </div>
            </div>
          )}
          {data?.comment_count ? (
            <p
              onClick={() => setMoreCommentId(data.guid)}
              className={cls.commentCount}
            >
              {data?.comment_count} answers
            </p>
          ) : null}
          {isLoading ? (
            <SimpleLoader />
          ) : (
            moreCommentId === data?.guid &&
            commentsData?.map((el) => (
              <SubAnswer key={el.guid} data={el} parentData={data} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Answer;
