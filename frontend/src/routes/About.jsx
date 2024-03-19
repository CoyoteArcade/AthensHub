import {
  Container,
  Box,
  Text,
  Title,
  Overlay,
  Group,
  Stack,
  Image,
} from '@mantine/core';
import classes from '../components/AboutUs/AboutUs.module.css';
const aboutText = `
  At the heart of AthensHub lies a transformative idea: quality education should be a universal right, not a privilege. This vision led to the creation of AthensHub, a dynamic platform engineered to democratize access to learning for everyone, with a special focus on reaching underserved communities. Our initiative is fueled by a commitment to bridge the educational divide, incorporating the prowess of OpenAI's advanced technology and OpenStax's wealth of open-source academic content.
  
  We envision a world where the barrier to education is not the scarcity of resources but the abundance of shared knowledge. AthensHub stands as a testament to this belief, operating not just as a platform, but as a community-driven movement that fosters collaborative learning and knowledge exchange through a peer-supported network. Our innovative approach not only leverages cutting-edge AI technology for efficient resource gathering but also integrates OpenStax's comprehensive educational materials, making a wide range of subjects easily accessible to our users.
  
  AthensHub is more than a mere platform; it's a beacon of hope for inclusive and accessible education across the globe. Whether you're a learner, educator, or volunteer, AthensHub offers you a place to contribute, learn, and grow. Together, we aim to make quality education accessible to all, transcending geographical boundaries and creating endless possibilities for the future.`;

export default function About() {
  return (
    <Box className={classes.wrapper}>
      <Overlay opacity={0.4} zIndex={1} />
      <Container
        h='100%'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* About Text */}
        <Group style={{ zIndex: '2' }} justify='center'>
          <Stack>
            <Title
              style={{
                textAlign: 'center',
                color: 'var(--mantine-color-white)',
              }}
            >
              About AthensHub
            </Title>
            <Image
              m='auto'
              radius='md'
              w={400}
              src='src/assets/athenshub.png'
            />
            <Text
              style={{
                textAlign: 'left',
                lineHeight: '2',
                padding: '50px',
                fontSize: '15px',
                fontWeight: '500',
                color: 'var(--mantine-color-white)',
              }}
            >
              {aboutText}
            </Text>
          </Stack>
        </Group>
      </Container>
    </Box>
  );
}
