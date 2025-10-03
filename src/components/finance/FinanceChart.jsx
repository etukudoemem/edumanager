import { LineChart, Line, XAxis, 
    YAxis, CartesianGrid, Tooltip, 
    Legend, ResponsiveContainer } from "recharts";

export const FinanceChart = () => {

    const data = [
        {
            name: 'Jan',
            Expenses: 4000,
            Income: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            Expenses: 3000,
            Income: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            Expenses: 2000,
            Income: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            Expenses: 2780,
            Income: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            Expenses: 1890,
            Income: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            Expenses: 2390,
            Income: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            Expenses: 3490,
            Income: 4300,
            amt: 2100,
        },
    ];

    const styles = {
        top: 10,
        backgroundColor: "",
        border: "",
        borderradius: 4,
        lineHeight: "20px"
    }

    return (
        <>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 40,
                    right: 10,
                    left: -40,
                    bottom: -20,
                    }}
                >
                    <CartesianGrid stroke="none" strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis stroke="none"/>
                    <Tooltip />
                    <Legend wrapperStyle={styles} />
                    <Line type="monotone" dataKey="Income" stroke="#06ec56ff" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Expenses" stroke="#f13a0cff" />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}