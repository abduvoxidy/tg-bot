import React, { useState } from "react";
import cls from "./styles.module.scss";
import { SearchIcon } from "components/UI/Icons";
import useOnClickOutside from "hooks/useOnClickOutside";
import { useRef } from "react";
import useDebounce from "hooks/useDebounce";
import { useProductsQuery } from "services/products.service";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import useKeyTranslation from "hooks/useKeyTranslation";
import { ClearIcon } from "components/UI/Icons";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Input() {
  const { t, lang } = useTranslation("common");
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const debouncedSearchTerm = useDebounce(search, 500);
  const getKey = useKeyTranslation();
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);

  useOnClickOutside(searchRef, () => setModalOpen(false));

  const { data: products, isLoading } = useProductsQuery({
    data: {
      [`name_${lang}`]: debouncedSearchTerm,
    },

    queryParams: {
      enabled: !!debouncedSearchTerm,
      onSuccess: (res) => {
        setModalOpen(true);
      },
      select: (res) => res.response,
    },
  });

  useEffect(() => {
    setModalOpen(false);
    setSearch("");
  }, [router.query]);

  return (
    <>
      <div ref={searchRef} className={cls.root}>
        <div className={cls.input}>
          <input
            placeholder="Искать товары"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              console.log("input clicked");
            }}
          />
          {search && (
            <span
              className={cls.clear}
              onClick={() => {
                setSearch("");
              }}
            >
              <ClearIcon />
            </span>
          )}
        </div>

        <div className={cls.searchBtn}>
          {isLoading ? <CircularProgress size={18} /> : <SearchIcon />}
        </div>

        {modalOpen && (
          <div className={cls.searchMenu}>
            {products && products.length > 0 ? (
              products?.map((el) => (
                <Link href={`/product/${el?.[getKey("slug")]}`} key={el.guid}>
                  <a>{el?.[getKey("name")]}</a>
                </Link>
              ))
            ) : (
              <div className={cls.emptyBox}>
                <img src="/gif/searchEmpty.gif" alt="gif" />
              </div>
            )}
          </div>
        )}
      </div>
      <div className={`${modalOpen ? cls.grid : ""}`}></div>
    </>
  );
}

export default Input;
