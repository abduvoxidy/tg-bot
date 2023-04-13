import React from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import cls from "./Search.module.scss";
import { Container } from "@mui/material";
import ProductCardSkeleton from "../Loaders/ProductCardSkeleton";
import EmptyData from "../EmptyData";
import ProductCard from "components/UI/Cards/ProductCard";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import { productVariantsService } from "services/product-variants.service";
import { getResponse } from "utils/getResponse";
import SimpleLoader from "../Loaders/SimpleLoader";
import { useRef } from "react";

export function Search() {
  const router = useRouter();
  const { t, lang } = useTranslation("common");
  const { search_request } = router.query;
  const [products, setProducts] = useState([]);
  const [countProducts, setCountProducts] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const isFirstRender = useRef(true);
  const limit = 8;

  useEffect(() => {
    if (router.isReady) {
      fetchProducts();
    }
  }, [page, router.query]);

  const fetchProducts = async () => {
    try {
      const res = await productVariantsService
        .getList({
          limit,
          page,
          [`name_${lang}`]: search_request,
        })
        .then((res) => getResponse(res, true));
      const data = res.response;
      if (data) {
        if ((products.length || data.length) >= res.count) {
          setHasMore(false);
          return;
        } else {
          setCountProducts(+res.count);
          setProducts((prev) => [...prev, ...data]);
        }
      } else {
        setHasMore(false);
        setProducts([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      if (isFirstRender.current) {
        setIsLoading(false);
        isFirstRender.current = false;
      }
    }
  };

  const getNextItems = async () => {
    if (products.length >= countProducts) {
      setHasMore(false);
      return;
    }
    setPage((prev) => prev + 1);
  };

  return (
    <main className={cls.main}>
      <Container>
        {isLoading ? (
          <ProductCardSkeleton />
        ) : products && products.length > 0 ? (
          <InfiniteScroll
            dataLength={products.length}
            next={getNextItems}
            hasMore={hasMore}
            loader={<SimpleLoader className={cls.loader} />}
            endMessage={null}
            style={{ overflow: "hidden" }}
          >
            <div className={cls.row}>
              {products.map((el, index) => (
                <ProductCard
                  data={el}
                  zIndex={products.length - index}
                  key={index}
                />
              ))}
            </div>
          </InfiniteScroll>
        ) : (
          <EmptyData />
        )}
      </Container>
    </main>
  );
}
