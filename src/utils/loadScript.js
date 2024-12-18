import { getWAFEnv } from "./getWAFEnv";

export function loadScript() {
  if (document.getElementById("AwsWAFScript")) return;
  const AwsWafScript = document.createElement("script");
  AwsWafScript.id = "AwsWAFScript";
  AwsWafScript.async = false;
  AwsWafScript.src = getWAFEnv().VITE_JSAPI_URL;
  document.head.appendChild(AwsWafScript);
}
