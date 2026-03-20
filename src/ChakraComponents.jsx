import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  HStack,
  Heading,
  Input,
  Link,
  Stack,
  Switch,
  Text,
  Textarea,
  VStack,
  createListCollection,
} from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"
import { useNavigate } from "react-router-dom"

const dotBg = {
  minH: "100vh",
  bg: "white",
  bgImage: "radial-gradient(circle, #00000025 1px, transparent 1px)",
  bgSize: "24px 24px",
}

function SectionCard({ title, description, children }) {
  return (
    <Box bg="whiteAlpha.800" border="1px solid" borderColor="gray.200" borderRadius="xl" p={8} mb={8}>
      <Heading size="lg" color="#222222" mb={2}>{title}</Heading>
      <Text color="#222222" mb={6} opacity={0.7}>{description}</Text>
      {children}
    </Box>
  )
}

function ChakraComponents() {
  const navigate = useNavigate()

  const frameworks = createListCollection({
    items: [
      { label: "React", value: "react" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
      { label: "Angular", value: "angular" },
    ],
  })

  return (
    <Box {...dotBg}>
      {/* Navbar — idéntico a la home */}
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
        <img src="/logo-edum-blue.svg" alt="Edu Manzanillo" height="32" />
        <HStack gap={8}>
          <Link href="/" color="#222222">Home</Link>
          <Link href="#" color="#222222">About me</Link>
          <Link href="#" color="#222222">Works</Link>
          <Link href="#" color="#222222">Contact</Link>
          <Button colorPalette="teal" variant="solid" size="sm" onClick={() => navigate("/components")}>
            UI Components
          </Button>
        </HStack>
      </Flex>

      <Container maxW="900px" py={20}>

        {/* Encabezado de página */}
        <Heading size="5xl" color="#222222" mb={4}>Chakra UI Components</Heading>
        <Text fontSize="xl" color="#222222" mb={12} maxW="640px">
          Hey Edu, estos son los componentes de Chakra que tienes disponibles en este proyecto y cómo se ven por defecto.
        </Text>

        {/* ── Button ── */}
        <SectionCard
          title="Button"
          description="Elemento de acción principal. Admite variantes, tamaños y paletas de color."
        >
          <HStack gap={4} flexWrap="wrap">
            <Button colorPalette="blue">Primary</Button>
            <Button colorPalette="blue" variant="outline">Outline</Button>
            <Button colorPalette="blue" variant="ghost">Ghost</Button>
            <Button colorPalette="blue" variant="subtle">Subtle</Button>
            <Button colorPalette="blue" disabled>Disabled</Button>
          </HStack>
          <HStack gap={4} mt={4} flexWrap="wrap">
            <Button size="xs">XSmall</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </HStack>
        </SectionCard>

        {/* ── Checkbox ── */}
        <SectionCard
          title="Checkbox"
          description="Permite al usuario seleccionar una o varias opciones de una lista."
        >
          <Stack gap={3}>
            <Checkbox.Root>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label color="#222222">Acepto los términos y condiciones</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root defaultChecked>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label color="#222222">Quiero recibir novedades por email</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root disabled>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label color="#222222">Opción deshabilitada</Checkbox.Label>
            </Checkbox.Root>
          </Stack>
        </SectionCard>

        {/* ── Input ── */}
        <SectionCard
          title="Input"
          description="Campo de texto de una línea para capturar información del usuario."
        >
          <VStack gap={4} align="stretch" maxW="400px">
            <Input placeholder="Tu nombre completo" />
            <Input placeholder="tu@email.com" type="email" />
            <Input placeholder="Contraseña" type="password" />
            <Input placeholder="Campo deshabilitado" disabled />
          </VStack>
        </SectionCard>

        {/* ── Link ── */}
        <SectionCard
          title="Link"
          description="Elemento de navegación inline. Puede apuntar a URLs internas o externas."
        >
          <Stack gap={3}>
            <Text color="#222222">
              Visita la{" "}
              <Link href="#" color="#0371B7">documentación oficial</Link>{" "}
              de Chakra UI para más detalles.
            </Text>
            <Text color="#222222">
              También puedes ver ejemplos en{" "}
              <Link href="#" color="#0371B7" textDecoration="underline">este repositorio de GitHub</Link>.
            </Text>
            <HStack gap={6}>
              <Link href="#" color="#0371B7">Home</Link>
              <Link href="#" color="#222222">About</Link>
              <Link href="#" color="teal.500">Works</Link>
            </HStack>
          </Stack>
        </SectionCard>

        {/* ── Select ── */}
        <SectionCard
          title="Select"
          description="Menú desplegable para que el usuario elija una opción de una lista predefinida."
        >
          <VStack gap={4} align="stretch" maxW="300px">
            <SelectRoot collection={frameworks} size="md">
              <SelectTrigger>
                <SelectValueText placeholder="Elige un framework" />
              </SelectTrigger>
              <SelectContent>
                {frameworks.items.map((item) => (
                  <SelectItem key={item.value} item={item}>{item.label}</SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </VStack>
        </SectionCard>

        {/* ── Switch ── */}
        <SectionCard
          title="Switch"
          description="Control de palanca para activar o desactivar una opción binaria."
        >
          <Stack gap={4}>
            <HStack gap={4}>
              <Switch.Root>
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Label color="#222222">Notificaciones push</Switch.Label>
              </Switch.Root>
            </HStack>
            <HStack gap={4}>
              <Switch.Root defaultChecked>
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Label color="#222222">Modo oscuro</Switch.Label>
              </Switch.Root>
            </HStack>
            <HStack gap={4}>
              <Switch.Root disabled>
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                </Switch.Control>
                <Switch.Label color="#222222">Opción deshabilitada</Switch.Label>
              </Switch.Root>
            </HStack>
          </Stack>
        </SectionCard>

        {/* ── Textarea ── */}
        <SectionCard
          title="Textarea"
          description="Campo de texto multilínea para mensajes o descripciones largas."
        >
          <VStack gap={4} align="stretch" maxW="500px">
            <Textarea placeholder="Escribe tu mensaje aquí..." rows={4} />
            <Textarea placeholder="Campo deshabilitado" disabled rows={3} />
          </VStack>
        </SectionCard>

        {/* ── Tooltip ── */}
        <SectionCard
          title="Tooltip"
          description="Información contextual que aparece al pasar el cursor sobre un elemento."
        >
          <HStack gap={6} flexWrap="wrap">
            <Tooltip content="Este es el botón principal">
              <Button colorPalette="blue">Hover aquí</Button>
            </Tooltip>
            <Tooltip content="Arriba por defecto" positioning={{ placement: "top" }}>
              <Button variant="outline" color="#222222">Top</Button>
            </Tooltip>
            <Tooltip content="A la derecha" positioning={{ placement: "right" }}>
              <Button variant="outline" color="#222222">Right</Button>
            </Tooltip>
            <Tooltip content="A la izquierda" positioning={{ placement: "left" }}>
              <Button variant="outline" color="#222222">Left</Button>
            </Tooltip>
          </HStack>
        </SectionCard>

        {/* ── Estilos: Paleta de colores ── */}
        <Box bg="whiteAlpha.800" border="1px solid" borderColor="gray.200" borderRadius="xl" p={8} mb={8}>
          <Heading size="lg" color="#222222" mb={2}>Paleta de colores</Heading>
          <Text color="#222222" mb={6} opacity={0.7}>
            Colores disponibles en Chakra UI con sus escalas tonales.
          </Text>
          <Stack gap={4}>
            {[
              { name: "Blue", shades: ["blue.100", "blue.200", "blue.300", "blue.400", "blue.500", "blue.600", "blue.700", "blue.800"] },
              { name: "Teal", shades: ["teal.100", "teal.200", "teal.300", "teal.400", "teal.500", "teal.600", "teal.700", "teal.800"] },
              { name: "Gray", shades: ["gray.100", "gray.200", "gray.300", "gray.400", "gray.500", "gray.600", "gray.700", "gray.800"] },
              { name: "Red", shades: ["red.100", "red.200", "red.300", "red.400", "red.500", "red.600", "red.700", "red.800"] },
              { name: "Green", shades: ["green.100", "green.200", "green.300", "green.400", "green.500", "green.600", "green.700", "green.800"] },
            ].map(({ name, shades }) => (
              <Box key={name}>
                <Text fontSize="sm" fontWeight="semibold" color="#222222" mb={2}>{name}</Text>
                <HStack gap={1}>
                  {shades.map((shade) => (
                    <Box key={shade} bg={shade} w={10} h={10} borderRadius="md" title={shade} />
                  ))}
                </HStack>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* ── Estilos: Escala tipográfica ── */}
        <Box bg="whiteAlpha.800" border="1px solid" borderColor="gray.200" borderRadius="xl" p={8} mb={8}>
          <Heading size="lg" color="#222222" mb={2}>Escala tipográfica</Heading>
          <Text color="#222222" mb={6} opacity={0.7}>
            Tamaños de texto disponibles en Chakra UI.
          </Text>
          <Stack gap={3}>
            {[
              { size: "xs", label: "xs — 12px" },
              { size: "sm", label: "sm — 14px" },
              { size: "md", label: "md — 16px" },
              { size: "lg", label: "lg — 18px" },
              { size: "xl", label: "xl — 20px" },
              { size: "2xl", label: "2xl — 24px" },
              { size: "3xl", label: "3xl — 30px" },
              { size: "4xl", label: "4xl — 36px" },
            ].map(({ size, label }) => (
              <Text key={size} fontSize={size} color="#222222">{label} — The quick brown fox jumps over the lazy dog</Text>
            ))}
          </Stack>
        </Box>

        {/* ── Estilos: Spacing ── */}
        <Box bg="whiteAlpha.800" border="1px solid" borderColor="gray.200" borderRadius="xl" p={8} mb={8}>
          <Heading size="lg" color="#222222" mb={2}>Spacing</Heading>
          <Text color="#222222" mb={6} opacity={0.7}>
            Valores de spacing más comunes (1 unidad = 4px).
          </Text>
          <Stack gap={3}>
            {[1, 2, 4, 6, 8, 12, 16, 20, 24].map((n) => (
              <HStack key={n} gap={4} align="center">
                <Text fontSize="sm" color="#222222" w="20" flexShrink={0}>{n} — {n * 4}px</Text>
                <Box bg="#0371B7" h={4} w={n * 4 + "px"} borderRadius="sm" />
              </HStack>
            ))}
          </Stack>
        </Box>

      </Container>
    </Box>
  )
}

export default ChakraComponents
