import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LabelList, Pie, PieChart } from "recharts"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "green",
  },
  safari: {
    label: "Safari",
    color: "red",
  },
  firefox: {
    label: "Firefox",
    color: "orange",
  },
  edge: {
    label: "Edge",
    color: "blue",
  },
  other: {
    label: "Other",
    color: "purple",
  },
} satisfies ChartConfig

const PieGraph = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full h-72"
  >
    <PieChart>
    <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
      <Pie data={chartData} dataKey="visitors">
        <LabelList
                  dataKey="browser"
                  className="fill-background"
                  stroke="none"
                  fontSize={8}
                  formatter={(value: keyof typeof chartConfig) =>
                    chartConfig[value]?.label
                  }
        />
      </Pie>
      <ChartLegend
        content={<ChartLegendContent nameKey="browser" />}
        className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
      />
    </PieChart>
  </ChartContainer>
  )
}

export default PieGraph