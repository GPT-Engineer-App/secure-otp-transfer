import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Input, Button, useToast, Spinner, Image } from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSendOTP = async () => {
    if (!email) {
      toast({
        title: "Please enter your email",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Implement sending OTP to email using PHP
      // You can make an API call to your PHP script here
      // Example: await axios.post("/send-otp.php", { email });

      toast({
        title: "OTP sent successfully",
        description: "Please check your email for the OTP",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast({
        title: "Error sending OTP",
        description: "Please try again later",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setIsLoading(false);
  };

  const handleVerifyOTP = () => {
    if (!otp) {
      toast({
        title: "Please enter the OTP",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // TODO: Implement OTP verification logic
    // Example: Compare the entered OTP with the stored OTP in Firebase
    // If the OTP matches, proceed with the transaction
    // Otherwise, show an error message

    toast({
      title: "OTP verified successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Heading size="xl" textAlign="center">
          Secure Transfer
        </Heading>
        <Box p={6} borderWidth={1} borderRadius="lg" boxShadow="md" bg="white">
          <VStack spacing={6} align="stretch">
            <Text fontSize="xl" fontWeight="bold">
              Transaction Details
            </Text>
            <HStack>
              <Text fontWeight="bold">Amount:</Text>
              <Text>$1,000</Text>
            </HStack>
            <HStack>
              <Text fontWeight="bold">Recipient:</Text>
              <Text>John Doe</Text>
            </HStack>
          </VStack>
        </Box>
        <Box p={6} borderWidth={1} borderRadius="lg" boxShadow="md" bg="white">
          <VStack spacing={6} align="stretch">
            <Text fontSize="xl" fontWeight="bold">
              OTP Verification
            </Text>
            <HStack>
              <FaEnvelope />
              <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </HStack>
            <Button colorScheme="blue" onClick={handleSendOTP} isLoading={isLoading}>
              Send OTP
            </Button>
            <HStack>
              <FaLock />
              <Input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
            </HStack>
            <Button colorScheme="green" onClick={handleVerifyOTP}>
              Verify OTP
            </Button>
          </VStack>
        </Box>
        <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBvbmxpbmUlMjB0cmFuc2FjdGlvbnxlbnwwfHx8fDE3MTEwOTgyNjV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Secure Transaction" />
      </VStack>
    </Box>
  );
};

export default Index;
