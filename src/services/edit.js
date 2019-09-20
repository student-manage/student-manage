import request from "@/utils/request";

export let edit = params => {
  let url = "/emstu/student/addrecord";
  return request.put(url, params);
};
