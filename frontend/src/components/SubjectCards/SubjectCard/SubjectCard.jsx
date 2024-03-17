import {
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Group,
    useMantineTheme,
} from '@mantine/core';

import classes from './SubjectCard.module.css';

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

// eslint-disable-next-line react/prop-types
export default function ActionsGrid({ courses = [], title = "title" }) {
    const theme = useMantineTheme();

    const items = courses.map((item) => (
        <UnstyledButton key={item.title} className={classes.item}>
            <item.icon color={theme.colors[item.color][6]} size="2rem" />
            <Text size="xs" mt={7}>
                {item.title}
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