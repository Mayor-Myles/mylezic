'use client';

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { FaHome, FaMoneyBill, FaHistory, FaUser } from 'react-icons/fa';
import TopNav from '@/topnav';
 import Wallet from '@/wallet';




export default function DashboardPage() {
  return (
    <Flex align="center" justifyContent="center" minH="100vh" direction="column" maxW="md">
   
      <TopNav/>
      <Wallet/>
    
    </Flex>
  );
}
