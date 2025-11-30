import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Text,
  IconButton,
  Badge,
  HStack,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Spacer,
} from '@chakra-ui/react';
import {
  BellIcon,
  ChatIcon,
  SettingsIcon,
  LogoutIcon,
  ViewIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';

const TopNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const subTextColor = useColorModeValue('gray.500', 'gray.400');

  // Mock notification counts
  const messageCount = 3;
  const notificationCount = 5;

  return (
    <>
      <Box
        bg={bg}
        borderBottom="1px"
        borderColor={borderColor}
        px={{ base: 4, md: 6 }}
        py={3}
        position="sticky"
        top={0}
        zIndex={1000}
        boxShadow="sm"
      >
        <Flex align="center" justify="space-between">
          {/* Profile Section */}
          <HStack spacing={3}>
            <Avatar
              name="Olaoluwa Abijo"
              src="https://picsum.photos/seed/olaoluwa/100/100.jpg"
              size="md"
              border="2px solid"
              borderColor="blue.500"
            />
            <Box display={{ base: 'none', md: 'block' }}>
              <Text fontSize="sm" color={subTextColor}>
                Welcome.
              </Text>
              <Text fontSize="lg" fontWeight="600" color={textColor}>
                Olaoluwa Abijo
              </Text>
            </Box>
          </HStack>

          {/* Desktop Navigation Icons */}
          <HStack spacing={4}>
            {/* Messages Icon */}
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<ChatIcon boxSize={5} />}
                variant="ghost"
                color={textColor}
                position="relative"
                aria-label="Messages"
                display={{ base: 'none', md: 'flex' }}
              />
              <Badge
                position="absolute"
                top="-1"
                right="-1"
                bg="red.500"
                color="white"
                borderRadius="full"
                boxSize="20px"
                fontSize="xs"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {messageCount}
              </Badge>
              <MenuList>
                <MenuItem icon={<ChatIcon />}>New message from Sarah</MenuItem>
                <MenuItem icon={<ChatIcon />}>Team chat update</MenuItem>
                <MenuItem icon={<ChatIcon />}>Project discussion</MenuItem>
                <MenuDivider />
                <MenuItem icon={<ViewIcon />}>View all messages</MenuItem>
              </MenuList>
            </Menu>

            {/* Notifications Icon */}
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<BellIcon boxSize={5} />}
                variant="ghost"
                color={textColor}
                position="relative"
                aria-label="Notifications"
                display={{ base: 'none', md: 'flex' }}
              />
              <Badge
                position="absolute"
                top="-1"
                right="-1"
                bg="red.500"
                color="white"
                borderRadius="full"
                boxSize="20px"
                fontSize="xs"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {notificationCount}
              </Badge>
              <MenuList>
                <MenuItem>New follower request</MenuItem>
                <MenuItem>Your post was liked</MenuItem>
                <MenuItem>Comment on your photo</MenuItem>
                <MenuItem>Profile view notification</MenuItem>
                <MenuDivider />
                <MenuItem icon={<ViewIcon />}>View all notifications</MenuItem>
              </MenuList>
            </Menu>

            {/* Profile Menu */}
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<Avatar name="Olaoluwa Abijo" size="sm" />}
                variant="ghost"
                aria-label="Profile menu"
              />
              <MenuList>
                <MenuItem icon={<ViewIcon />}>View Profile</MenuItem>
                <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
                <MenuDivider />
                <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>
              </MenuList>
            </Menu>

            {/* Mobile Menu Button */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              icon={<HamburgerIcon />}
              variant="ghost"
              onClick={onOpen}
              aria-label="Open menu"
            />
          </HStack>
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <VStack align="start" spacing={1}>
              <Text fontSize="sm" color={subTextColor}>
                Welcome.
              </Text>
              <Text fontSize="lg" fontWeight="600">
                Olaoluwa Abijo
              </Text>
            </VStack>
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Box>
                <Text fontWeight="600" mb={2} color={textColor}>
                  Messages
                </Text>
                <Badge bg="red.500" color="white" borderRadius="full" px={2} py={1}>
                  {messageCount} new messages
                </Badge>
              </Box>

              <Box>
                <Text fontWeight="600" mb={2} color={textColor}>
                  Notifications
                </Text>
                <Badge bg="red.500" color="white" borderRadius="full" px={2} py={1}>
                  {notificationCount} new notifications
                </Badge>
              </Box>

              <MenuDivider />

              <MenuItem icon={<ViewIcon />}>View Profile</MenuItem>
              <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
              <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TopNav;
                
