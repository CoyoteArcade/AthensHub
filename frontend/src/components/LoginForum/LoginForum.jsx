import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Box, Paper, Group, Button, Divider, Stack } from '@mantine/core';
import classes from './LoginForum.module.css';

function LoginForum(props) {
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      username: (val) => (!val ? 'Username is required' : null),
      password: (val) => (!val ? 'Password is required' : null),
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <div style={{ display: 'flex', flexDirection: 'row' }}> {/* Parent flex container */}
        <div className={classes.labels}> {/* Flex container for the text */}
            <Box className={classes.box}>
                <h3>Login</h3>
                <p>Login to AthensHub! Continue learning and sharing knowledge with people from all over the world, using free and open-source educational resources.</p>
            </Box>
            <Divider mt="sm" mb="md" />
            <Box className={classes.box}>
                {/*eslint-disable-next-line react/no-unescaped-entities*/}
                <p>Don't have an account? <a href="/register">Register</a></p>
            </Box>
        </div>

        <Divider mt="sm" mb="md" />

        <div className={classes.form}> {/* Flex container for the form */}
          <form className={classes.fullWidth} onSubmit={form.onSubmit(() => {})}>
            <Stack align='stretch'>
              <TextInput
                required
                label="Username"
                placeholder="Username"
                value={form.values.username}
                onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
                error={form.errors.username && 'Username is required'}
                radius="md"
              />

              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                value={form.values.password}
                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                error={form.errors.password && 'Password is required'}
                radius="md"
              />
            </Stack>

            <Group justify="space-between" mt="xl">
              <Button type="submit" radius="xl">
                Login
              </Button>
            </Group>
          </form>
        </div>
      </div>
    </Paper>
  );
}

export default LoginForum;