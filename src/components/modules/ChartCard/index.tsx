import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ReactNode } from 'react'
import SelectButton from '../SelectButton.tsx'

interface ChartCardProps {
    title: string
    chart: ReactNode
    headerActions?: ReactNode
    className?: string
}

const ChartCard = ({title, chart, headerActions, className=""} : ChartCardProps) => {
  return (
    <Card className={`gap-4 py-4 h-full ${className}`}>
        <CardHeader className="flex justify-between items-center px-4">
            <h1 className="font-semibold text-[15px]">{title}</h1>
            <div className='flex gap-2'>
                <SelectButton/>
                {headerActions}
            </div>
        </CardHeader>
        <CardContent className="flex px-0 items-center">
            {chart}
        </CardContent>
    </Card>
  )
}

export default ChartCard