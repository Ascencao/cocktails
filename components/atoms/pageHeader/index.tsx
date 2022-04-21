import { Heading } from "@chakra-ui/react";

interface IPageHeaderProps {
  title: string;
  className: string;
}

export default function PageHeader(props: IPageHeaderProps) {
  const { title, className } = props;
  return (
    <Heading as="h1" size="xl" className={className}>
      {title}
    </Heading>
  );
}
