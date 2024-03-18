import { TextInput, Group, rem, Title, Button, Text } from '@mantine/core';
import { IconSearch, IconHome, IconBook, IconLogin } from '@tabler/icons-react';
import classes from './Header.module.css';
import DarkMode from '../DarkModeToggle/DarkMode.jsx';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' },
  { link: '/subjects', label: 'Subjects' },
    { link: '/about', label: 'About'},
  { link: '/login', label: 'Login' },
];

export function HeaderSearch() {
  const location = useLocation();
  const signIn = location.pathname === '/login' || location.pathname === '/register';
  console.log(location);
  const items = links.slice(0, links.length - 1).map((link) => (
    <Button
      key={link.label}
      component={Link}
      to={link.link}
      // href={link.link}
      className={classes.link}
      // onClick={(event) => event.preventDefault()}
      variant={link.label === 'Login' ? 'filled' : 'outline'}
      color={'#21343d'}
      radius='lg'
      leftSection={
        link.label === 'Home' ? (
          <IconHome style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        ) : link.label === 'Subjects' ? (
          <IconBook style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        ) : link.label === 'About' ?(
          <IconHome style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
        ) : (
          ''
        )
      }
    >
      {link.label}
    </Button>
  ));

  return (
    <header className={classes.header}>
      <Group justify={signIn ? "center" : "space-around"} className={classes.inner}>
        <Group gap={0}>
          <Link to='/' style={{ textDecoration: "none" }}>
            <Text size='30px' fw={600}>
              ATHENS
            </Text>
            <Text size='30px' c='athens-blue.6' fw={400}>
              HUB
            </Text>
          </Link>
        </Group>
        {!(signIn) && (
          <>
            {items}
            <TextInput
              radius={'lg'}
              className={classes.search}
              placeholder='Search'
              leftSection={
                <IconSearch
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
            />
            <DarkMode />

            <Button
              key={links[links.length - 1].label}
              // href={links[links.length - 1].link}
              component={Link}
              to={links[links.length - 1].link}
              className={classes.link}
              // onClick={(event) => event.preventDefault()}
              variant={'filled'}
              color={'#ffffff'}
              radius='lg'
              leftSection={
                <IconLogin
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
              label={links[links.length - 1].label}
            >
              {links[links.length - 1].label}
            </Button>
          </>
        )}
      </Group>
    </header>
  );
}
