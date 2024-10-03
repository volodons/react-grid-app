import React from 'react';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

const columns = [
    { name: 'id', title: 'ID' },
    { name: 'name', title: 'Name' },
    { name: 'age', title: 'Age' }
];

const rows = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    { id: 3, name: 'Mary Smith', age: 35 },
    { id: 4, name: 'James Johnson', age: 40 },
    { id: 5, name: 'Patricia Brown', age: 45 },
    { id: 6, name: 'Robert Davis', age: 50 },
    { id: 7, name: 'Linda Martinez', age: 55 },
    { id: 8, name: 'Michael Wilson', age: 60 },
    { id: 9, name: 'Barbara Anderson', age: 65 },
    { id: 10, name: 'William Thomas', age: 70 },
    { id: 11, name: 'Elizabeth Taylor', age: 75 },
    { id: 12, name: 'David Moore', age: 80 },
    { id: 13, name: 'Jennifer Jackson', age: 85 },
    { id: 14, name: 'Charles White', age: 90 },
    { id: 15, name: 'Susan Harris', age: 95 },
    { id: 16, name: 'Joseph Martin', age: 100 },
    { id: 17, name: 'Margaret Thompson', age: 105 },
    { id: 18, name: 'Thomas Garcia', age: 110 },
    { id: 19, name: 'Dorothy Martinez', age: 115 },
    { id: 20, name: 'Christopher Robinson', age: 120 },
    { id: 21, name: 'Karen Clark', age: 125 },
    { id: 22, name: 'Daniel Rodriguez', age: 130 },
    { id: 23, name: 'Nancy Lewis', age: 135 },
    { id: 24, name: 'Matthew Lee', age: 140 },
    { id: 25, name: 'Betty Walker', age: 145 },
    { id: 26, name: 'Anthony Hall', age: 150 },
    { id: 27, name: 'Helen Allen', age: 155 },
    { id: 28, name: 'Mark Young', age: 160 },
    { id: 29, name: 'Sandra King', age: 165 },
    { id: 30, name: 'Paul Wright', age: 170 },
    { id: 31, name: 'Donna Scott', age: 175 },
    { id: 32, name: 'Steven Green', age: 180 },
    { id: 33, name: 'Carol Adams', age: 185 },
    { id: 34, name: 'Andrew Baker', age: 190 },
    { id: 35, name: 'Michelle Gonzalez', age: 195 },
    { id: 36, name: 'Joshua Nelson', age: 200 },
    { id: 37, name: 'Emily Carter', age: 205 },
    { id: 38, name: 'Kevin Mitchell', age: 210 },
    { id: 39, name: 'Angela Perez', age: 215 },
    { id: 40, name: 'Brian Roberts', age: 220 },
    { id: 41, name: 'Shirley Turner', age: 225 },
    { id: 42, name: 'Edward Phillips', age: 230 },
    { id: 43, name: 'Cynthia Campbell', age: 235 },
    { id: 44, name: 'George Parker', age: 240 },
    { id: 45, name: 'Deborah Evans', age: 245 },
    { id: 46, name: 'Ronald Edwards', age: 250 },
    { id: 47, name: 'Jessica Collins', age: 255 },
    { id: 48, name: 'Kenneth Stewart', age: 260 },
    { id: 49, name: 'Sarah Sanchez', age: 265 },
    { id: 50, name: 'Jason Morris', age: 270 }
];

const BasicGrid = () => (
    <Grid rows={rows} columns={columns}>
        <Table />
        <TableHeaderRow />
    </Grid>
);

export default BasicGrid;
