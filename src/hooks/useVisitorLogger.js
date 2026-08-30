import { useEffect } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const useVisitorLogger = () => {
  useEffect(() => {
    const logVisitor = async () => {
      if (sessionStorage.getItem("visited")) return;

      try {
        const response = await fetch("https://ipwho.is/");
        const ipData = await response.json();

        // 1. Generate a unique ID using standard Web Crypto API
        const customId = `visit_${Date.now()}_${crypto.randomUUID()}`;

        const visitorPayload = {
          id: customId,
          ip: ipData.ip || "Unknown",
          city: ipData.city || "Unknown",
          region: ipData.region || "Unknown",
          country: ipData.country_name || "Unknown",
          org: ipData.org || "Unknown",
          userAgent: navigator.userAgent,
          language: navigator.language,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          referrer: document.referrer || "Direct Visit",
          timestamp: serverTimestamp(),
        };

        // 2. Write using setDoc instead of addDoc
        await setDoc(doc(db, "visitor_logs", customId), visitorPayload);
        sessionStorage.setItem("visited", "true");
      } catch (error) {
        console.error("Failed to log visitor data:", error);
      }
    };

    logVisitor();
  }, []);
};
