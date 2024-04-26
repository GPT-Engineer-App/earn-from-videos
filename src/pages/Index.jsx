import React from "react";
import { Box, Button, Container, Flex, Heading, Icon, Input, Stack, Text, VStack, Image, AspectRatio } from "@chakra-ui/react";
import { FaCloudUploadAlt, FaUserCircle, FaMoneyBillWave } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Heading as="h1" size="lg">
          MyTube
        </Heading>
        <Button leftIcon={<Icon as={FaUserCircle} />} colorScheme="teal">
          Sign In
        </Button>
      </Flex>
      <Stack spacing={8} my={8}>
        <Box p={4} boxShadow="md" borderRadius="md">
          <VStack spacing={4}>
            <Input placeholder="Search videos" />
            <Button rightIcon={<Icon as={FaCloudUploadAlt} />} colorScheme="blue">
              Upload Video
            </Button>
          </VStack>
        </Box>
        <Heading as="h2" size="md">
          Featured Videos
        </Heading>
        <Flex wrap="wrap" justifyContent="space-between">
          {Array.from({ length: 4 }).map((_, index) => (
            <Box key={index} p={4} boxShadow="md" borderRadius="md" width="45%">
              <AspectRatio ratio={16 / 9}>
                <Image src="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYW1wbGUlMjB2aWRlbyUyMHRodW1ibmFpbHxlbnwwfHx8fDE3MTQxMDk3MDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Video Thumbnail" />
              </AspectRatio>
              <Text mt={2} fontSize="lg" fontWeight="bold">
                Video Title {index + 1}
              </Text>
              <Text fontSize="sm">100K views · 3 days ago</Text>
              <Button mt={2} leftIcon={<Icon as={FaMoneyBillWave} />} colorScheme="green">
                Monetize
              </Button>
            </Box>
          ))}
        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;
