export const windowScrollTo = (selector, yOffset = -105) => {
  if (typeof window !== "undefined") {
    const el = document.querySelector("#" + selector);
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y });
  }
};
