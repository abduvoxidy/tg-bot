import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import cls from "./Inputs.module.scss";
import { CloseIcon } from "components/UI/Icons";
import { PlusIcon } from "components/UI/Icons";
import { useEffect } from "react";

function Inputs({ formState, setState }) {
  const { register, control, watch } = useForm({
    defaultValues: {
      [formState]: [{ comment: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: formState,
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, [formState]: fields }));
  }, [watch(formState)]);

  return (
    <div className={cls.root}>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <div className={cls.number}>{index + 1}</div>
              <div className={cls.input}>
                <input
                  key={item.id}
                  placeholder="Напишите здесь"
                  {...register(`${formState}.${index}.comment`)}
                />
                <span type="button" onClick={() => remove(index)}>
                  <CloseIcon />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <button
        className={cls.addBtn}
        type="button"
        disabled={fields.length === 5}
        onClick={() => {
          append({
            comment: "",
          });
        }}
      >
        <span>
          <PlusIcon />
        </span>{" "}
        Добавить ещё
      </button>
    </div>
  );
}

export default Inputs;
