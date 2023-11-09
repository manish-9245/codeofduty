import {
  Box,
  chakra,
  Flex,
  Link,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  ChakraProvider,
  Container,
  Stack,
  Image,
  Divider,
  theme
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { useEffect, useState } from "react";
import { endpoint } from "../endpoint";
import Fileupload from "./fileupload";
interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  const [folders, setFolders] = useState([]);
  const [present, setPresent] = useState(false);
  const [qr, setQr] = useState({});

  useEffect(() => {
    const token: any = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    fetch(`${endpoint}/getpersonaldocuments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFolders(data.documents);
        setQr(data.qr);
        setPresent(true);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {/* {redirect && <Redirect to="/" />} */}
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 12, md: 24 }}
        >
          <Flex>
            {present && <Image
              rounded={'md'}
              alt={'product image'}
              src={`http://localhost:8000/${qr.image}`}
              fit={'cover'}
              align={'left'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />}
          </Flex>
          <Stack spacing={{ base: 5, md: 10 }}>
          <Fileupload />
          </Stack>
        </SimpleGrid>
        <Box maxW="7xl" mx={"auto"} pt={6} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={12}
        fontWeight={"bold"}
      >
        File List
      </chakra.h1>
      
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {present &&
          folders.map((files:any, index) => {
           return <Link href={`http://localhost:3000/file/${files.id}`} isExternal>
              <StatsCard
                title={files.document_name}
                stat={""}
                icon={<FiServer size={"1em"} />}
              />
            </Link>
          })}
      </SimpleGrid>
    </Box>
      </Container>
    </ChakraProvider>
  );
}
