"use client";

import { Flex, Box } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Link from 'next/link';


export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" gap={20}>
      <Text fontSize='4xl'>あなたの結果は.........</Text>
    </Flex>
  );
}