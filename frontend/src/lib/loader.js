import { defer } from "react-router-dom";
import apiRequests from "./apiRequests";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequests("/posts/" + params.id);
  return res.data;
};

export const listPageLoaders = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiRequests("/posts?" + query);
  return defer({
    postResponse: postPromise,
  });
};
