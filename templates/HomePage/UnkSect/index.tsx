import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./UnkSect.module.sass";
import customStyles from "./CustomUnkSect.module.scss";
import Card from "@/components/Card";
import Image from "@/components/Image";
import { IoCopy } from "react-icons/io5";

import { unkSect } from "@/constants/unkSect";

type SolutionsProps = {};

const UnkSect = ({}: SolutionsProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const [copySuccess, setCopySuccess] = useState(false);
  const textAreaRef = useRef(null);

  function copyToClipboard() {
    if (textAreaRef.current !== null) {
      (textAreaRef.current as HTMLTextAreaElement).select();
    }
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    // e.target.focus();
  }

  const copySuccessToggle = () => {
    setCopySuccess(true);
  };

  setTimeout(() => {
    setCopySuccess(false);
  }, 2000);

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container-small", styles.container)}>
        {/* <div className={styles.head}>
                    <div className={cn("h2", styles.title)}>
                        Scaling solutions, amplified.
                    </div>
                    <div className={styles.info}>
                        Onix&apos;s complete suite of blockchain-scaling
                        solutions.
                    </div>
                </div> */}
        <div className={styles.list}>
          {unkSect.map((item, index) => (
            <Card
              className={styles.card}
              innerCardClass={styles.inner}
              key={index}
              animateIn="fadeInDown"
              delay={isMobile ? 0 : item.delay}
              small
            >
              <div className={`${styles.icon} ${customStyles.icon2}`}>
                <img src={item.icon} alt="Figure" />
              </div>
              <div className={cn("h3", styles.subtitle)}>{item.title}</div>
              <div className={styles.content}>
                {item.s ? (
                  <div style={{ marginBottom: 40 }}>
                    Chain Name : Vince Chain <br />
                    RPC URL : https://rpc.vincescan.com/ <br />
                    Chain ID : 1000 <br />
                    Token : VCE <br />
                    Explorer Address : https://vincescan.com/ <br />
                    <div
                      className={customStyles.copyToClipboardBox}
                      onClick={copyToClipboard}
                    >
                      <textarea
                        ref={textAreaRef}
                        value="
                      Chain Name : Vince Chain
                      RPC URL : https://rpc.vincescan.com/
                      Chain ID : 1000
                      Token : VCE
                      Explorer Address : https://vincescan.com/
                      "
                      />
                      <button
                        onClick={() => {
                          copyToClipboard();
                          copySuccessToggle();
                        }}
                      >
                        <IoCopy className={customStyles.copyIcon} />
                        Copy
                      </button>
                      {copySuccess ? <span>Copied to clipboard!</span> : null}
                    </div>
                  </div>
                ) : (
                  <div style={{ marginBottom: 25 }}>{item.content}</div>
                )}
              </div>
              <div className={customStyles.sLinkDiv}>
                <a className={customStyles.sLink} href={item.slug}>
                  {item.button}
                </a>
              </div>
            </Card>
          ))}
        </div>
        {/* <div className={styles.images}>
                    {images.map((image, index) => (
                        <Parallax
                            className={styles.image}
                            speed={1}
                            easing="easeInQuad"
                            rotate={index === 1 ? [2, -6] : [-4, 15]}
                            key={index}
                        >
                            <Image
                                src={image.src}
                                width={image.width}
                                height={image.height}
                                alt={image.alt}
                            />
                        </Parallax>
                    ))}
                </div> */}
      </div>
    </div>
  );
};

export default UnkSect;
