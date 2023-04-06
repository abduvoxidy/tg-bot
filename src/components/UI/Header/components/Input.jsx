import React, { useEffect, useState } from "react";
import cls from "./styles.module.scss";
import {
  ArrowBottomIcon,
  SearchIcon,
  LocationIcon,
  CloseIcon,
} from "components/UI/Icons";
import { discountProductsQuery } from "services/discount.service";
import Link from "next/link";
import axios from "axios";
import useOnClickOutside from "hooks/useOnClickOutside";
import { useRef } from "react";

function Input() {
  // const { data } = discountProductsQuery({
  //   data: {},
  //   queryParams: {},
  // });

  const searchRef = useRef(null);

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useOnClickOutside(searchRef, () => setModalOpen(false));

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(wordEntered);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5"
      );
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className={cls.wrap}>
      <div className={cls.Input}>
        <input
          placeholder='Искать товары'
          type='text'
          // value={wordEntered}
          onChange={handleFilter}
          onClick={() => {
            setModalOpen(true);
          }}
          className={cls.input}
        />
        <div className={cls.searchBtn}>
          {filterData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon onClick={clearInput} />
          )}
        </div>
      </div>

      {/* {modalOpen && (
        <div ref={searchRef} className={cls.searchTab}>
          <div className={cls.searched}>
            <div className={cls.top}>
              <h3>Вы недавно искали</h3>
              <div className={cls.clearBtn}>Очистить</div>
            </div>
            <div className={cls.items}>
              {filterData?.map((el) => {
                return (
                  <Link href='#' key={el.id}>
                    <div className={cls.item}>{el.title}</div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className={cls.popular}>
            <div className={cls.top}>
              <h3>Популярные запросы</h3>
              <div className={cls.clearBtn}>Очистить</div>
            </div>
            <div className={cls.items}>
              {filterData?.map((el) => {
                return (
                  <Link href='#' key={el.id}>
                    <div className={cls.item}>{el.title}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Input;
