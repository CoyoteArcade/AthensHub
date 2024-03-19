import {
  TextInput,
  Group,
  rem,
  Button,
  Text,
  Autocomplete,
  useComputedColorScheme,
} from '@mantine/core';
import { IconSearch, IconHome, IconBook, IconLogin } from '@tabler/icons-react';
import classes from './Header.module.css';
import DarkMode from '../DarkModeToggle/DarkMode.jsx';
import { useColorScheme } from '@mantine/hooks';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/subjects', label: 'Courses' },
  { link: '/login', label: 'Login' },
];

export function HeaderSearch() {
  const courses = useLoaderData();
  console.log('courses', courses);

  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });
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
      radius='lg'
      leftSection={
        link.label === 'Courses' ? (
          <IconBook style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
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
        justify={signIn ? 'center' : 'space-between'}
        className={classes.inner}
      >
        {/* Logo */}
        <Group gap={0}>
          <Link
            to='/'
            style={{
              textDecoration: 'none',
              color: 'var(--mantine-color-dark)',
            }}
          >
            <Text size='35px' fw={700}>
              ATHENS
              <Text
                component='span'
                fw={500}
                c={
                  computedColorScheme === 'dark'
                    ? 'athens-blue.5'
                    : 'athens-blue.7'
                }
              >
                HUB
              </Text>
            </Text>
          </Link>
        </Group>

        {!signIn && (
          <>
            {/* Nav Buttons */}
            <Group gap='lg'>{items}</Group>

            {/* Searchbar */}
            <Autocomplete
              placeholder='Search courses'
              limit={5}
              radius='20px'
              onChange={handleSearchChange}
              data={courses.map((course) => {
                return course.name;
              })}
              onOptionSubmit={(option) => {
                handleCourseClick(option);
              }}
            />

            {/* Darkmode & Login Buttons */}
            <Group>
              <DarkMode />
              <Button
                key={links[links.length - 1].label}
                // href={links[links.length - 1].link}
                component={Link}
                to={links[links.length - 1].link}
                className={classes.link}
                // onClick={(event) => event.preventDefault()}
                variant={'filled'}
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
            </Group>
          </>
        )}
      </Group>
    </header>
  );
}
