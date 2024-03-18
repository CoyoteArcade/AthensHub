import {
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Group,
    useMantineTheme,
} from '@mantine/core';

import {
    IconCreditCard,
    IconBuildingBank,
    IconRepeat,
    IconReceiptRefund,
} from '@tabler/icons-react';

import classes from './SubjectCard.module.css';
import { Link } from 'react-router-dom';

// const courses = [
//     { title: 'Credit cards', icon: IconCreditCard, color: 'violet' },
//     { title: 'Banks nearby', icon: IconBuildingBank, color: 'indigo' },
//     { title: 'Transfers', icon: IconRepeat, color: 'blue' },
//     { title: 'Refunds', icon: IconReceiptRefund, color: 'green' },
//     { title: 'Receipts', icon: IconReceipt, color: 'teal' },
//     { title: 'Taxes', icon: IconReceiptTax, color: 'cyan' },
//     { title: 'Reports', icon: IconReport, color: 'pink' },
//     { title: 'Payments', icon: IconCoin, color: 'red' },
//     { title: 'Cashback', icon: IconCashBanknote, color: 'orange' },
// ];

const icons = {
    math: IconCreditCard,
    science: IconBuildingBank,
    computerScience: IconRepeat,
    history: IconReceiptRefund,
}

const colors = [
    'violet',
    'indigo',
    'blue',
    'green',
    'teal',
    'cyan',
    'pink',
    'red',
    'orange',
];

// eslint-disable-next-line react/prop-types
export default function ActionsGrid({ courses = [], title = "title" }) {
    const theme = useMantineTheme();

    const items = courses.map(({ name = "", color = 'violet', link = '/' }) => (
        <UnstyledButton key={name} className={classes.item} component={Link} to={`/courses/${encodeURI(name)}`}>
            <IconCreditCard color={theme.colors[color][6]} size="2rem" />
            <Text size="xs" mt={7}>
                {name}
            </Text>
        </UnstyledButton>
    ));

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Group justify="space-between">
                <Text className={classes.title}>{title}</Text>
                {/* <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
                    + 21 other services
                </Anchor> */}
            </Group>
            <SimpleGrid cols={3} mt="md">
                {items}
            </SimpleGrid>
        </Card>
    );
}