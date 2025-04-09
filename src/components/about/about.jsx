import React from "react";
import {
  IoLogoDribbble,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

const About = () => {
  return (
    <section
      className="size-full px-6 py-10 pt-[150px] flex max-md:pt-[75px]"
      id="about"
    >
      <div className="w-full flex-[2] max-md:hidden"></div>

      <div className="w-full flex-[2] max-lg:flex-[3]">
        <h2 className="mb-6 several-txt">noi siamo</h2>
        <div className="max-w-[800px] w-full max-lg:max-w-full">
          <p className="about-txt">
            Un polo creativo dove i marchi e le persone si incontrano per
            esplorare la propria identità, affinare la visione e tracciare un
            futuro innovativo.
          </p>
          <br />
          <br />
          <p className="about-txt">
            Qui, le idee si trasformano in progetti concreti, creando
            connessioni che ispirano il cambiamento e la crescita. Un ambiente
            dove ogni collaboratore trova spazio per esprimere il proprio
            potenziale e contribuire a costruire qualcosa di unico e
            significativo.
          </p>
        </div>
        <div className="mt-12 flex items-center gap-8">
          <IoLogoFacebook className="text-[2.5rem] text-p" />

          <IoLogoInstagram className="text-[2.5rem] text-p" />

          <IoLogoLinkedin className="text-[2.5rem] text-p" />

          <IoLogoDribbble className="text-[2.5rem] text-p" />
        </div>
      </div>
    </section>
  );
};

export default About;
