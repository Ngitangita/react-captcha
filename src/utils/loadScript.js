import { getWAFEnv } from "./getWAFEnv";

export function loadScript() {
  if (document.getElementById("AwsWAFScript")) return;
  const AwsWafScript = document.createElement("script");
  AwsWafScript.id = "AwsWAFScript";
  AwsWafScript.async = false;
  let src = getWAFEnv().VITE_JSAPI_URL
  AwsWafScript.src = src;
  document.head.appendChild(AwsWafScript);
}
