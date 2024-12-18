import { useCaptcha } from "../../hooks";

export default function Home() {
  const { renderCaptcha } = useCaptcha();

  const showCaptcha = () => {
    renderCaptcha()
      .then((wafToken) => {
        console.log("CAPTCHA token reçu:", wafToken);
      })
      .catch((error) => {
        console.error("Erreur lors du rendu du CAPTCHA", error);
      });
  };

  return (
    <div>
      <p>OOOOOOOOOOOOh Login with CAPTCHA</p>
      <button onClick={showCaptcha}>Afficher Capcha</button>
    </div>
  );
}
