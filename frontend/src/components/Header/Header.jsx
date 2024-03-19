import {
  TextInput,
  Group,
  rem,
  Button,
  Text,
  Autocomplete,
} from '@mantine/core';
import { IconSearch, IconHome, IconBook, IconLogin } from '@tabler/icons-react';
import classes from './Header.module.css';
import DarkMode from '../DarkModeToggle/DarkMode.jsx';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' },
  { link: '/subjects', label: 'Subjects' },
  { link: '/about', label: 'About' },
  { link: '/login', label: 'Login' },
];

export function HeaderSearch() {
  const courses = useLoaderData();

  console.log('courses', courses);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(''); // For search input
  const [filteredCourses, setFilteredCourses] = useState([]); // For filtered dropdown results
  const [showDropdown, setShowDropdown] = useState(false); // To show/hide dropdown

  // Update filteredLinks based on search input
  useEffect(() => {
    if (searchValue) {
      const filtered = Object.values(courses)
        .flat()
        .filter((course) =>
          course.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      setFilteredCourses(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [searchValue, courses]);

  // Handle search input changes
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Function to handle clicking on a course
  const handleCourseClick = (courseName) => {
    setSearchValue('');
    setShowDropdown(false);
    navigate(`/courses/${encodeURI(courseName)}`); // Assuming your course URLs are like '/courses/course-name'
  };

  const signIn =
    location.pathname === '/login' || location.pathname === '/register';
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
        ) : link.label === 'About' ? (
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
      <Group
        justify={signIn ? 'center' : 'space-around'}
        className={classes.inner}
      >
        <Group gap={0}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Text size='30px' fw={600}>
              ATHENS
            </Text>
            <Text size='30px' c='athens-blue.6' fw={400}>
              HUB
            </Text>
          </Link>
        </Group>
        {!signIn && (
          <>
            {items}
            <Autocomplete
              placeholder='Search courses'
              limit={5}
              onChange={handleSearchChange}
              data={courses.map((course) => {
                return course.name;
              })}
              onOptionSubmit={(option) => {
                handleCourseClick(option);
              }}
            />
            {/* <TextInput
              value={searchValue}
              onChange={handleSearchChange}
              radius={'lg'}
              className={classes.search}
              placeholder='Search courses'
              leftSection={
                <IconSearch
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
              style={{ position: 'relative' }}
            /> */}
            {/* {showDropdown && (
              <div
                style={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  width: '30%',
                  top: '0px',
                  left: '0px',
                  zIndex: '100',
                }}
              >
                {filteredCourses.map((course) => (
                  <div
                    key={course.name}
                    onClick={() => handleCourseClick(course.name)}
                    style={{ padding: '10px', cursor: 'pointer' }}
                  >
                    {course.name}
                  </div>
                ))}
              </div>
            )} */}

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
