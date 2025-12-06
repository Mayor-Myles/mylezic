// components/Sidebar.jsx
import {
  Box,
  Flex,
  VStack,
  Text,
  Divider,
  Avatar,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  FiHome,
  FiWifi,
  FiSmartphone,
  FiMail,
  FiMessageCircle,
  FiUser,
  FiSearch,
} from "react-icons/fi";

const menuItems = [
  { label: "Home", icon: FiHome, href: "/" },
  { label: "Buy Data", icon: FiWifi, href: "/data" },
  { label: "Buy Airtime", icon: FiSmartphone, href: "/airtime" },
  { label: "Bulk SMS", icon: FiMail, href: "/bulk-sms" },
  { label: "Support", icon: FiMessageCircle, href: "/support" },
  { label: "Contact", icon: FiMessageCircle, href: "/contact" },
  { label: "Profile", icon: FiUser, href: "/profile" },
];

export default function Sidebar() {
  return (
    <Flex
      direction="column"
      pos="fixed"
      left="0"
      top="0"
      w={{ base: "260px", md: "260px" }}
      h="100vh"
      bg="linear-gradient(180deg, #6B2FFF 0%, #9A4DFF 50%, #C06CFF 100%)"
      color="white"
      p="5"
      boxShadow="xl"
    >
      {/* 🔎 Search Input */}
      <InputGroup mb="6">
        <InputLeftElement>
          <Icon as={FiSearch} color="whiteAlpha.800" />
        </InputLeftElement>
        <Input
          placeholder="Search..."
          bg="whiteAlpha.200"
          border="none"
          color="white"
          _placeholder={{ color: "whiteAlpha.700" }}
          _focus={{ bg: "whiteAlpha.300" }}
        />
      </InputGroup>

      {/* 📌 Menu Items */}
      <VStack align="stretch" spacing="3" flex="1">
        {menuItems.map((item) => (
          <Link key={item.label} href={item.href} passHref legacyBehavior>
            <Flex
              as="a"
              align="center"
              p="3"
              borderRadius="md"
              cursor="pointer"
              transition="0.2s"
              _hover={{
                bg: "whiteAlpha.300",
                backdropFilter: "blur(4px)",
              }}
            >
              <Icon as={item.icon} boxSize={5} mr="3" />
              <Text fontSize="md" fontWeight="medium">
                {item.label}
              </Text>
            </Flex>
          </Link>
        ))}
      </VStack>

      <Divider borderColor="whiteAlpha.400" my="4" />

      {/* 👤 User Section */}
      <Flex align="center" gap="3">
        <Avatar name="John Doe" size="md" />
        <Box>
          <Text fontWeight="semibold">John Doe</Text>
          <Flex align="center" gap="2">
            <Box
              w="10px"
              h="10px"
              bg="green.300"
              borderRadius="full"
              boxShadow="0 0 6px green"
            />
            <Text fontSize="sm" color="whiteAlpha.800">
              Online
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
