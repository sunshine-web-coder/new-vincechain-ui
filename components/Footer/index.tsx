import Link from "next/link";
import cn from "classnames";
import styles from "./Footer.module.sass";
import styles2 from "./Footer.module.scss";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import Socials from "@/components/Socials";
import { BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";

import { footerNavigation, documents } from "@/constants/navigation";
import { socials } from "@/constants/socials";

type FooterProps = {};

const Footer = ({}: FooterProps) => (
  <footer className={styles.footer}>
    <div className={cn("container-wide", styles.container)}>
      <div className={`${styles.row} ${styles2.d_flex}`}>
        <Logo className={styles.logo} />
        <div className={`${styles.menu} ${styles2.menu2}`}>
          {footerNavigation &&
            footerNavigation.map((a, akey) => (
              <div key={akey} className={styles2.fRLinks}>
                {a.title && <h4 className="h4">{a.title}</h4>}
                {a.list && (
                  <ul className="list-unstyled">
                    {a.list.map((b, bkey) => (
                      <li key={bkey}>
                        <a href={`${b.slug}`}>{b.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
      </div>
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
        <div className={styles2.social}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/vincechain"
          >
            <button>
              <BsTwitter />
            </button>
          </a>
          <a target="_blank" rel="noreferrer" href="https://t.me/vincechain">
            <button>
              <FaTelegramPlane />
            </button>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/vincechain?utm_medium=copy_link"
          >
            <button>
              <BsInstagram />
            </button>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/vince-chain"
          >
            <button>
              <FaGithub />
            </button>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@vincechain5256"
          >
            <button>
              <BsYoutube />
            </button>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
