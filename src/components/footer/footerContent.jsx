import Link from "next/link";

const FooterContent = () => {
  const socialLinks = [
    { title: "IG", href: "https://www.instagram.com/" },
    { title: "X", href: "https://www.x.com/" },
    { title: "THREADS", href: "https://www.threads.com/" },
    { title: "FB", href: "https://www.fb.com/" },
    { title: "LINKEDIN", href: "https://www.linkedin.com/" },
    { title: "YT", href: "https://www.youtube.com/" },
    { title: "TIK TOK", href: "https://www.tiktok.com/" },
    { title: "BEHANCE", href: "https://www.behance.com/" },
    { title: "PINTEREST", href: "https://www.pinterest.com/" },
  ];

  return (
    <section className="w-full h-full py-8 flex items-start justify-start flex-col">
      <div className="w-full h-full flex justify-between">
        <h1 className="footer-hero-txt mb-8">filtro</h1>
        <h1 className="footer-hero-txt mb-8">®</h1>
      </div>

      <div className="w-full h-fit flex">
        <div className="flex-[2] max-lg:flex-[1] max-md:hidden"></div>
        <div className="w-full flex-[2] f-col">
          <div className="mb-8">
            <h2 className="footer-follow-txt mb-6">SEGUICI</h2>
            <div className="flex items-start justify-start gap-2">
              {socialLinks.map((social, i) => (
                <Link
                  href={social.href}
                  scroll={false}
                  className="relative footer-link-txt group cursor-default"
                  target="__blank"
                  key={i}
                >
                  {social.title}
                  <div className="absolute w-0 h-0.5 bottom-[-3px] bg-s transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="footer-follow-txt mb-6">contatti</h2>
            <ul className="flex items-start justify-start gap-2">
              <li>
                <a
                  href={"mailto:hello@filtro.co"}
                  className="relative footer-link-txt group cursor-default"
                >
                  hello@filtro.co
                  <div className="absolute w-0 h-0.5 bottom-[-3px] bg-s transition-all duration-300 group-hover:w-full" />
                </a>
              </li>

              <li>
                <a
                  href={"tel:+19294761003"}
                  className="relative footer-link-txt group cursor-default"
                >
                  +1 929 476 1003
                  <div className="absolute w-0 h-0.5 bottom-[-3px] bg-s transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex max-md:pt-8">
        <div className="flex-[2] max-lg:flex-[1] max-md:hidden"></div>
        <div className="w-full flex-[2] flex gap-2">
          <p className="footer-link-txt">© 2025 FILTRO. All rights reserved.</p>
          <p className="footer-link-txt">Italy (03:12) Foggia</p>
        </div>
      </div>
    </section>
  );
};

export default FooterContent;
