import { useLoaderData } from 'react-router-dom';
import SubjectCard from './SubjectCard/SubjectCard';
import { IconCreditCard, IconBuildingBank, IconRepeat, IconReceiptRefund, IconReceipt, IconReceiptTax, IconReport, IconCashBanknote, IconCoin, IconCalculator, IconTestPipe, IconTerminal, IconBooks } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { loader } from '../../loaders/courseLoader';
const subjects = {
    math: { title: 'Mathematics', icon: IconCalculator },
    science: { title: 'Science', icon: IconTestPipe },
    computerScience: { title: 'Computer Science', icon: IconTerminal },
    history: { title: 'History', icon: IconBooks }
};

const courses = {
    math: [
        { name: 'Algebra', icon: IconCreditCard, color: 'violet', link: '/algebra' },
        { name: 'Geometry', icon: IconBuildingBank, color: 'indigo' },
        { name: 'Trigonometry', icon: IconRepeat, color: 'blue' },
        { name: 'Calculus', icon: IconReceiptRefund, color: 'green' },
        { name: 'Statistics', icon: IconReceipt, color: 'teal' },
        { name: 'Probability', icon: IconReceiptTax, color: 'cyan' },
        { name: 'Discrete Math', icon: IconReport, color: 'pink' },
        { name: 'Differential Equations', icon: IconCashBanknote, color: 'orange' },
        { name: 'Linear Algebra', icon: IconCoin, color: 'red' },
    ],
    science: [
        { name: 'Biology', icon: IconCreditCard, color: 'violet' },
        { name: 'Chemistry', icon: IconBuildingBank, color: 'indigo' },
        { name: 'Physics', icon: IconRepeat, color: 'blue' },
        { name: 'Astronomy', icon: IconReceiptRefund, color: 'green' },
        { name: 'Geology', icon: IconReceipt, color: 'teal' },
        { name: 'Meteorology', icon: IconReceiptTax, color: 'cyan' },
        { name: 'Ecology', icon: IconReport, color: 'pink' },
        { name: 'Botany', icon: IconCashBanknote, color: 'orange' },
        { name: 'Zoology', icon: IconCoin, color: 'red' },
    ],
    computerScience: [
        { name: 'Algorithms', icon: IconCreditCard, color: 'violet' },
        { name: 'Data Structures', icon: IconBuildingBank, color: 'indigo' },
        { name: 'Operating Systems', icon: IconRepeat, color: 'blue' },
        { name: 'Computer Networks', icon: IconReceiptRefund, color: 'green' },
        { name: 'Cybersecurity', icon: IconReceipt, color: 'teal' },
        { name: 'Artificial Intelligence', icon: IconReceiptTax, color: 'cyan' },
        { name: 'Machine Learning', icon: IconReport, color: 'pink' },
        { name: 'Software Engineering', icon: IconCashBanknote, color: 'orange' },
        { name: 'Web Development', icon: IconCoin, color: 'red' },
    ],
    history: [
        { name: 'World History', icon: IconCreditCard, color: 'violet' },
        { name: 'European History', icon: IconBuildingBank, color: 'indigo' },
        { name: 'American History', icon: IconRepeat, color: 'blue' },
        { name: 'Ancient History', icon: IconReceiptRefund, color: 'green' },
        { name: 'Medieval History', icon: IconReceipt, color: 'teal' },
        { name: 'Modern History', icon: IconReceiptTax, color: 'cyan' },
        { name: 'Military History', icon: IconReport, color: 'pink' },
        { name: 'Art History', icon: IconCashBanknote, color: 'orange' },
        { name: 'Political History', icon: IconCoin, color: 'red' },
    ]
};

export default function SubjectCards() {
    let coursesData = useLoaderData();
    console.log(coursesData);

    return (
        <>
            <SubjectCard courses={coursesData.filter(course => course.subject === "Mathematics")} title={subjects.math.title} />
            <SubjectCard courses={coursesData.filter(course => course.subject === "Computer Science")} title={subjects.computerScience.title} />
            <SubjectCard courses={coursesData.filter(course => course.subject === "Science")} title={subjects.science.title} />
            <SubjectCard courses={coursesData.filter(course => course.subject === "History")} title={subjects.history.title} />
        </>
    );
}