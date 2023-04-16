import Link from "next/link";
import cn from "classnames";
import styles from "./Footer.module.sass";
import styles2 from "./Footer.module.scss";
import Logo from "@/components/Logo";
import Head from "next/head";
import NavLink from "@/components/NavLink";
import Socials from "@/components/Socials";
import { socialList } from "../../constants/social";
import { BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { FaTelegramPlane, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { footerNavigation, documents } from "@/constants/navigation";
import { socials } from "@/constants/socials";
import Script from "next/script";
import { useState } from "react";

type FooterProps = {};

// function openWidget() {
//   FreshworksWidget("open");
// }

const Footer = ({}: FooterProps) => {
  // const [FreshworksWidget, setFreshworksWidget] = useState("")

  return (
    <>
      <footer className={styles.footer}>
        <div className={cn("container-wide", styles.container)}>
          <div className={`${styles.row} ${styles2.d_flex}`}>
            <Logo className={`${styles.logo} ${styles2.fLogo}`} />
            <div className={`${styles.menu} ${styles2.menu2}`}>
              {footerNavigation &&
                footerNavigation.map((a, akey) => (
                  <div key={akey} className={styles2.fRLinks}>
                    {a.title && <h4 className="h4">{a.title}</h4>}
                    {a.list && (
                      <ul className="list-unstyled">
                        {a.list.map((b, bkey) => (
                          <li key={bkey}>
                            <a
                              href={b.slug}
                              // onClick={() =>
                              //   b.toggle ? openWidget() : () => false
                              // }
                            >
                              {b.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          </div>
          {/* <div className="widget">
            <Script>
              {`
                window.fwSettings={
                    'widget_id':150000003011,
                    };
                    !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}()
                    function openWidget() {FreshworksWidget('open', 'ticketForm');}
                `}
            </Script>
            <Script
              type="text/javascript"
              src="https://widget.freshworks.com/widgets/150000003011.js"
              async
              defer
            ></Script>
          </div> */}
          <div className={styles.row}>
            <div className={styles.copyright}>
              © 2023 Vincechain. All rights reserved.
            </div>
            {/* <div className={styles.documents}>
          {documents.map((document, index) => (
            <Link href={document.url} key={index}>
              <a className={styles.document}>{document.title}</a>
            </Link>
          ))}
        </div> */}
            {/* <Socials className={styles.socials} socials={socials} /> */}
            {/* <div className={styles2.social}>
          {socialList.map((item, i) => (
            <a key={i}
              target="_blank"
              rel="noreferrer"
              href={item.slug}
            >
              <button>{item.icon}</button>
            </a>
          ))}
        </div> */}
          </div>
        </div>
      </footer>
      <Script id="freshdesk">
        {`
          window.fwSettings={
            'widget_id':150000003011,
            };
            !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}()
            function openWidget() {FreshworksWidget('open', 'ticketForm');}
        `}
      </Script>
      <Script type='text/javascript' src='https://widget.freshworks.com/widgets/150000003011.js' async defer></Script>
    </>
  );
};

export default Footer;
