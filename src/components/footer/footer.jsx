import FooterContent from "./footerContent";

const Footer = () => {
  return (
    <>
      <footer
        className="relative h-[85dvh] bg-[#020202] max-md:h-[65vh]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed w-full h-[85dvh] bottom-0 px-6 max-md:h-[65vh]">
          <FooterContent />
        </div>
      </footer>
    </>
  );
};

export default Footer;
