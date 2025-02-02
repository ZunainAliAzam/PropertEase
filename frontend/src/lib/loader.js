import apiRequests from "./apiRequests";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequests("/posts/" + params.id);
  return res.data;
};
