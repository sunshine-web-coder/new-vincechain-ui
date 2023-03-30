import cn from "classnames";
import styles from "./AboutUs.module.scss";
import Image from "@/components/Image";
import { BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { details } from "@/constants/detailsAbout";

type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps) => (
  <div className={cn("section", styles.section)}>
    <div className={cn("container", styles.container)}>
      <AnimationOnScroll animateIn="fadeInDown">
        <div className={styles.item}>
          <div className={styles.wrap}>
            <div className={styles.content}>
              <h2>Our Freelance marketplace beta.</h2>
              <p>
                The vince freelance market place released earlier is powered by
                the Vince Token and chain.
              </p>
            </div>
            <div className={styles.line}>
              <a
                href="https://vincefreelancer.com/"
                className={cn("button", styles.button)}
              >
                <span>Sign up</span>
              </a>
            </div>
          </div>
          <div className={styles.preview}>
            <img src="/images/about-pic-1.png" />
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="fadeInDown">
        <div className={`${styles.item} ${styles.f_reverse}`}>
          <div className={styles.wrap}>
            <div className={styles.content}>
              <h2>Introducing the Vince Chain Coin (VCE).</h2>
              <p>
                $VCE is the native coin of the Vince Chain Blockchain and the
                utility coin of the Vince Chain Ecosystem. Functions include
                validating transactions, staking, and governance
              </p>
              <p>
                What’s more? Vince Chain Coin (VCE) is interoperable with
                Ethereum Virtual Machine and other chains. Rewards pools and
                incentives on Vince Chain will be managed by $VCE.
              </p>
              <p>
                <b>Want to join Vince Chain?</b>
              </p>
            </div>
            <div className={styles.line}>
              <a href="" className={cn("button", styles.button)}>
                <span>Buy VCE Now</span>
              </a>
            </div>
          </div>
          <div className={styles.preview}>
            <img src="/images/about-pic-1.png" />
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="fadeInDown">
        <div className={styles.item}>
          <div className={styles.wrap}>
            <div className={styles.content}>
              <h2>Build in the Future</h2>
              <p>
                Vince Chain is powering the decentralized future faster than you
                think.
              </p>
            </div>
            <div className={styles.line}>
              <a
                href=""
                className={cn("button", styles.button)}
                style={{ marginRight: 20 }}
              >
                <span>Start Building</span>
              </a>
              <a
                href="https://vincechain.gitbook.io/vince-chain-documentation/"
                className={styles.document}
              >
                <span>Learn about Vince</span>
              </a>
            </div>
          </div>
          <div className={styles.preview}>
            <img src="/images/about-pic-1.png" />
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="fadeInDown">
        <div className={`${styles.item} ${styles.f_reverse}`}>
          <div className={styles.wrap}>
            <div className={styles.content}>
              <h2>
                There Is a community <br />
                for you.
              </h2>
              <p>
                Vince Chain has a growing community of resources, contributors,
                users, developers, and more. Get all the support you may need in
                our community.
              </p>
            </div>
            <div className={styles.social}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/vincechain"
              >
                <button>
                  <BsTwitter />
                </button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://t.me/vincechain"
              >
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
          <div className={styles.preview}>
            <img src="/images/about-pic-1.png" />
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  </div>
);

export default AboutUs;
