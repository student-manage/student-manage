import request from "@/utils/request";

export let student = cid => {
  let url = "/emstu/student/lists";
  return request.get(url, cid);
};
