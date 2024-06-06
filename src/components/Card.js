import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      backgroundColor="white"
      _hover={{ boxShadow: "xl" }}
    >
      <Image src={imageSrc} alt={title} />
      <VStack spacing={4} p={4} align="start">
        <Heading color="black" size="md">
          {title}
        </Heading>
        <Text color="black" fontSize="sm">
          {description}
        </Text>
        <HStack spacing={2}>
          <Text fontWeight="bold" color="black">
            Learn More
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
