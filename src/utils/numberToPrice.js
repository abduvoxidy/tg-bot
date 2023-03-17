export default function numberToPrice(number, soum = "сум") {
  if (number) {
    return `${number
      ?.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${soum}`;
  } else {
    return 0;
  }
}
