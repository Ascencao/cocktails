import {
  Button,
  Center,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

interface IEventsProps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLElement>) => any;
  handleOnKeyPress: (event: React.KeyboardEvent<HTMLElement>) => void;
}

interface ISearcherProps {
  label: string;
  value: string;
  events: IEventsProps;
}

export default function Searcher(props: ISearcherProps) {
  const { label, value, events } = props;
  const { handleClick, handleInputChange, handleOnKeyPress } = events;

  return (
    <>
      {label && <Center><Text fontSize="xl" maxW={"100%"}>{label}</Text></Center>}
      <InputGroup>
        <Input
          id="search"
          placeholder="Search"
          maxW={"100%"}
          onChange={handleInputChange}
          onKeyPress={handleOnKeyPress}
        />
        <InputRightAddon p={0}>
          <Button
            h="100%"
            w="100%"
            size="sm"
            value={value}
            onClick={handleClick}
          >
            <Search2Icon color="gray.300" />
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
}
