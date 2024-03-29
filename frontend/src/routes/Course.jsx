/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {
  Box,
  Breadcrumbs,
  Anchor,
  Title,
  Container,
  Divider,
  rem,
  Text,
  Tabs,
  List,
  Group,
  Stack,
  Grid,
  Radio,
  TypographyStylesProvider,
} from '@mantine/core';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import {
  IconBooks,
  IconPencilQuestion,
  IconSocial,
  IconDownload,
  IconWorld,
} from '@tabler/icons-react';

function Course() {
  const data = useLoaderData();
  console.log(data);
  const {
    name,
    summary,
    downloadLink,
    bookLink,
    subject,
    chapters,
    tableOfContents,
  } = data;
  return (
    <>
      <Container size='70vw'>
        {/* Navigation */}
        <Breadcrumbs separator='→' separatorMargin='md' mt='xl' mb='4rem'>
          <Link
            to={'/subjects'}
            style={{ textDecoration: 'none' }}
            key={subject}
          >
            {subject}
          </Link>
          <Link
            to={`/courses/${encodeURI(name)}`}
            style={{ textDecoration: 'none' }}
            key={name}
          >
            {name}
          </Link>
        </Breadcrumbs>

        {/* Course Name & Tabs */}
        <Title mt='lg' mb='md'>
          {name}
        </Title>
        <CourseTabs data={data} />
      </Container>
    </>
  );
}

function CourseTabs({ data }) {
  const iconStyle = { width: rem(14), height: rem(14) };

  return (
    <Tabs color='gray' defaultValue='material'>
      <Tabs.List>
        <Tabs.Tab
          value='material'
          leftSection={<IconBooks style={iconStyle} />}
        >
          Course Material
        </Tabs.Tab>
        <Tabs.Tab
          value='psets'
          leftSection={<IconPencilQuestion style={iconStyle} />}
        >
          Problem Sets
        </Tabs.Tab>
        <Tabs.Tab
          value='social'
          leftSection={<IconSocial style={iconStyle} />}
          disabled
        >
          Social
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value='material'>
        <MaterialTab data={data} />
      </Tabs.Panel>

      <Tabs.Panel value='psets'>
        <PsetTab data={data} />
      </Tabs.Panel>

      <Tabs.Panel value='social'>
        <SocialTab />
      </Tabs.Panel>
    </Tabs>
  );
}

function MaterialTab({ data }) {
  const iconStyle = { width: rem(14), height: rem(14) };

  return (
    <>
      <Grid p='20px'>
        <Grid.Col span={6}>
          {/* Textbook Section */}
          <Box pt='30px' mb='5rem'>
            <Title order={2}>Textbook</Title>
            <Divider my='md' />

            {/* Book Name */}
            <Text ta='left' mb='xs' size='lg' fs='italic'>
              {data.name}
            </Text>

            <List listStyleType='none'>
              <List.Item>
                <Group>
                  <IconDownload style={iconStyle} />
                  <Anchor href={data.downloadLink} target='_blank'>
                    PDF Download
                  </Anchor>
                </Group>
              </List.Item>
              <List.Item>
                <Group>
                  <IconWorld style={iconStyle} />
                  <Anchor href={data.bookLink} target='_blank'>
                    Online Version
                  </Anchor>
                </Group>
              </List.Item>
            </List>
          </Box>

          {/* Summary Section */}
          <Box mb='5rem'>
            <Title order={2}>Summary</Title>
            <Divider my='md' />
            {data.summary}
          </Box>
        </Grid.Col>

        {/* Table of Contents */}
        <Grid.Col span={4} offset={2} maw='400px'>
          <Box pt='30px' mb='5rem'>
            <Title order={2}>Table&nbsp;of&nbsp;Contents</Title>
            <Divider my='md' />
            <TypographyStylesProvider>
              <List listStyleType='ordered' p='0'>
                {data.tableOfContents.map((chapter, idx) => {
                  return (
                    <List.Item key={chapter.chapter}>
                      {chapter.chapter}
                      <List listStyleType='ordered'>
                        {chapter.sections.map((section, idx) => {
                          return <List.Item key={section}>{section}</List.Item>;
                        })}
                      </List>
                    </List.Item>
                  );
                })}
              </List>
            </TypographyStylesProvider>
          </Box>
        </Grid.Col>
      </Grid>
    </>
  );
}

