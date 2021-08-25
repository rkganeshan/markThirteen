import CheckPalindrome from "./CheckPalindrome";

const formatYmd = (date) => date.toISOString().slice(0, 10);

const checkPrevNext = (date) => {
  let prevPalindrome = formatYmd(new Date(date));
  let nextPalindrome = formatYmd(new Date(date));
  let calcPrev = new Date(date);
  let calcNext = new Date(date);

  while (true) {
    if (!CheckPalindrome(prevPalindrome)[0]) {
      calcPrev.setDate(calcPrev.getDate() - 1);
      prevPalindrome = formatYmd(calcPrev);
    } else {
      break;
    }

    if (!CheckPalindrome(nextPalindrome)[0]) {
      calcNext.setDate(calcNext.getDate() + 1);
      nextPalindrome = formatYmd(calcNext);
    } else {
      break;
    }
  }

  return [prevPalindrome, nextPalindrome];
};

export default checkPrevNext;
