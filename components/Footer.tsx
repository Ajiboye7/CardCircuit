import React from "react";
import { FooterProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { FooterLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-FooterBackground w-full">
      <div className="content flex flex-col max-w-[1600px] mx-auto p-10 xs:min-h-[1000px] sm:min-h-[1100px] md:min-h-[1100px] lg:min-h-[1000px] justify-end sm:mt-0">
        <div className="top flex flex-row justify-between flex-wrap gap-[10px] xs:gap-5 mb-12 md:mb-28">
          <div className="left items-center">
            <div className="logo flex items-center gap-3">
              <Image src="/Logo.svg" alt="logo" width={80} height={80} />
              <h2 className="text-fontColor text-3xl font-bold">CardCircuit</h2>
            </div>
            <p className="text-fontColor footer-body py-7 ">
              Discover seamless financial <br /> freedom with CardCircuit.
              Elevate your
              <br />
              money management game <br />
              by downloading our app now.
            </p>
            <div className="socials flex gap-5">
              <Image
                src="/LinkedIn.svg"
                alt="linkedin"
                width={40}
                height={40}
              />
              <Image
                src="/Facebook.svg"
                alt="facebook"
                width={40}
                height={40}
              />
              <Image
                src="/Insagram.svg"
                alt="intagram"
                width={40}
                height={40}
              />
              <Image src="/Twitter.svg" alt="twitter" width={40} height={40} />
            </div>
          </div>
          {FooterLinks.map((column, columnIndex) => (
            <div key={column.title} className="title">
              <h3 className="text-fontColor footer-title pb-5">
                {column.title}
              </h3>
              <ul className="links text-fontColor">
                {column.links.map((link, linkIndex) => (
                  <li
                    key={link.title}
                    className="footer-link py-2"
                  >
                    {columnIndex === FooterLinks.length - 1 &&
                    linkIndex === column.links.length - 1 ? (
                      <Link href={link.url} className="flex gap-3 items-center border-b-2 pb-4 ">
                        {link.title}{" "}
                        {/*<Image 
                        src="/Arrow Right.svg" 
                        alt="arrow-right" 
                        width={40}
                        height={40}
                        />*/}
                      </Link>
                    ) : (
                      <Link href={link.url}>{link.title}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bottom text-fontColor flex sm:justify-center lg:justify-between items-center flex-wrap gap-5 border-t-2 pt-8">
          <p className="footer-bottom-left-text">&copy; 2023 CardCircuit. All rights reserved</p>
          <p className="footer-bottom-right-text">private policy | Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

