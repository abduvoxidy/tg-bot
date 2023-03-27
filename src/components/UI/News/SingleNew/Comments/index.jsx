import React from "react";
import cls from "./Comments.module.scss";
import Textarea from "components/UI/Forms/Textarea";
import MainButton from "components/UI/Buttons/MainButton";
import { useState } from "react";
import {
  useNewsCommentsQuery,
  useNewsCommentsCreateMutation,
  useNewsCommentsUpdateMutation,
} from "services/news.comments.service";
import { useRouter } from "next/router";
import { getNestedData } from "utils/getNestedData";
import Answer from "./Answer";
import { TextSkeleton } from "components/UI/Loaders/TextSkeleton";

function Comments() {
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState("");

  const [answerId, setAnswerId] = useState("");

  const router = useRouter();
  const news_id = router?.query?.id;
  const [comments, setComments] = useState([]);

  const {
    data: commentsData,
    refetch,
    isLoading,
  } = useNewsCommentsQuery({
    data: {
      news_id,
    },
    queryParams: {
      onSuccess: (res) => {
        // const response = getNestedData(
        //   { guid: null },
        //   res?.response,
        //   "comments_id"
        // );
        const data = res.response.filter((el) => !el.comments_id);
        setComments(data);
      },
    },
  });

  const { mutate: createComment, isLoading: createLoading } =
    useNewsCommentsCreateMutation({
      onSuccess: (res) => {
        refetch();
        setValue("");
      },
    });

  const sendComment = () => {
    createComment({
      news_id,
      comment: value,
      position_number: commentsData?.count + 1,
      name: "Test",
      user_photo: "",
    });
  };

  return (
    <div className={cls.comments}>
      <div className={cls.comments__header}>
        <h3 className={cls.title}>Написать комментарий</h3>
        <p className={cls.description}>
          Вам ответит продавец либо другие пользователи. Пришлем уведомление,
          когда поступит ответ
        </p>
        <div className={cls.message}>
          <Textarea
            rows="3"
            placeholder="Напишите свой вопрос"
            className={cls.textarea}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <MainButton
            onClick={sendComment}
            disabled={!value}
            className={cls.sendBtn}
          >
            Отправить
          </MainButton>
        </div>
      </div>
      <div className={cls.comments__body}>
        {isLoading ? (
          <TextSkeleton />
        ) : (
          comments.map((el) => (
            <Answer
              key={el.guid}
              data={el}
              setAnswer={setAnswer}
              answer={answer}
              // subAnswer={subAnswer}
              // setSubAnswer={setSubAnswer}
              // isSubAnswer={isSubAnswer}
              // setIsSubAnswer={setIsSubAnswer}
              setAnswerId={setAnswerId}
              answerId={answerId}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Comments;
