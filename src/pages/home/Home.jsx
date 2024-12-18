import { useCaptcha } from "../../hooks";

export default function Home() {
     const captchaAxios = useCaptcha();
     const showCaptcha = () => {
        console.log("SHOW CAPTCHA");
        
        captchaAxios
          .get("https://jsonplaceholder.typicode.com/posts/1") 
          .then((response) => {
            console.log("API Response:", response.data);
          })
          .catch((error) => {
            console.error("Erreur Captcha ou autre :", error);
          });

          captchaAxios.renderCaptcha().then((wafToken) => {
            console.log("CAPTCHA token reçu:", wafToken);
          }).catch((error) => {
            console.error("Erreur lors du rendu du CAPTCHA", error);
          });
      };


  return (
    <div>
      <button onClick={showCaptcha}>Afficher Capcha</button>
    </div>
  )
}
