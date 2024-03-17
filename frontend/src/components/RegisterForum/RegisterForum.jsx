import { TextInput, PasswordInput, Paper, Title, Text, Button, Group, Box } from '@mantine/core';

function RegisterForum() {
  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <Title order={2} align="center" mb="lg">Sign Up For AthensHub</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Name"
          placeholder="Full Name"
          required
        />

        <TextInput
          label="Username"
          placeholder="Username"
          mt="md"
          required
        />

        <TextInput
          label="Email"
          placeholder="Your email"
          mt="md"
          required
        />

        <PasswordInput
          label="Password"
          placeholder="Password"
          mt="md"
          required
        />

        <PasswordInput
          label="Confirm Password"
          placeholder="Password"
          mt="md"
          required
        />

        <Group position="right" mt="md">
          <Button variant="outline">Login</Button>
          <Button type="submit">Register</Button>
        </Group>
      </Paper>

      <Text align="center" mt="md">
        Password Rules:
        <ul>
          <li>Must be at least 8 characters in length.</li>
          <li>Must include a lowercase and uppercase letter.</li>
          <li>Must include a number.</li>
          <li>Must include a special character.</li>
        </ul>
      </Text>
    </Box>
  );
}

export default RegisterForum;
