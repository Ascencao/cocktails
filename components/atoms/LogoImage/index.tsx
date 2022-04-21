import NextLink from "next/link";
import { Image } from "@chakra-ui/react";
import styles from "./Logo.module.css";

interface ILogoProps {
  imageSource: string;
  imageAlt: string;
}

export default function Logo(props: ILogoProps) {
  const { imageSource, imageAlt } = props;
  return imageSource && imageAlt ? (
    <NextLink passHref href='/'>
      <Image src={imageSource} alt={imageAlt} className={styles.logo} />
    </NextLink>
  ) : (
    <></>
  );
}
