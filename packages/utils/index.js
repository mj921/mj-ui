
/**
 * 数字逗号分隔
 * @param { number } num
 * @param { number } fiexdNum 保留小数位数
 * @param { boolean } onlyFiexd 小数超过时是四舍五入
 * @param { boolean } fiexdFlag 小数位数不足时是否补0
 */
export function numberSplit(
  num,
  fiexdNum = 2,
  onlyFiexd = false,
  fiexdFlag = true
) {
  if (/^-?\d+(\.\d+)?$/.test(num + "")) {
    num = +num;
    if (onlyFiexd) {
      num = num.toFixed(fiexdNum);
    }
    let flag = false;
    if (num < 0) {
      num = -num;
      flag = true;
    }
    const nums = (num + "").split(".");
    let str = nums[0]
      .split("")
      .reverse()
      .join("");
    for (let i = 3; i < str.length; i += 4) {
      str = str.substring(0, i) + "," + str.substring(i, str.length);
    }
    let fiexd = "";
    if (fiexdFlag) {
      if (fiexdNum > 0) {
        if (nums[1] && nums[1].length >= fiexdNum) {
          fiexd = "." + nums[1];
        } else {
          fiexd =
            "." +
            (nums[1] || "") +
            "000000000000000000000000000000000".substr(
              0,
              fiexdNum - (nums[1] || "").length
            );
        }
      }
    } else {
      fiexd = nums[1] ? "." + nums[1] : "";
    }
    return (
      (flag ? "-" : "") +
      str
        .split("")
        .reverse()
        .join("") +
      fiexd
    );
  } else {
    return num || "";
  }
}

export function addZero(n) {
  return n < 10 ? "0" + n : n + "";
}
export function dateFmt(date = new Date(), fmt = "yyyy-MM-dd") {
  if (!(date instanceof Date)) {
    if (typeof date === "number" || /^\d{1,}$/.test(date)) {
      date = new Date(date);
    } else {
      return date || "";
    }
  } else if (date.toString() === "Invalid Date") {
    return "";
  }
  const M = date.getMonth() + 1;
  const d = date.getDate();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  const obj = {
    yyyy: date.getFullYear(),
    yy: date.getYear(),
    MM: addZero(M),
    M: M,
    dd: addZero(d),
    d: d,
    HH: addZero(h),
    H: h,
    hh: addZero(h % 12),
    h: h % 12,
    mm: addZero(m),
    m: m,
    ss: addZero(s),
    s: s,
    S: date.getTime() % 1000
  };
  for (let key in obj) {
    fmt = fmt.replace(key, obj[key]);
  }
  return fmt;
}
