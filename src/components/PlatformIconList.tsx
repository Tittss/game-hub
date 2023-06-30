import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}

const PlatformIconList = ({ platform }: Props) => {
  const iconnMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack margin={"10px"}>
      {platform.map((platform) => (
        <Icon key={platform.id} as={iconnMap[platform.slug]}>
          {platform.name} color='gray.500'
        </Icon>
      ))}
      ;
    </HStack>
  );
};

export default PlatformIconList;
