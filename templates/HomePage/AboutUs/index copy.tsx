import cn from "classnames";
import styles from "./AboutUs.module.scss";
import Image from "@/components/Image";

import { details } from "@/constants/detailsAbout";

type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps) => (
  <div className={cn("section", styles.section)}>
    <div className={cn("container", styles.container)}>
      {details.map((item, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.wrap}>
            <div className={cn("content", styles.content)}>{item.content}</div>
            <div className={styles.line}>
              <a href={item.slug1} className={cn("button", styles.button)}>
                <span>{item.slugLabel1}</span>
              </a>
              <a href={item.slug2} className={styles.document}>
                {item.slugLabel2}
              </a>
              {/* {item.slug1 || item.slug2 ? (
                <>
                  <a href={item.slug1} className={cn("button", styles.button)}>
                    <span>{item.slugLabel1}</span>
                  </a>
                  <a href={item.slug2} className={styles.document}>
                    {item.slugLabel2}
                  </a>
                </>
              ) : (
                <></>
              )}

              {item.slugLabelE1 ? (
                <>
                  <a href={item.slugE1} className={cn("button", styles.button)}>
                    <span>{item.slugLabelE1}</span>
                  </a>
                  <a href={item.slugE2} className={cn("button", styles.button)}>
                    <span>{item.slugLabelE2}</span>
                  </a>
                </>
              ) : (
                <></>
              )} */}
            </div>
          </div>
          <div className={styles.preview}>
            <img
              src={item.image.src}
              alt={item.image.alt}
              style={{marginTop: "200px"}}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutUs;
