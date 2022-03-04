import request from "@/plugins/axios";

// 纪录片获取
export function getVideo() {
  return request("/video918", "get");
}
