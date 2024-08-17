import React from "react";
import { FooterProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { FooterLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-FooterBackground w-full">
      <div className="content flex flex-col max-w-[1600px] mx-auto p-10 sm:min-h-[1300px] lg:min-h-[1000px] justify-end sm:mt-0">
        <div className="top flex flex-row justify-between flex-wrap gap-5 mb-28">
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
                      <Link href={link.url} className="flex gap-3 items-center border-b-2 pb-4">
                        {link.title}{" "}
                        <Image 
                        src="/Arrow Right.svg" 
                        alt="arrow-right" 
                        width={40}
                        height={40}
                        />
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

{
  /*
  
  <footer className="bg-gray-800 p-6 text-white">
    <div className="content flex flex-col">
      <div className="top flex flex-row justify-between items-start mb-6">
        <div className="left flex flex-col gap-4">
          <div className="logo flex items-center gap-2">
            <Image src="/Logo.svg" alt="logo" width={50} height={50} />
            <h2 className="text-xl font-semibold">CardCircuit</h2>
          </div>
          <p className="max-w-md">
            Discover seamless financial freedom with CardCircuit. Elevate your
            money management game by downloading our app now.
          </p>
          <div className="socials flex gap-4">
            <Image src="/LinkedIn.svg" alt="linkedin" width={30} height={30} />
            <Image src="/Facebook.svg" alt="facebook" width={30} height={30} />
            <Image src="/Instagram.svg" alt="instagram" width={30} height={30} />
            <Image src="/Twitter.svg" alt="twitter" width={30} height={30} />
          </div>
        </div>
        <div className="right flex flex-row items-start justify-between gap-8">
          {FooterLinks.map((column) => (
            <div key={column.title} className="title">
              <h3 className="text-lg font-semibold">{column.title}</h3>
              <ul className="links mt-2 space-y-2">
                {column.links.map((link) => (
                  <li key={link.title} className="footerLinks">
                    <Link href={link.url}>
                      <a className="hover:underline">{link.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom flex flex-col md:flex-row md:justify-between text-center md:text-left text-sm border-t border-gray-700 pt-4">
        <p>2023 CardCircuit. All rights reserved</p>
        <p>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | 
          <a href="/terms-conditions" className="hover:underline"> Terms and Conditions</a>
        </p>
      </div>
    </div>
  </footer>
  
  
  
  */
}
