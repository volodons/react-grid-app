import React, { useState } from 'react';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { SortingState, IntegratedSorting } from '@devexpress/dx-react-grid';

const columns = [
    { name: 'id', title: 'ID' },
    { name: 'name', title: 'Name' },
    { name: 'age', title: 'Age' },
    { name: 'email', title: 'Email' },
    { name: 'address', title: 'Address' },
    { name: 'phone', title: 'Phone' },
    { name: 'job', title: 'Job' }
];

const rows = [
    {
        id: 1,
        name: 'John Doe',
        age: 25,
        email: 'john@example.com',
        address: '123 Main St',
        phone: '555-1234',
        job: 'Developer'
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 30,
        email: 'jane@example.com',
        address: '456 Oak St',
        phone: '555-5678',
        job: 'Designer'
    },
    {
        id: 3,
        name: 'Mary Smith',
        age: 35,
        email: 'mary@example.com',
        address: '789 Pine St',
        phone: '555-9012',
        job: 'Manager'
    },
    {
        id: 4,
        name: 'Bob Johnson',
        age: 40,
        email: 'bob@example.com',
        address: '101 Elm St',
        phone: '555-3456',
        job: 'Engineer'
    },
    {
        id: 5,
        name: 'Alice Brown',
        age: 28,
        email: 'alice@example.com',
        address: '202 Cedar St',
        phone: '555-7890',
        job: 'Architect'
    },
    {
        id: 6,
        name: 'Charlie Green',
        age: 22,
        email: 'charlie@example.com',
        address: '303 Birch St',
        phone: '555-2345',
        job: 'Intern'
    },
    {
        id: 7,
        name: 'Diana White',
        age: 45,
        email: 'diana@example.com',
        address: '404 Spruce St',
        phone: '555-6789',
        job: 'CEO'
    },
    {
        id: 8,
        name: 'Evan Black',
        age: 32,
        email: 'evan@example.com',
        address: '505 Maple St',
        phone: '555-9876',
        job: 'Marketing Specialist'
    },
    {
        id: 9,
        name: 'Fiona Gray',
        age: 27,
        email: 'fiona@example.com',
        address: '606 Walnut St',
        phone: '555-5432',
        job: 'Data Analyst'
    },
    {
        id: 10,
        name: 'George Hill',
        age: 38,
        email: 'george@example.com',
        address: '707 Willow St',
        phone: '555-8765',
        job: 'Project Manager'
    },
    {
        id: 11,
        name: 'Hannah Fox',
        age: 26,
        email: 'hannah@example.com',
        address: '808 Aspen St',
        phone: '555-4321',
        job: 'UX Designer'
    },
    {
        id: 12,
        name: 'Isaac King',
        age: 33,
        email: 'isaac@example.com',
        address: '909 Redwood St',
        phone: '555-0987',
        job: 'Backend Developer'
    },
    {
        id: 13,
        name: 'Jackie Blue',
        age: 29,
        email: 'jackie@example.com',
        address: '1010 Magnolia St',
        phone: '555-7654',
        job: 'Sales Executive'
    },
    {
        id: 14,
        name: 'Kelly Lake',
        age: 31,
        email: 'kelly@example.com',
        address: '1111 Palm St',
        phone: '555-6543',
        job: 'HR Specialist'
    },
    {
        id: 15,
        name: 'Leo Sun',
        age: 36,
        email: 'leo@example.com',
        address: '1212 Oakwood St',
        phone: '555-3210',
        job: 'Full Stack Developer'
    }
];

const SortingGrid = () => {
    const [sorting, setSorting] = useState([{ columnName: 'name', direction: 'asc' }]);

    return (
        <Grid rows={rows} columns={columns}>
            <SortingState sorting={sorting} onSortingChange={setSorting} />
            <IntegratedSorting />
            <Table />
            <TableHeaderRow showSortingControls />
        </Grid>
    );
};

export default SortingGrid;
