import { Breadcrumbs, Anchor, Title } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

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
      <Breadcrumbs separator='→' separatorMargin='md' mt='xs'>
        {items}
      </Breadcrumbs>
      <Title>Physics</Title>
    </>
  );
}

export default Course;
