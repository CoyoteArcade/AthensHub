import {
  Breadcrumbs,
  Anchor,
  Title,
  Container,
  Divider,
  rem,
  Tabs,
} from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from '@tabler/icons-react';

const items = [
  { title: 'Science', link: '/subjects' },
  { title: 'Physics', link: '/courses/algebra' },
].map((item, index) => (
  <Link to={item.link} style={{ textDecoration: 'none' }} key={item.title}>
    {item.title}
  </Link>
));

function Course() {
  return (
    <>
      <Container>
        <Breadcrumbs separator='→' separatorMargin='md' mt='xs' mb='md'>
          {items}
        </Breadcrumbs>
        <Title mb='lg'>Physics</Title>
        {/* <Divider my='lg' /> */}

        {/* Tabs */}
        <CourseTabs />
      </Container>
    </>
  );
}

function CourseTabs() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs color='gray' defaultValue='material'>
      <Tabs.List>
        <Tabs.Tab
          value='material'
          leftSection={<IconPhoto style={iconStyle} />}
        >
          Course Material
        </Tabs.Tab>
        <Tabs.Tab
          value='psets'
          leftSection={<IconMessageCircle style={iconStyle} />}
        >
          Problem Sets
        </Tabs.Tab>
        <Tabs.Tab
          value='social'
          leftSection={<IconSettings style={iconStyle} />}
          disabled
        >
          Social
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value='material'>
        <MaterialTab />
      </Tabs.Panel>

      <Tabs.Panel value='psets'>
        <PsetTab />
      </Tabs.Panel>

      <Tabs.Panel value='social'>
        <SocialTab />
      </Tabs.Panel>
    </Tabs>
  );
}

function MaterialTab() {
  return <>Material</>;
}

function PsetTab() {
  return <>Psets</>;
}

function SocialTab() {
  return <>Social</>;
}

export default Course;
