import { Container, Box } from '@mantine/core';
import classes from '../components/AboutUs/AboutUs.module.css';
const aboutText =
  `About AthensHub.

  At the heart of AthensHub lies a transformative idea: quality education should be a universal right, not a privilege. Born from a commitment to bridge the educational divide, AthensHub is a dynamic platform designed to democratize access to learning for everyone, with a special focus on reaching underserved communities.
  
  We envision a world where the barrier to education is not the scarcity of resources but the abundance of shared knowledge. AthensHub is more than just a platform; it's a community-driven movement fostering collaborative learning and knowledge exchange through a peer-supported network. Our innovative approach leverages cutting-edge AI technology for resource gathering, enabling users to easily find open-source educational materials on a wide range of subjects.
  
  AthensHub is more than a platform; it's a beacon of hope for inclusive and accessible education around the globe. Whether you're a learner, educator, or volunteer, you have a place here. Together, let's make quality education accessible to all, transcending boundaries and creating endless possibilities for the future.

  Welcome to AthensHub, where learning knows no limits.`;

export default function About() {
  return (
    <Box className={classes.wrapper}>
      <Container
        h="100%"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ textAlign: 'center', color: 'black' }}> About AthensHub</h1>
        <p style={{ lineHeight: '2', padding: '40px', fontSize: '15px', fontWeight: '500', color: 'black' }}>{aboutText}</p>
      </Container>
    </Box>
  );
}
