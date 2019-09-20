import request from "@/utils/request";

export let grade = cid => {
  let url = "/emstu/student/recordlists";
  return request.get(url, cid);
};
