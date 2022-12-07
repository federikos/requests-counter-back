export function getIp(headers) {
  return headers['x-forwarded-for'];
}

export function getBrowser(headers) {
  const userAgentString = headers['sec-ch-ua'];
  if (userAgentString.includes("Google Chrome")) {
    return "Chrome";
  }
  if (userAgentString.includes("Microsoft Edge")) {
    return "Edge";
  }
  if (userAgentString.includes("Firefox")) {
    return "Firefox";
  }
  return "Not recogrized"
}