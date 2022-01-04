import request from "@/plugins/axios";

// 战争信息获取
export function getMapPageData() {
  return request("/warInfo", "get");
}

// 当前年份战争信息
export function getWarData(year) {
  return request("/warTime", "get", { year });
}
