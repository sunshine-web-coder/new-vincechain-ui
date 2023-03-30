import { AnimationOnScroll } from "react-animation-on-scroll";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Reviews.module.sass";
import styles2 from "./Reviews.module.scss";
import Image from "@/components/Image";
import Marquee from "react-fast-marquee";

type ReviewsType = {
  author: string;
  position: string;
  avatar: string;
  content: string;
  delay?: number;
};

type ReviewsProps = {
  reviews: ReviewsType[];
};

const Reviews = ({ reviews }: ReviewsProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={`${styles.list} ${styles2.partner_cont}`}>
          <div className={cn("h2", styles.title)}>Partners</div>
          <div className={styles2.partner_list}>
            <Marquee gradientColor={[34,35,37]}>
                <div className={styles2.p_box}>
                    <img src="/images/partners/1.png" alt="" />
                </div>
                <div className={styles2.p_box}>
                    <img src="/images/partners/2.png" alt="" />
                </div>
                <div className={styles2.p_box}>
                    <img src="/images/partners/3.png" alt="" />
                </div>
                <div className={styles2.p_box}>
                    <img src="/images/partners/4.png" alt="" />
                </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
