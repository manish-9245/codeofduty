import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    blood_group: "",
    gender: "",
    height: "",
    weight: "",
    allergies: "",
    dob: "",
    emergency_contacts: [
      {
        name: "",
        phone: "",
      },
      {
        name: "",
        phone: "",
      },
    ],
  });

  const [focus, setFocus] = useState({
    firstName: false,
    lastName: false,
    username: false,
    email: false,
    password: false,
    blood_group: false,
    gender: false,
    height: false,
    weight: false,
    allergies: false,
    dob: false,
  })

  const [previousFocus, setPreviousFocus] = useState("")

  const handleChange = (e: any) => {
    if (e.target.name == previousFocus){
      setFocus({
        ...focus,
        [e.target.name]: true,
      })
    }
    else{
      setFocus({
        ...focus,
        [e.target.name]: true,
        [previousFocus]: false
      })
    }
    setPreviousFocus(e.target.name)
    
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const Form1 = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
      <>
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
          User Registration
        </Heading>
        <Flex>
          <FormControl mr="5%" id="first-name">
            <FormLabel htmlFor="first-name" fontWeight={"normal"}>
              First Name
            </FormLabel>
            <Input
              id="first-name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              placeholder="First Name"
              autoFocus={focus.firstName}
            />
          </FormControl>
          <FormControl id="last-name">
            <FormLabel htmlFor="last-name" fontWeight={"normal"}>
              Last name
            </FormLabel>
            <Input id="last-name" type="text" name="lastName" value={data.lastName} onChange={handleChange} placeholder="Last name" autoFocus={focus.lastName}  />
          </FormControl>
        </Flex>
        <FormControl mt="2%">
          <FormLabel htmlFor="email" fontWeight={"normal"}>
            Email address
          </FormLabel>
          <Input id="email" name="email" value={data.email} onChange={handleChange} type="email" autoFocus={focus.email} />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
            Password
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              name="password"
              value={data.password}
              onChange={handleChange}
              autoFocus={focus.password}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </>
    );
  };
  const Form2 = () => {
    return (
      <>
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
          User Health Details
        </Heading>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor="blood_group"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Blood Group
          </FormLabel>
          <Select
            id="blood_group"
            name="blood_group"
            autoComplete="blood_group"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={handleChange}
          >
            <option>A +ve</option>
            <option>A -ve</option>
            <option>O +ve</option>
            <option>O -ve</option>
            <option>AB +ve</option>
            <option>AB -ve</option>
            <option>B +ve</option>
            <option>B -ve</option>
          </Select>
        </FormControl>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor="gender"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Gender
          </FormLabel>
          <Select
            id="gender"
            name="gender"
            autoComplete="gender"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
          >
            <option>Male</option>
            <option>Female</option>
          </Select>
        </FormControl>
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor="height"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Height
          </FormLabel>
          <Input
            type="text"
            name="height"
            placeholder="in cm"
            id="height"
            autoComplete="height"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
          />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel
            htmlFor="weight"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Weight
          </FormLabel>
          <Input
            type="text"
            name="weight"
            id="weight"
            autoComplete="weight"
            placeholder="in kg"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
          />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="dob"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Date of Birth
          </FormLabel>
          <Input
            type="text"
            name="dob"
            id="dob"
            autoComplete="dob"
            focusBorderColor="brand.400"
            shadow="sm"
            placeholder="DD/MM/YYYY"
            size="sm"
            w="full"
            rounded="md"
          />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="allergies"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
            mt="2%"
          >
            Allergies
          </FormLabel>
          <Input
            type="textbox"
            name="allergies"
            id="allergies"
            autoComplete="allergies"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            height="50px"
            placeholder="Enter your allergies"
            rounded="md"
          />
        </FormControl>
      </>
    );
  };

  const Form3 = () => {
    return (
      <>
        <Heading w="100%" textAlign={"center"} fontWeight="normal">
          Emergency Contacts
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
          <Flex>
            <FormControl mr="5%">
              <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                First Name
              </FormLabel>
              <Input id="first-name" placeholder="First Name" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="last-name" fontWeight={"normal"}>
                Last name
              </FormLabel>
              <Input id="last-name" placeholder="Last name" />
            </FormControl>
          </Flex>
          <FormControl as={GridItem} colSpan={[3, 2]}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Phone Number 1
            </FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon
                bg="gray.50"
                _dark={{
                  bg: "gray.800",
                }}
                color="gray.500"
                rounded="md"
              >
                +91
              </InputLeftAddon>
              <Input
                type="tel"
                placeholder="Enter Phone Number"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
          </FormControl>
          <Flex>
            <FormControl mr="5%">
              <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                First Name
              </FormLabel>
              <Input id="first-name" placeholder="First Name" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="last-name" fontWeight={"normal"}>
                Last name
              </FormLabel>
              <Input id="last-name" placeholder="Last name" />
            </FormControl>
          </Flex>
          <FormControl as={GridItem} colSpan={[3, 2]}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Phone Number 2
            </FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon
                bg="gray.50"
                _dark={{
                  bg: "gray.800",
                }}
                color="gray.500"
                rounded="md"
              >
                +91
              </InputLeftAddon>
              <Input
                type="tel"
                placeholder="Enter Phone Number"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
          </FormControl>
        </SimpleGrid>
      </>
    );
  };

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
export {};
