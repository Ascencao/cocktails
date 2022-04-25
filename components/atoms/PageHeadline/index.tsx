import { FC } from "react";
import { Heading } from "@chakra-ui/react";

interface Props {
  title: string;
  className: string;
}

const PageHeader: FC<Props> = ({ title, className }: Props) => (
  <Heading as="h1" size="xl" className={className}>
    {title}
  </Heading>
);

export default PageHeader; 
