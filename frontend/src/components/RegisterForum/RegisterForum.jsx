import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Box, Paper, Group, Button, Divider, Stack } from '@mantine/core';
import classes from './RegisterForum.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { register } from '../../auth/auth';

function RegisterForum(props) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      username:'',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => {
      if (val.length <= 8) {    
        return 'Password should include at least 8 characters';
      } else if (!/[a-z]/.test(val)) {
        return 'Password should include at least one lowercase letter';
      } else if (!/[A-Z]/.test(val)) {
        return 'Password should include at least one uppercase letter';
      } else if (!/[!@#$%^&*]/.test(val)) {
        return 'Password should include at least one special character (!@#$%^&*)';
      } else {
        return null;
      }
    },
      confirmPassword: (val, values) => (val !== values.password ? 'Passwords do not match' : null), // Changed the error message
    },
  });

  const handleFormSubmit = (values) => {
  // Here, you can call any function that registers the user and returns a promise
  // For example, if you're using Firebase Authentication, you can call firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
    register(values.email, values.password, values.username)
      .then((user) => {
        // The user has been registered and is signed in!
        // userCredential.user will contain information about the newly registered user
        setUser({
          email: values.email,
          name: values.name,
          username: values.username,
          // Include any other fields from the form that you want to store in the user object
        });
        console.log("User registered:", user);
        window.alert("You have successfully registered!");
        navigate('/login')
      })
      .catch((error) => {
        // An error occurred while trying to register the user
        console.error("Error registering new user:", error);
    });
  }

  return (
    <div className={classes.wrapper}>
    <Paper radius="md" p="xl" withBorder {...props}>
      <div style={{ display: 'flex', flexDirection: 'row' }}> {/* Parent flex container */}
        <div className={classes.labels}> {/* Flex container for the text */}
          <Box className={classes.box}>
            <h3>Register</h3>
            <p>Join AthensHub! Start learning and sharing knowledge with people from all over the world, using free and open-source educational resources.</p>
          </Box>
          <Divider mt="sm" mb="md" />
          <Box className={classes.box}>
            <h3>Password Rules</h3>
            <li>Your password should include at least 8 characters.</li>
            <li>Your password should include at least one lowercase letter.</li>
            <li>Your password should include at least one uppercase letter.</li>
            <li>Your password should include at least one special character (!@#$%^&*).</li>
          </Box>
          <Divider mt="sm" mb="md" />
          <Box className={classes.box}>
            <p>Already have an account? <a href="/login">Login</a></p>
          </Box>
        </div>

        <Divider mt="sm" mb="md" />

        <div className={classes.form}> {/* Flex container for the form */}
          <form className={classes.fullWidth} onSubmit={form.onSubmit(() => {handleFormSubmit(form.values)})}>
            <Stack align='stretch'>
              <TextInput
                required
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                radius="md"
              />

              <TextInput
                required
                label="Username"
                placeholder="Username"
                value={form.values.username}
                onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
                radius="md"
              />

              <TextInput
                required
                label="Email"
                placeholder="Email address"
                value={form.values.email}
                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                error={form.errors.email && 'Invalid email'}
                radius="md"
              />
              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                value={form.values.password}
                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                error={form.errors.password && (
                  form.errors.password.length <= 8 ? 'Password should include at least 8 characters' :
                  !/[a-z]/.test(form.errors.password) ? 'Password should include at least one lowercase letter' :
                  !/[A-Z]/.test(form.errors.password) ? 'Password should include at least one uppercase letter' :
                  !/[!@#$%^&*]/.test(form.errors.password) ? 'Password should include at least one special character (!@#$%^&*)' :
                  null
                )}
                radius="md"
              />

              <PasswordInput
                required
                label="Confirm password"
                placeholder="Confirm password"
                value={form.values.confirmPassword} // Changed from form.values.password to form.values.confirmPassword
                onChange={(event) => form.setFieldValue('confirmPassword', event.currentTarget.value)} // Changed from 'password' to 'confirmPassword'
                error={form.errors.confirmPassword && 'Passwords do not match'} // Changed the error message
                radius="md"
              />

            </Stack>

            <Group justify="space-between" mt="xl">
              <Button type="submit" radius="xl">
                Register
              </Button>
            </Group>
          </form>
        </div>
      </div>
    </Paper>
    </div>
  );
}
export default RegisterForum;