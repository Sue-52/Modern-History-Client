import request from "@/plugins/axios";

// 战争信息获取
export function getMapPageData() {
  return request("/warInfo", "get");
}
