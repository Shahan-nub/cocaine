"use client"
import { useEffect } from "react";

export default function page() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
        script.async = true;
        script.onload = () => {
          window.botpressWebChat.init({
            botId: "d10e318e-eaf8-469b-82e3-dd4fb3eedb86",
            clientId:  "d10e318e-eaf8-469b-82e3-dd4fb3eedb86",
            hostUrl: "https://cdn.botpress.cloud/webchat/v1",
            messagingUrl: "https://messaging.botpress.cloud",
            botName: "TSSbot",
            hideWidget: true,
            disableAnimations: false,
            
          });
          window.botpressWebChat.onEvent(() => {
            window.botpressWebChat.sendEvent({ type: "show" });
          }, ["LIFECYCLE.LOADED"]);
        };
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <div className="w-[40%] mx-auto">
      
    </div>
  )
}
