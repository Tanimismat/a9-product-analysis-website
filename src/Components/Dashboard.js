import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, CartesianGrid } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
            <LineChart width={500} height={400} data={data}>
                <Line dataKey={'sell'} stroke="#77ae08"></Line>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
            </LineChart>
            <PieChart width={400} height={300}>
                <Pie data={data} dataKey={'revenue'} cx='50%' cy='50%' outerRadius={60} fill='#82ca9d' label></Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default Dashboard;