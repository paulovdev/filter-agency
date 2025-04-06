import React from "react";

const About = () => {
  return (
    <section
      className="size-full px-6 py-10 pt-[150px] flex max-md:pt-[50px]"
      id="about"
    >
      <div className="w-full flex-[2] max-md:hidden"></div>

      <div className="w-full flex-[2]">
        <h2 className="mb-6 text-[1rem] font-[600] uppercase">noi siamo</h2>
        <div className="max-w-[800px] ">
          <p className="text-[3.25rem] text-p tracking-[-2px] leading-[1.3] uppercase max-lg:text-[2.75rem] max-md:text-[2.5rem] max-md:tracking-[-1px]">
            Un polo creativo dove i marchi e le persone si incontrano per
            esplorare la propria identità, affinare la visione e tracciare un
            futuro innovativo.
          </p>
          <br />
          <br />
          <p className="text-[3.25rem] text-p tracking-[-2px] leading-[1.3] uppercase max-lg:text-[2.75rem] max-md:text-[2.5rem] max-md:tracking-[-1px]">
            Qui, le idee si trasformano in progetti concreti, creando
            connessioni che ispirano il cambiamento e la crescita. Un ambiente
            dove ogni collaboratore trova spazio per esprimere il proprio
            potenziale e contribuire a costruire qualcosa di unico e
            significativo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
