import cx from 'clsx';
import { Title, Text, Container, Button, Overlay, rem } from '@mantine/core';
import classes from './Hero.module.css';
import { IconSchool, IconUser } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext.js';
import { logout } from '../../auth/auth.js';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        logout()
            .then(() => {
                setUser(null);
                localStorage.removeItem('athensHubUser');
                window.alert("You have successfully logged out!");
                navigate('/');
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    };
    
    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.65} zIndex={1} />

            <div className={classes.inner}>
                <Title className={classes.title} order={1}>
                    Welcome to AthensHub!
                </Title>

                <Container size={640}>
                    <Text size="md" className={classes.description}>
                        Learn and share knowledge with people from all over the world using free and open-source educational resources.
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button
                        className={classes.control}
                        component={Link}
                        to="/subjects"
                        variant="white"
                        size="lg"
                        leftSection={<IconSchool style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                        color={'#21343d'}
                    >
                        Courses
                    </Button>
                    <Button
                        className={cx(classes.control, classes.secondaryControl)}
                        size="lg"
                        component={Link}
                        to={user ? '/' : '/login'}
                        onClick={user ? handleLogout : null}
                        leftSection={<IconUser style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                        color={'#086a7e'}
                    >
                        {user ? 'Logout' : 'Login'}
                    </Button>
                </div>
            </div>
        </div>
    );
}