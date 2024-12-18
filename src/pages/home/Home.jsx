import { useCaptcha } from "../../hooks";

export default function Home() {
     const captchaAxios = useCaptcha();
     const showCaptcha = () => {
        captchaAxios
          .get("https://jsonplaceholder.typicode.com/posts/1") 
          .then((response) => {
            console.log("API Response:", response.data);
          })
          .catch((error) => {
            console.error("Erreur Captcha ou autre :", error);
          });
      };


  return (
    <div>
      <button onClick={showCaptcha}>Afficher Capcha</button>
    </div>
  )
}
