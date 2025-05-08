import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart";
  import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
  
  const chartData = [
    { month: "January", desktop: 40, mobile: 80 },
    { month: "February", desktop: 60, mobile: 40 },
    { month: "March", desktop: 80, mobile: 30 },
    { month: "April", desktop: 65, mobile: 50 },
    { month: "May", desktop: 45, mobile: 55 },
    { month: "June", desktop: 30, mobile: 85 },
    { month: "July", desktop: 55, mobile: 70 },
    { month: "August", desktop: 45, mobile: 65 },
    { month: "September", desktop: 68, mobile: 60 },
    { month: "October", desktop: 90, mobile: 70 },
    { month: "November", desktop: 75, mobile: 75 },
    { month: "December", desktop: 100, mobile: 60 },
  ];
  
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "gold",
    },
    mobile: {
      label: "Mobile",
      color: "navy",
    },
  } satisfies ChartConfig;
  
  const AreaGraph = () => {
    return (
      <ChartContainer config={chartConfig} className="w-full h-50 p-0">
        <ResponsiveContainer height="100%" width="100%">
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                  left: -20,
                  right: 20,
              }}
            >
            <CartesianGrid strokeWidth={2} strokeDasharray="5 5"/>
            <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={4}
                tickFormatter={(value) => value.slice(0, 3)}
                tick={{ fontSize: 10 }}
            />
            <YAxis
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                axisLine={false}
                tickMargin={1}
                tickLine={false} // Customize appearance
                tickSize={5} // Control the length
                tick={{ fontSize: 8 }}
                />
            <ChartTooltip cursor={false} content={<ChartTooltipContent/>} />
            <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#906929" stopOpacity={0.3} />
                    <stop offset={1} stopColor="#906929" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#395C75" stopOpacity={0.3} />
                    <stop offset={1} stopColor="#395C75" stopOpacity={0.05} />
                </linearGradient>
            </defs>
            <Area
                dataKey="mobile"
                type="natural"
                fill="url(#fillMobile)"
                fillOpacity={0.8}
                stroke="#395C75"
                dot= {true}
            />
            <Area
                dataKey="desktop"
                type="natural"
                fill="url(#fillDesktop)"
                fillOpacity={0.8}
                stroke="#906929"
                dot= {true}
            />
            <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    );
  };
  
  export default AreaGraph;
  