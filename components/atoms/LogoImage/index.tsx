import { FC } from 'react';
import NextLink from "next/link";
import { Image } from "@chakra-ui/react";
import styles from "./Logo.module.css";

interface Props {
  imageSource: string;
  imageAlt: string;
}

const Logo: FC<Props> = ({ imageSource, imageAlt }: Props) => (imageSource && imageAlt ? (
  <NextLink passHref href='/'>
    <Image src={imageSource} alt={imageAlt} className={styles.logo} />
  </NextLink>
) : (
  <></>
));

export default Logo 
