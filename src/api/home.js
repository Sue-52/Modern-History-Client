import request from "@/plugins/axios";
// 首页信息获取
export function getHomePageData() {
  return request("/home", "get");
}
