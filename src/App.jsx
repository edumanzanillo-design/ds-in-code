import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react"

function App() {
  return (
    /*
      Box es el componente más básico de Chakra, equivale a un <div>.
      Aquí lo usamos como el contenedor principal de toda la página.
      El fondo de puntos se consigue con un gradiente radial en CSS.
    */
    <Box
      minH="100vh"
      bg="white"
      bgImage="radial-gradient(circle, #00000025 1px, transparent 1px)"
      bgSize="24px 24px"
    >

      {/* 
        Navbar: usamos Flex para distribuir el logo y los enlaces
        en los extremos opuestos (justify="space-between").
        position="sticky" y top={0} hace que se quede fija arriba al hacer scroll.
      */}
      <Flex
        as="nav"
        px={8}
        py={4}
        align="center"
        justify="space-between"
        borderBottomWidth="1px"
        borderColor="gray.200"
        bg="whiteAlpha.900"
        backdropFilter="blur(8px)"
        position="sticky"
        top={0}
        zIndex={10}
      >
        {/* Logo: imagen SVG desde la carpeta public */}
        <img src="/logo-edum-blue.svg" alt="Edu Manzanillo" height="32" />

        {/*
          HStack coloca elementos en fila horizontal con un espacio entre ellos.
          gap={8} equivale a 32px de separación entre cada enlace.
        */}
        <HStack gap={8}>
          <Link href="#" color="#0371B7">Home</Link>
          <Link href="#" color="#222222">About me</Link>
          <Link href="#" color="#222222">Works</Link>
          <Link href="#" color="#222222">Contact</Link>
        </HStack>
      </Flex>

      {/* 
        Container centra el contenido y le pone un ancho máximo.
        py={32} añade espacio vertical generoso para que el hero respire.
      */}
      <Container maxW="900px" py={32}>

        {/* Heading es el equivalente a un <h1>, con estilos de Chakra */}
        <Heading size="5xl" mb={4} color="#222222">
          Hi, I'm Eduardo Manzanillo!
        </Heading>

        {/* Text es un <p>. color y maxW limitan su ancho para mejor legibilidad */}
        <Text fontSize="xl" color="#222222" mb={8} maxW="600px">
          I'm a designer passionate about building beautiful and accessible
          digital experiences. Currently working on design systems and
          exploring the intersection of design and code.
        </Text>

        {/*
          Los dos botones en fila.
          El primero es el CTA principal (relleno).
          El segundo es secundario, con variant="outline" (solo borde).
        */}
        <HStack gap={4}>
          <Button size="lg" bg="#0371B7" color="white">
            Contact me
          </Button>
          <Button size="lg" variant="outline">
            Know more about me
          </Button>
        </HStack>

      </Container>
    </Box>
  )
}

export default App