import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./UnkSect.module.sass";
import customStyles from "./CustomUnkSect.module.scss";
import Card from "@/components/Card";
import Image from "@/components/Image";
import { BsCheckCircle } from "react-icons/bs";

import { unkSect } from "@/constants/unkSect";

type SolutionsProps = {};

const UnkSect = ({}: SolutionsProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const [copySuccess, setCopySuccess] = useState(false);
  const textAreaRef1 = useRef(null);
  const textAreaRef2 = useRef(null);
  const textAreaRef3 = useRef(null);
  const textAreaRef4 = useRef(null);
  const textAreaRef5 = useRef(null);

  function copyToClipboard1() {
    if (textAreaRef1.current !== null) {
      (textAreaRef1.current as HTMLTextAreaElement).select();
    }
    document.execCommand("copy");
  }
  function copyToClipboard2() {
    if (textAreaRef2.current !== null) {
      (textAreaRef2.current as HTMLTextAreaElement).select();
    }
    document.execCommand("copy");
  }
  function copyToClipboard3() {
    if (textAreaRef3.current !== null) {
      (textAreaRef3.current as HTMLTextAreaElement).select();
    }
    document.execCommand("copy");
  }
  function copyToClipboard4() {
    if (textAreaRef4.current !== null) {
      (textAreaRef4.current as HTMLTextAreaElement).select();
    }
    document.execCommand("copy");
  }
  function copyToClipboard5() {
    if (textAreaRef5.current !== null) {
      (textAreaRef5.current as HTMLTextAreaElement).select();
    }
    document.execCommand("copy");
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
                    <>
                    <div style={{ marginBottom: 37 }}>
                        <div className={customStyles.jd8s768} onClick={copyToClipboard1}>
                            Chain Name : Vince Chain 
                            <textarea ref={textAreaRef1} value="Vince Chain"/>
                            <img onClick={() => {copyToClipboard1();copySuccessToggle();}} src="/images/copy.png" alt="" />
                        </div>
                        <div className={customStyles.jd8s768}>
                            RPC URL : https://rpc.vincescan.com/
                            <textarea ref={textAreaRef2} value="https://rpc.vincescan.com/"/>
                            <img onClick={() => {copyToClipboard2();copySuccessToggle();}} src="/images/copy.png" alt="" />
                        </div>
                        <div className={customStyles.jd8s768}>
                            Chain ID : 1000
                            <textarea ref={textAreaRef3} value="1000"/>
                            <img onClick={() => {copyToClipboard3();copySuccessToggle();}} src="/images/copy.png" alt="" />
                        </div>
                        {/* <div className={customStyles.jd8s768}>
                            Token : VCE
                            <textarea ref={textAreaRef4} value="VCE"/>
                            <img onClick={() => {copyToClipboard4();copySuccessToggle();}} src="/images/copy.png" alt="" />
                        </div> */}
                        <div className={customStyles.jd8s768}>
                            Explorer Address : https://vincescan.com/
                            <textarea ref={textAreaRef5} value="https://vincescan.com/"/>
                            <img className={customStyles.lC8copyImg} onClick={() => {copyToClipboard5();copySuccessToggle();}} src="/images/copy.png" alt="" />
                        </div>
                    </div>
                    </>
                  
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
      {copySuccess ? <div className={customStyles.copyAlert}><BsCheckCircle />Copied to clipboard!</div> : null}
    </div>
  );
};

export default UnkSect;
