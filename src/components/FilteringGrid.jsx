import React, { useState } from 'react';
import { Grid, Table, TableHeaderRow, TableFilterRow } from '@devexpress/dx-react-grid-material-ui';
import { FilteringState, IntegratedFiltering } from '@devexpress/dx-react-grid';

const columns = [
    { name: 'id', title: 'ID' },
    { name: 'name', title: 'Name' },
    { name: 'age', title: 'Age' },
    { name: 'email', title: 'Email' },
    { name: 'address', title: 'Address' },
    { name: 'phone', title: 'Phone' },
    { name: 'job', title: 'Job' },
    { name: 'company', title: 'Company' },
    { name: 'department', title: 'Department' },
    { name: 'salary', title: 'Salary' },
    { name: 'hireDate', title: 'Hire Date' },
    { name: 'manager', title: 'Manager' },
    { name: 'status', title: 'Status' },
    { name: 'location', title: 'Location' },
    { name: 'experience', title: 'Experience (Years)' }
];

const rows = [
    {
        id: 1,
        name: 'John Doe',
        age: 25,
        email: 'john@example.com',
        address: '123 Main St',
        phone: '555-1234',
        job: 'Developer',
        company: 'Tech Corp',
        department: 'Engineering',
        salary: 60000,
        hireDate: '2021-01-10',
        manager: 'Bob Johnson',
        status: 'Active',
        location: 'New York',
        experience: 2
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 30,
        email: 'jane@example.com',
        address: '456 Oak St',
        phone: '555-5678',
        job: 'Designer',
        company: 'Design Studio',
        department: 'Creative',
        salary: 70000,
        hireDate: '2019-03-12',
        manager: 'Alice Brown',
        status: 'Active',
        location: 'San Francisco',
        experience: 5
    },
    {
        id: 3,
        name: 'Mary Smith',
        age: 35,
        email: 'mary@example.com',
        address: '789 Pine St',
        phone: '555-9012',
        job: 'Manager',
        company: 'Business Inc',
        department: 'Operations',
        salary: 80000,
        hireDate: '2018-07-15',
        manager: 'Charlie Green',
        status: 'On Leave',
        location: 'Chicago',
        experience: 10
    },
    {
        id: 4,
        name: 'Chris Evans',
        age: 40,
        email: 'chris@example.com',
        address: '101 Maple St',
        phone: '555-3456',
        job: 'Sales Executive',
        company: 'Marketing Hub',
        department: 'Sales',
        salary: 55000,
        hireDate: '2020-09-01',
        manager: 'Diana White',
        status: 'Active',
        location: 'Dallas',
        experience: 12
    },
    {
        id: 5,
        name: 'Alice Brown',
        age: 45,
        email: 'aliceb@example.com',
        address: '202 Cedar St',
        phone: '555-7890',
        job: 'HR Manager',
        company: 'Design Studio',
        department: 'Human Resources',
        salary: 90000,
        hireDate: '2015-06-15',
        manager: 'Evan Black',
        status: 'Active',
        location: 'San Francisco',
        experience: 20
    },
    {
        id: 6,
        name: 'Evan Black',
        age: 28,
        email: 'evanb@example.com',
        address: '303 Birch St',
        phone: '555-2345',
        job: 'Marketing Specialist',
        company: 'Marketing Hub',
        department: 'Marketing',
        salary: 50000,
        hireDate: '2022-03-10',
        manager: 'Diana White',
        status: 'Active',
        location: 'Miami',
        experience: 3
    },
    {
        id: 7,
        name: 'Diana White',
        age: 50,
        email: 'dianaw@example.com',
        address: '404 Spruce St',
        phone: '555-6789',
        job: 'CEO',
        company: 'Marketing Hub',
        department: 'Executive',
        salary: 150000,
        hireDate: '2010-11-22',
        manager: '-',
        status: 'Active',
        location: 'Dallas',
        experience: 25
    },
    {
        id: 8,
        name: 'Paul Green',
        age: 37,
        email: 'paulg@example.com',
        address: '505 Oak St',
        phone: '555-9876',
        job: 'Software Engineer',
        company: 'Tech Corp',
        department: 'Engineering',
        salary: 95000,
        hireDate: '2017-08-01',
        manager: 'Bob Johnson',
        status: 'Active',
        location: 'Seattle',
        experience: 15
    },
    {
        id: 9,
        name: 'Rachel Grey',
        age: 32,
        email: 'rachelg@example.com',
        address: '606 Walnut St',
        phone: '555-5432',
        job: 'Data Scientist',
        company: 'Tech Corp',
        department: 'Data Science',
        salary: 105000,
        hireDate: '2018-01-15',
        manager: 'Leo Sun',
        status: 'Active',
        location: 'New York',
        experience: 8
    },
    {
        id: 10,
        name: 'Leo Sun',
        age: 36,
        email: 'leos@example.com',
        address: '707 Palm St',
        phone: '555-8765',
        job: 'CTO',
        company: 'Tech Corp',
        department: 'Executive',
        salary: 200000,
        hireDate: '2010-04-30',
        manager: '-',
        status: 'Active',
        location: 'San Francisco',
        experience: 18
    },
    {
        id: 11,
        name: 'Michael Jordan',
        age: 29,
        email: 'mjordan@example.com',
        address: '808 Elm St',
        phone: '555-1111',
        job: 'Network Administrator',
        company: 'Business Inc',
        department: 'IT',
        salary: 60000,
        hireDate: '2019-10-01',
        manager: 'Mary Smith',
        status: 'Active',
        location: 'Chicago',
        experience: 7
    },
    {
        id: 12,
        name: 'Sarah Parker',
        age: 42,
        email: 'sparker@example.com',
        address: '909 Ash St',
        phone: '555-2222',
        job: 'Product Manager',
        company: 'Design Studio',
        department: 'Product',
        salary: 110000,
        hireDate: '2016-02-15',
        manager: 'Alice Brown',
        status: 'Active',
        location: 'San Francisco',
        experience: 10
    },
    {
        id: 13,
        name: 'Oliver Wood',
        age: 27,
        email: 'owood@example.com',
        address: '1010 Magnolia St',
        phone: '555-3333',
        job: 'Content Writer',
        company: 'Design Studio',
        department: 'Marketing',
        salary: 45000,
        hireDate: '2021-11-10',
        manager: 'Evan Black',
        status: 'Active',
        location: 'Miami',
        experience: 4
    },
    {
        id: 14,
        name: 'Natalie Adams',
        age: 31,
        email: 'nadams@example.com',
        address: '1111 Willow St',
        phone: '555-4444',
        job: 'UX Designer',
        company: 'Tech Corp',
        department: 'Design',
        salary: 75000,
        hireDate: '2018-07-22',
        manager: 'Paul Green',
        status: 'Active',
        location: 'New York',
        experience: 6
    },
    {
        id: 15,
        name: 'Jacob Martinez',
        age: 38,
        email: 'jmartinez@example.com',
        address: '1212 Pine St',
        phone: '555-5555',
        job: 'Operations Manager',
        company: 'Business Inc',
        department: 'Operations',
        salary: 90000,
        hireDate: '2016-04-12',
        manager: 'Mary Smith',
        status: 'Active',
        location: 'Chicago',
        experience: 14
    },
    {
        id: 16,
        name: 'Emily Johnson',
        age: 26,
        email: 'ejohnson@example.com',
        address: '1313 Maple Ave',
        phone: '555-6666',
        job: 'Content Strategist',
        company: 'Media Hub',
        department: 'Content',
        salary: 65000,
        hireDate: '2020-06-14',
        manager: 'Oliver Wood',
        status: 'Active',
        location: 'Austin',
        experience: 5
    },
    {
        id: 17,
        name: 'Daniel Lewis',
        age: 43,
        email: 'dlewis@example.com',
        address: '1414 Oakwood Dr',
        phone: '555-7777',
        job: 'DevOps Engineer',
        company: 'Cloud Services',
        department: 'Engineering',
        salary: 120000,
        hireDate: '2013-11-01',
        manager: 'Leo Sun',
        status: 'Active',
        location: 'San Diego',
        experience: 15
    },
    {
        id: 18,
        name: 'Sophia Taylor',
        age: 34,
        email: 'staylor@example.com',
        address: '1515 Pine Ridge Rd',
        phone: '555-8888',
        job: 'QA Tester',
        company: 'Tech Labs',
        department: 'Quality Assurance',
        salary: 85000,
        hireDate: '2015-09-18',
        manager: 'Paul Green',
        status: 'On Leave',
        location: 'Denver',
        experience: 12
    },
    {
        id: 19,
        name: 'Henry Scott',
        age: 48,
        email: 'hscott@example.com',
        address: '1616 Cedar St',
        phone: '555-9999',
        job: 'Project Manager',
        company: 'BuildTech',
        department: 'Project Management',
        salary: 110000,
        hireDate: '2010-01-20',
        manager: 'Mary Smith',
        status: 'Active',
        location: 'Boston',
        experience: 20
    },
    {
        id: 20,
        name: 'Olivia Harris',
        age: 29,
        email: 'oharris@example.com',
        address: '1717 Spruce St',
        phone: '555-1234',
        job: 'Business Analyst',
        company: 'Consulting Group',
        department: 'Business Analysis',
        salary: 72000,
        hireDate: '2018-12-10',
        manager: 'Alice Brown',
        status: 'Active',
        location: 'New York',
        experience: 7
    },
    {
        id: 21,
        name: 'James Walker',
        age: 32,
        email: 'jwalker@example.com',
        address: '1818 Poplar Ave',
        phone: '555-5678',
        job: 'Database Administrator',
        company: 'Tech Solutions',
        department: 'IT',
        salary: 95000,
        hireDate: '2016-05-05',
        manager: 'Michael Jordan',
        status: 'Active',
        location: 'Houston',
        experience: 9
    },
    {
        id: 22,
        name: 'Grace King',
        age: 36,
        email: 'gking@example.com',
        address: '1919 Elm St',
        phone: '555-9876',
        job: 'Product Owner',
        company: 'Innovation Labs',
        department: 'Product Management',
        salary: 130000,
        hireDate: '2014-02-14',
        manager: 'Diana White',
        status: 'Active',
        location: 'San Francisco',
        experience: 10
    },
    {
        id: 23,
        name: 'Ethan Turner',
        age: 25,
        email: 'eturner@example.com',
        address: '2020 Birch Ln',
        phone: '555-3456',
        job: 'Frontend Developer',
        company: 'WebWorks',
        department: 'Engineering',
        salary: 72000,
        hireDate: '2022-01-15',
        manager: 'Paul Green',
        status: 'Active',
        location: 'Los Angeles',
        experience: 3
    },
    {
        id: 24,
        name: 'Zoe Anderson',
        age: 41,
        email: 'zanderson@example.com',
        address: '2121 Sycamore Rd',
        phone: '555-4321',
        job: 'HR Specialist',
        company: 'People First',
        department: 'Human Resources',
        salary: 68000,
        hireDate: '2011-07-30',
        manager: 'Alice Brown',
        status: 'Active',
        location: 'San Diego',
        experience: 15
    },
    {
        id: 25,
        name: 'Noah Carter',
        age: 37,
        email: 'ncarter@example.com',
        address: '2222 Cypress Ave',
        phone: '555-6789',
        job: 'Data Analyst',
        company: 'Analytics Group',
        department: 'Data Analysis',
        salary: 98000,
        hireDate: '2017-04-22',
        manager: 'Rachel Grey',
        status: 'Active',
        location: 'Chicago',
        experience: 9
    },
    {
        id: 26,
        name: 'Lily Martinez',
        age: 28,
        email: 'lmartinez@example.com',
        address: '2323 Dogwood Ln',
        phone: '555-7654',
        job: 'Backend Developer',
        company: 'CodeBase',
        department: 'Engineering',
        salary: 85000,
        hireDate: '2021-08-10',
        manager: 'Paul Green',
        status: 'Active',
        location: 'New York',
        experience: 6
    },
    {
        id: 27,
        name: 'William Lee',
        age: 39,
        email: 'wlee@example.com',
        address: '2424 Chestnut St',
        phone: '555-5432',
        job: 'IT Support Specialist',
        company: 'Tech Help',
        department: 'Support',
        salary: 65000,
        hireDate: '2015-10-05',
        manager: 'Michael Jordan',
        status: 'Active',
        location: 'Seattle',
        experience: 14
    },
    {
        id: 28,
        name: 'Mia Thompson',
        age: 33,
        email: 'mthompson@example.com',
        address: '2525 Maplewood Dr',
        phone: '555-8765',
        job: 'Graphic Designer',
        company: 'Creative Minds',
        department: 'Design',
        salary: 70000,
        hireDate: '2019-06-20',
        manager: 'Sarah Parker',
        status: 'Active',
        location: 'Austin',
        experience: 8
    },
    {
        id: 29,
        name: 'Jack White',
        age: 30,
        email: 'jwhite@example.com',
        address: '2626 Laurel Ave',
        phone: '555-2345',
        job: 'Full Stack Developer',
        company: 'Tech Solutions',
        department: 'Engineering',
        salary: 105000,
        hireDate: '2017-09-01',
        manager: 'Paul Green',
        status: 'Active',
        location: 'San Francisco',
        experience: 11
    },
    {
        id: 30,
        name: 'Ava Nelson',
        age: 45,
        email: 'anelson@example.com',
        address: '2727 Evergreen Rd',
        phone: '555-0987',
        job: 'Chief Marketing Officer',
        company: 'BrandBoost',
        department: 'Marketing',
        salary: 180000,
        hireDate: '2009-03-25',
        manager: 'Diana White',
        status: 'Active',
        location: 'Los Angeles',
        experience: 20
    }
];

const FilteringGrid = () => {
    const [filters, setFilters] = useState([]);

    return (
        <Grid rows={rows} columns={columns}>
            <FilteringState filters={filters} onFiltersChange={setFilters} />
            <IntegratedFiltering />
            <Table />
            <TableHeaderRow />
            <TableFilterRow />
        </Grid>
    );
};

export default FilteringGrid;
