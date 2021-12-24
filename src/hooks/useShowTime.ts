export function useShowTime() {
  // 声明年，月，日，小时，分钟，秒的变量
  let month, day;
  // 声明时间对象
  const getdDate = new Date();
  // 获取date中的年
  const nowYear: number = getdDate.getFullYear();
  // 获取date中的月
  month = getdDate.getMonth() + 1;
  // 获取date中的日
  day = getdDate.getDate();
  // 判单位数
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (day >= 0 && day <= 9) {
    day = "0" + day;
  }
  return `${nowYear}年${month}月${day}日`;
}

export function winerYear() {
  const getDate = new Date();
  const winnerYear: number = getDate.getFullYear() - 1945;
  return winnerYear;
}
