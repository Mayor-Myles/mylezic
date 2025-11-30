import {
  Box,
  Flex,
  Text,
  Avatar,
  IconButton,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { BellIcon, ChatIcon } from '@chakra-ui/icons';

const TopNav = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="md"
    >
      {/* Left: Profile and Welcome Message */}
      <Flex align="center" gap={4}>
        <Avatar name="Olaoluwa Abijo" src="/path-to-profile.jpg" />
        <Text fontSize="lg" fontWeight="semibold">
          Welcome, Olaoluwa Abijo
        </Text>
      </Flex>

      {/* Right: Notification Icons */}
      <Flex align="center" gap={4}>
        <Box position="relative">
          <IconButton
            aria-label="Messages"
            icon={<ChatIcon />}
            variant="ghost"
            size="md"
          />
          <Badge
            position="absolute"
            top="0"
            right="0"
            bg="red.500"
            color="white"
            fontSize="0.7em"
            borderRadius="full"
            px={2}
          >
            3
          </Badge>
        </Box>

        <Box position="relative">
          <IconButton
            aria-label="Notifications"
            icon={<BellIcon />}
            variant="ghost"
            size="md"
          />
          <Badge
            position="absolute"
            top="0"
            right="0"
            bg="red.500"
            color="white"
            fontSize="0.7em"
            borderRadius="full"
            px={2}
          >
            5
          </Badge>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TopNav;
