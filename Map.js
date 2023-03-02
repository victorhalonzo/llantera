import React from "react";
import "../css/Map.css"

export function Map() {
  return (
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.6454320038032!2d-80.46534316369267!3d-1.0381083217662834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902bed63ef9eb6b7%3A0xa8f5cdd29b7c2267!2sLLANTERA%20GILER!5e0!3m2!1ses-419!2sec!4v1676566839683!5m2!1ses-419!2sec"
        width="600"
        height="450"
        
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
