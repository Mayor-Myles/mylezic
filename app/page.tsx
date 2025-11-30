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

const transactions = [
  {
    title: 'MTN Data',
    time: 'Today, 1:15 PM',
    amount: '-₦250.78',
    description: '1GB SME',
  },
  {
    title: 'GLO Airtime',
    time: 'Today, 9:00 AM',
    amount: '-₦150.00',
    description: 'Airtime',
  },
  {
    title: 'TV Subscription',
    time: '',
    amount: '-₦354.90',
    description: '',
  },
];

export default function DashboardPage() {
  return (
    <>
    <TopNav/>
    
    </>
  );
}
