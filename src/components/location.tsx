import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Image,
    Icon,
    Grid,
    GridItem,
    IconButton,
    ChakraProvider,
    createIcon,
    SimpleGrid,
    IconProps,
    useColorModeValue,
    VStack,
    StackDivider,
    theme,
    StatsCard,
    chakra,
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td
  } from "@chakra-ui/react";
export default function Location() {
    return(
    <ChakraProvider>
<TableContainer>
  <Table variant='simple'>
    <TableCaption>Data of QR Scans</TableCaption>
    <Thead>
      <Tr>
        <Th>Time Stamp</Th>
        <Th>Latitude</Th>
        <Th>Longitude</Th>
        <Th>IP Address</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>23:59 21 Jan 2023</Td>
        <Td>121.8</Td>
        <Td >134.88</Td>
        <Td >12:@#$@$:#$:%:%:%</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
</ChakraProvider>);
}