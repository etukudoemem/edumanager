import { BarChart, Bar, Rectangle, 
    XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer } from "recharts";

export const AttendanceChart = () => {

    const data = [
        {
            name: 'Mon',
            Present: 4000,
            Absent: 2400,
            amt: 2400,
        },
        {
            name: 'Tue',
            Present: 3000,
            Absent: 1398,
            amt: 2210,
        },
        {
            name: 'Wed',
            Present: 2000,
            Absent: 9800,
            amt: 2290,
        },
        {
            name: 'Thur',
            Present: 2780,
            Absent: 3908,
            amt: 2000,
        },
        {
            name: 'Fri',
            Present: 1890,
            Absent: 4800,
            amt: 2181,
        },
    ];

    const styles = {
        top: 10,
        right: 10,
        backgroundColor: "",
        border: "",
        borderradius: 4,
        lineHeight: "20px"
    }


    return (
        <>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={280}
                    data={data}
                    margin={{
                    top: 50,
                    right: 10,
                    left: -40,
                    bottom: -100,
                    }}
                >
                    <CartesianGrid stroke="none" strokeDasharray="3 3" />
                    <XAxis dataKey="name"/>
                    <YAxis stroke="none"/>
                    <Tooltip />
                    <Legend width={100} height={100} wrapperStyle={styles}/>
                    <Bar dataKey="Absent" barSize={20} fill="#83a6ed" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="Present" barSize={20} fill="#8884d8" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}