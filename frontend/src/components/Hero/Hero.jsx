import cx from 'clsx';
import { Title, Text, Container, Button, Overlay, rem } from '@mantine/core';
import classes from './Hero.module.css';
import { IconBook, IconLogin } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay opacity={0.3} zIndex={1} />

      <div className={classes.inner}>
        {/* Hero Title */}
        <Title className={classes.title} order={1}>
          Welcome to AthensHub!
        </Title>

        {/* Hero Description */}
        <Container size={640}>
          <Text size='md' className={classes.description}>
            Learn and share knowledge with people from all over the world using
            free and open-source educational resources.
          </Text>
        </Container>

        {/* Hero Buttons */}
        <div className={classes.controls}>
          <Button
            className={classes.control}
            component={Link}
            to='/subjects'
            radius='20px'
            variant='white'
            size='lg'
            leftSection={
              <IconBook
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Courses
          </Button>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size='lg'
            variant='filled'
            radius='20px'
            component={Link}
            to='/login'
            leftSection={
              <IconLogin
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
