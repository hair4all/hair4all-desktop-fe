import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { EllipsisVertical } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "July", desktop: 214, mobile: 140 },
    { month: "August", desktop: 250, mobile: 140 },
    { month: "September", desktop: 300, mobile: 140 },
    { month: "October", desktop: 150, mobile: 140 },
    { month: "November", desktop: 240, mobile: 140 },
    { month: "December", desktop: 60, mobile: 140 },
  ]

const LineGraph = () => {
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "black",
        },
    } satisfies ChartConfig

    return (
        <Card className="gap-2 py-4">
        <CardHeader className="flex justify-between items-center px-4">
            <h1 className="font-semibold text-[15px]">Aktivitas 2024</h1>
            <EllipsisVertical size={18} />
        </CardHeader>
        <CardContent className="flex items-center">
            <ChartContainer config={chartConfig} className="w-full h-10 p-0">
            <LineChart
                data={chartData}
                margin={{
                left: 5,
                right: 5,
                top: 0,
                bottom: 0,
                }}
            >
                <CartesianGrid vertical={false} stroke="none" />
                <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={0}
                tickFormatter={(value) => value.slice(0, 3)}
                hide={true}
                />
                <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
                />
                <Line
                dataKey="desktop"
                type="natural"
                stroke="var(--color-desktop)"
                strokeWidth={1}
                dot={false}
                />
            </LineChart>
            </ChartContainer>
        </CardContent>
        <CardFooter className="text-xs flex justify-between items-center px-4">
            <h1 className="text-gray-500 text-xs">Total Penjualan</h1>
            <h1 className="text-sm font-semibold">Rp 3.06M</h1>
        </CardFooter>
        </Card>
    );
};

export default LineGraph;