// Problem Sets Tab
function PsetTab({ data }) {
  /*
   ** PSET MOCK DATA (Replace with real data)
   */
  console.log('pset data', data);
  const pset_data = [
    {
      chapter: 'Chapter 1: Temperature and Heat',
      problems: [
        {
          question:
            'If you leave a glass of water outdoors during winter night, it will freeze eventually due to:',
          choices: ['Radiation', 'Evaporation', 'Condensation', 'Convection'],
          answer: 'Radiation',
        },
        {
          question: 'When a substance is heated, what happens to its particles',
          choices: [
            'They slow down and move closer together',
            'They speed up and move farther apart',
            'They stay at the same speed and distance from each other',
            'They become denser and heavier',
          ],
          answer: 'They speed up and move farther apart',
        },
      ],
    },

    {
      chapter: 'Chapter 2: The Kinetic Theory of Gases',
      problems: [
        {
          question:
            'What is the basic assumption of the kinetic theory of gases regarding the behavior of gas particles',
          choices: [
            'Gas particles are stationary and do not move.',
            'Gas particles attract each other and form clusters.',
            'Gas particles are in constant random motion and collide with each other and the walls of the container.',
            'Gas particles repel each other and spread out uniformly throughout the container.',
          ],
          answer:
            'Gas particles are in constant random motion and collide with each other and the walls of the container.',
        },
        {
          question:
            'Which statement about the average kinetic energy of gas particles is true according to the kinetic theory of gases?',
          choices: [
            'The average kinetic energy of gas particles depends on the mass of the particles.',
            'The average kinetic energy of gas particles is directly proportional to the volume of the container.',
            'The average kinetic energy of gas particles is independent of the identity of the gas.',
            'The average kinetic energy of gas particles is zero since they spend most of their time at rest.',
          ],
          answer:
            'The average kinetic energy of gas particles depends on the mass of the particles.',
        },
      ],
    },

    {
      chapter: 'Chapter 3: The First Law of Thermodynamics',
      problems: [
        {
          question:
            'Which of the following statements best expresses the first law of thermodynamics?',
          choices: [
            'Energy can be created or destroyed.',
            'Heat always flows from a hotter body to a cooler one.',
            'The total energy of an isolated system remains constant over time.',
            'Work done on a system increases its internal energy.',
          ],
          answer: 'Work done on a system increases its internal energy.',
        },
        {
          question:
            'When a gas expands reversibly and adiabatically, which of the following quantities remains constant?',
          choices: ['Temperature', 'Pressure', 'Volume', 'Internal energy'],
          answer: 'Temperature',
        },
        {
          question:
            'Consider a cylinder fitted with a piston containing a gas, and let Q represent the amount of heat transferred to the gas, W the work done by the gas, and U the internal energy of the gas. If the initial state and final state of the gas are both known, then which of the following expressions correctly calculates the net work done during the process?',
          choices: [
            'W = Q - U_final + U_initial',
            'W = Q + U_final - U_initial',
            'W = Q - (U_final - U_initial)',
            'W = Q * (U_final - U_initial)',
          ],
          answer: 'W = Q - (U_final - U_initial)',
        },
      ],
    },
  ];

  const chapter_names = data.chapters.map((pset_group) => {
    return pset_group.name;
  });

  // Tab Names
  const ch_tab_names = chapter_names
    ? chapter_names.map((chapter) => {
        return (
          <Tabs.Tab value={chapter} key={chapter}>
            {chapter}
          </Tabs.Tab>
        );
      })
    : [];

  // Tab Content
  const ch_tab_content = data.chapters.map((pset_group) => {
    // Problems per Chapter
    let randomQIndex = Math.floor(Math.random() * pset_group.questions.length);
    const problem = pset_group.questions[randomQIndex];
    const problemElement = (
      <Box>
        {/* Question */}
        <Text my='md' ta='left'>
          {problem.question}
        </Text>

        {/* Answer Choices */}
        <Radio.Group name={`q${randomQIndex + 1}`}>
          <Stack mt='xs'>
            {problem.choices.map((choice) => {
              return <Radio value={choice} variant='outline' label={choice} />;
            })}
          </Stack>
        </Radio.Group>
      </Box>
    );

    return (
      <Tabs.Panel value={pset_group.name || ''}>
        <Box component='form' px='50px'>
          <Title order={2} mb='md'>
            {pset_group.name}
          </Title>
          <Stack gap='lg'>{problemElement}</Stack>
        </Box>
      </Tabs.Panel>
    );
  });

  return (
    <Group py='3rem' wrap='nowrap'>
      {/* PSET Vertical Sidebar Tabs */}
      <Tabs
        defaultValue={chapter_names[0]}
        orientation='vertical'
        placement='left'
        m='auto'
      >
        {/* Tab Names */}
        <Tabs.List>{ch_tab_names}</Tabs.List>

        {/* Tab Content */}
        {ch_tab_content}
      </Tabs>
    </Group>
  );
}

// Social Forum Tab
function SocialTab() {
  return <>Social</>;
}

export default Course;
