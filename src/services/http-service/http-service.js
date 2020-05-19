import { HttpMethod } from "./http-method";
import { resultHandler } from "./result-handler";

export function HttpService({
  base = "https://jsonplaceholder.typicode.com",
  url,
  data,
  headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    // Authorization: `Bearer ${getAccessToken()}`,
    // ClientType: "Web",
  },
  method = HttpMethod.GET,
}) {
  const fullUrl = url.startsWith("/") ? `${base}${url}` : `${base}/${url}`;

  const options = {
    method,
    headers,
    body: JSON.stringify(data),
  };

  return new Promise(async (resolve) => {
    try {
      const result = await fetch(fullUrl, options);
      const response = await result.json();

      console.log("result", result);
      console.log("response", response);

      return resolve(resultHandler({ result: response }));
    } catch (error) {
      console.log(`Failed response for ${url}: ${error}`);

      return resolve(resultHandler({ result: error }));
    }
  });
}
