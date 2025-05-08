import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { EllipsisVertical } from "lucide-react"
import { ReactNode } from "react"

interface StatCardProps {
    title: string
    value: string | number
    footerText: ReactNode
}

const StatisticCard = ({title, value, footerText} : StatCardProps)  => {
  return (
    <Card className="gap-2 py-4">
        <CardHeader className="flex justify-between items-center px-4">
            <h1 className="text-gray-500 text-xs">{title}</h1>
            <EllipsisVertical size={18}/>
        </CardHeader>
        <CardContent className=" flex items-center">
            <h1 className="text-4xl font-semibold">{value}</h1>
        </CardContent>
        <CardFooter className="px-4">
            {footerText}
        </CardFooter>
    </Card>
  )
}

export default StatisticCard