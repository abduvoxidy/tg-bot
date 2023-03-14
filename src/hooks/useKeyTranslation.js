import useTranslation from "next-translate/useTranslation";

const useKeyTranslation = () => {
  const { lang } = useTranslation();

  const getKey = (key) => `${key}_${lang}`;

  return getKey;
};

export default useKeyTranslation;
