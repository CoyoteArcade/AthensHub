import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './FeatureCards.module.css';

const mockdata = [
  {
    title: 'Innovation at the Heart: AI-Powered Education',
    description:
      'Imagine a place where learning knows no boundaries, where an AI assistant can instantly provide open-source educational resources on any topic. AthensHub makes this a reality, offering tailored learning materials at your fingertips, breaking down barriers to education.',
    icon: IconGauge,
  },
  {
    title: 'AthensHub: Unleashing Potential Through Collaborative Learning',
    description:
      'In a world where education can define futures, access remains uneven. EduShare bridges this gap, turning the dream of universal education into reality, especially for underserved communities. At its core, EduShare is more than just a platform; it’s a movement towards equitable learning through collaboration and shared knowledge.',
    icon: IconUser,
  },
  {
    title: 'AthensHub: Where Education Meets Empowerment',
    description:
      "By focusing on underserved communities, EduShare doesn't just educate; it empowers. It’s about creating opportunities, fostering resilience, and building a brighter future through shared knowledge. Join us in making education accessible for everyone, everywhere.",
    icon: IconCookie,
  },
];

export default function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow='md'
      radius='md'
      className={classes.card}
      padding='xl'
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors['athens-blue'][6]}
      />
      <Text fz='lg' fw={500} className={classes.cardTitle} mt='md'>
        {feature.title}
      </Text>
      <Text fz='sm' c='dimmed' mt='sm'>
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size='lg' py='xl'>
      <Group justify='center'>
        <Badge variant='filled' size='lg'>
          Best Learning Platform Ever
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta='center' mt='sm'>
        Collaborative Learning Platform for Underserved Communities
      </Title>

      <Text c='dimmed' className={classes.description} ta='center' mt='md'>
        AthensHub focuses on making quality education accessible to everyone,
        especially targeting underserved communities. It facilitates
        collaborative learning and knowledge sharing through a peer-supported
        network.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing='xl' mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
