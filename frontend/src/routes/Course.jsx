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
  Grid,
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
  const { name, summary, downloadLink, bookLink, subject, chapters, tableOfContents } = data;
  return (
    <>
      <Container size='75vw'>
        {/* Navigation */}
        <Breadcrumbs separator='→' separatorMargin='md' mt='sm' mb='xl'>
          <Link to={'/subjects'} style={{ textDecoration: 'none' }} key={subject}>
            {subject}
          </Link>
          <Link to={`/courses/${encodeURI(name)}`} style={{ textDecoration: 'none' }} key={name}>
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

function CourseTabs({data}) {
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
        <PsetTab />
      </Tabs.Panel>

      <Tabs.Panel value='social'>
        <SocialTab />
      </Tabs.Panel>
    </Tabs>
  );
}

function MaterialTab({data}) {
  const iconStyle = { width: rem(14), height: rem(14) };

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          {/* Textbook Section */}
          <Box pt='30px' mb='5rem'>
            <Title order={2}>Textbook</Title>
            <Divider my='md' />

            {/* Book Name */}
            <Text mb='xs' size='lg' fs='italic'>
              {name}
            </Text>

            <List listStyleType='none'>
              <List.Item>
                <Group>
                  <IconDownload style={iconStyle} />
                  <Anchor
                    href={data.downloadLink}
                    target='_blank'
                  >PDF Download</Anchor>
                </Group>
              </List.Item>
              <List.Item>
                <Group>
                  <IconWorld style={iconStyle} />
                  <Anchor
                    href={data.bookLink}
                    target='_blank'
                  >
                    Online Version
                  </Anchor>
                </Group>
              </List.Item>
            </List>
          </Box>

          {/* Summary Section */}
          <Box pt='30px' mb='5rem'>
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
              <div
                dangerouslySetInnerHTML={{
                  __html: `<!DOCTYPE html>
                        <html>
                        <head>
                          <title>Table of Contents</title>
                        </head>
                        <body>
                          <h3>Chapter 1: Temperature and Heat</h2>
                          <ul>
                            <li>1.1 Temperature and Thermal Equilibrium</li>
                            <li>1.2 Thermometers and Temperature Scales</li>
                            <li>1.3 Thermal Expansion</li>
                            <li>1.4 Heat Transfer Specific Heat and Calorimetry</li>
                            <li>1.5 Phase Changes</li>
                            <li>1.6 Mechanisms of Heat Transfer</li>
                          </ul>

                          <h3>Chapter 2: The Kinetic Theory of Gases</h2>
                          <ul>
                            <li>2.1 Molecular Model of an Ideal Gas</li>
                            <li>2.2 Pressure</li>
                            <li>2.3 Kinetic Energy and Temperature</li>
                            <li>2.4 Root-Mean-Square Speed</li>
                            <li>2.5 Molecular Speeds</li>
                          </ul>

                          <h3>Chapter 3: The First Law of Thermodynamics</h2>
                          <ul>
                            <li>3.1 Work and Heat Transfer</li>
                            <li>3.2 Internal Energy</li>
                            <li>3.3 The First Law of Thermodynamics</li>
                            <li>3.4 Some Applications of the First Law of Thermodynamics</li>
                          </ul>

                          <h3>Chapter 4: The Second Law of Thermodynamics</h2>
                          <ul>
                            <li>4.1 Heat Engines and the Second Law of Thermodynamics</li>
                            <li>4.2 Thermal Efficiency</li>
                            <li>4.3 Refrigerators and Heat Pumps</li>
                            <li>4.4 Power and Refrigeration Applications of Thermodynamics</li>
                          </ul>

                          <h3>Chapter 5: Electric Charges and Fields</h2>
                          <ul>
                            <li>5.1 Electric Charge</li>
                            <li>5.2 Conductors and Insulators</li>
                            <li>5.3 Coulomb's Law</li>
                            <li>5.4 Electric Field</li>
                            <li>5.5 Electric Field Lines</li>
                          </ul>

                          <!-- Repeat the above structure for each chapter -->

                        </body>
                        </html>`,
                }}
              />
            </TypographyStylesProvider>
          </Box>
        </Grid.Col>
      </Grid>
    </>
  );
}

function PsetTab() {
  return <>Psets</>;
}

function SocialTab() {
  return <>Social</>;
}

export default Course;
