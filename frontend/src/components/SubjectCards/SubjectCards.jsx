import SubjectCard from './SubjectCard/SubjectCard';
import { IconCreditCard, IconBuildingBank, IconRepeat, IconReceiptRefund, IconReceipt, IconReceiptTax, IconReport, IconCashBanknote, IconCoin } from '@tabler/icons-react';

const courses = {
    math: [
        { title: 'Algebra', icon: IconCreditCard, color: 'violet' },
        { title: 'Geometry', icon: IconBuildingBank, color: 'indigo' },
        { title: 'Trigonometry', icon: IconRepeat, color: 'blue' },
        { title: 'Calculus', icon: IconReceiptRefund, color: 'green' },
        { title: 'Statistics', icon: IconReceipt, color: 'teal' },
        { title: 'Probability', icon: IconReceiptTax, color: 'cyan' },
        { title: 'Discrete Math', icon: IconReport, color: 'pink' },
        { title: 'Differential Equations', icon: IconCashBanknote, color: 'orange' },
        { title: 'Linear Algebra', icon: IconCoin, color: 'red' },
    ],
    science: [
        { title: 'Biology', icon: IconCreditCard, color: 'violet' },
        { title: 'Chemistry', icon: IconBuildingBank, color: 'indigo' },
        { title: 'Physics', icon: IconRepeat, color: 'blue' },
        { title: 'Astronomy', icon: IconReceiptRefund, color: 'green' },
        { title: 'Geology', icon: IconReceipt, color: 'teal' },
        { title: 'Meteorology', icon: IconReceiptTax, color: 'cyan' },
        { title: 'Ecology', icon: IconReport, color: 'pink' },
        { title: 'Botany', icon: IconCashBanknote, color: 'orange' },
        { title: 'Zoology', icon: IconCoin, color: 'red' },
    ],
    computerScience: [
        { title: 'Algorithms', icon: IconCreditCard, color: 'violet' },
        { title: 'Data Structures', icon: IconBuildingBank, color: 'indigo' },
        { title: 'Operating Systems', icon: IconRepeat, color: 'blue' },
        { title: 'Computer Networks', icon: IconReceiptRefund, color: 'green' },
        { title: 'Cybersecurity', icon: IconReceipt, color: 'teal' },
        { title: 'Artificial Intelligence', icon: IconReceiptTax, color: 'cyan' },
        { title: 'Machine Learning', icon: IconReport, color: 'pink' },
        { title: 'Software Engineering', icon: IconCashBanknote, color: 'orange' },
        { title: 'Web Development', icon: IconCoin, color: 'red' },
    ],
    history: [
        { title: 'World History', icon: IconCreditCard, color: 'violet' },
        { title: 'European History', icon: IconBuildingBank, color: 'indigo' },
        { title: 'American History', icon: IconRepeat, color: 'blue' },
        { title: 'Ancient History', icon: IconReceiptRefund, color: 'green' },
        { title: 'Medieval History', icon: IconReceipt, color: 'teal' },
        { title: 'Modern History', icon: IconReceiptTax, color: 'cyan' },
        { title: 'Military History', icon: IconReport, color: 'pink' },
        { title: 'Art History', icon: IconCashBanknote, color: 'orange' },
        { title: 'Political History', icon: IconCoin, color: 'red' },
    ]
};

export default function SubjectCards() {
    return (
        <>
            <SubjectCard courses={courses.math} title='Mathematics' />
            <SubjectCard courses={courses.computerScience} title='Computer Science' />
            <SubjectCard courses={courses.science} title='Science' />
            <SubjectCard courses={courses.history} title='History' />
        </>
    );
}