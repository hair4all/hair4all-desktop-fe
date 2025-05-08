import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const chartData = [
    { day: "Senin", desktop: 145, mobile: 178 },
    { day: "Selasa", desktop: 162, mobile: 134 },
    { day: "Rabu", desktop: 198, mobile: 156 },
    { day: "Kamis", desktop: 123, mobile: 145 },
    { day: "Jumat", desktop: 175, mobile: 189 },
    { day: "Sabtu", desktop: 134, mobile: 167 },
    { day: "Minggu", desktop: 158, mobile: 142 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#906929",
    },
    mobile: {
        label: "Mobile",
        color: "#395C75",
    },
} satisfies ChartConfig

const BarGraph = () => {
    return (
        <ChartContainer config={chartConfig} className="w-full h-45 p-0">
            <BarChart 
                accessibilityLayer 
                data={chartData}
                margin={{
                    left: -20,
                    right: 20,
                }}
            >
                <CartesianGrid strokeWidth={2} strokeDasharray="5 5"/>
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    // tickFormatter={(value) => value.slice(0, 3)}
                    tick={{ fontSize: 10 }}
                />
                <YAxis
                    // domain={[0, 100]}
                    // ticks={[0, 20, 40, 60, 80, 100]}
                    axisLine={false}
                    tickMargin={1}
                    tickLine={false} // Customize appearance
                    tickSize={5} // Control the length
                    tick={{ fontSize: 10 }}
                />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar
                    dataKey="mobile"
                    stackId="a"
                    fill="#395C75"
                    // radius={[4, 4, 0, 0]}
                />
                <Bar
                    dataKey="desktop"
                    stackId="a"
                    fill="#906929"
                    // radius={[0, 0, 4, 4]}
                />
            </BarChart>
        </ChartContainer>
    )
}

export default BarGraph