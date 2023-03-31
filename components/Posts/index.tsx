import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import cn from "classnames";
import styles from "./Posts.module.sass";
import styles2 from "./Posts.module.scss";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

type PostsType = {
  title: string;
  date: string;
  image: string;
  status?: string;
  color?: string;
  url: string;
};

type PostsProps = {
  className?: string;
  title: string;
  info: string;
  posts: PostsType[];
  background?: boolean;
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      },
    },
  ],
};

const Posts = ({ className, title, info, posts, background }: PostsProps) => (
  <div
    className={cn(
      className,
      { [styles.background]: background },
      styles.section
    )}
  >
    <div className={cn("container", styles.container)}>
      <div className={styles.blogSection}>
        <div className={styles.wrap}>
          <div className={cn("h2", styles.title)}>{title}</div>
          <div className={styles.info}>{info}</div>
          {/* <Link href="/blog">
                        <a className={cn("button", styles.button)}>
                            <span>view all posts</span>
                        </a>
                    </Link> */}
        </div>
        <AnimationOnScroll animateIn="fadeInDown">
          <div className={styles2.list}>
            <Slider {...settings}>
              {posts.map((item, index) => (
                <div className={styles2.blogBox} key={index}>
                  <div className={styles2.inBlogBox}>
                    <div className={styles2.BiMG}>
                      <img src={item.image} alt="" />
                    </div>
                    <div className={styles2.blog_article}>
                      <p>{item.status}</p>
                      <h4>{item.title}</h4>
                      {/* <p></p> */}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </AnimationOnScroll>
      </div>
      <Parallax
        className={styles.image}
        speed={1}
        easing="easeInQuad"
        rotate={[2, -10]}
      >
        <Image
          src="/images/figures/figure-10.png"
          width={696}
          height={696}
          alt="Spike"
        />
      </Parallax>
    </div>
  </div>
);

export default Posts;
