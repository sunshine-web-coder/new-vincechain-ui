import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.sass";
import Image from "@/components/Image";

type LogoProps = {
    className?: string;
    onClick?: () => void;
};

const Logo = ({ className, onClick }: LogoProps) => (
    <Link href="/">
        <a className={cn(styles.logo, className)} onClick={onClick}>
            <img
                src="/images/logo2.png"
                alt="Onix"
                priority
                style={{width: 200}}
            />
        </a>
    </Link>
);

export default Logo;
