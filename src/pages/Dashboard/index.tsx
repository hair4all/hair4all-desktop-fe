import AreaGraph from "@/components/modules/AreaGraph"
import BarGraph from "@/components/modules/BarGraph"
import ChartCard from "@/components/modules/ChartCard"
import LineGraph from "@/components/modules/LineGraph"
import PieGraph from "@/components/modules/PieGraph"
import StatisticCard from "@/components/modules/StatisticCard"
import ToggleButton from "@/components/modules/ToggleButton.tsx"

import DefaultLayout from "@/layouts/DefaultLayout"

const Dashboard = () => {
  return (
    <DefaultLayout>
        {/* Content */}
        <section className="flex gap-4 flex-1 ">
          <div className="grid grid-cols-3 grid-rows-[auto_auto_auto] gap-4 w-[900px]">
            <LineGraph/>

            <StatisticCard
              title="Total Kunjungan 2024"
              value={1400}
              footerText={<h1 className="text-lg"><span className="font-semibold">111</span> Jenis Layanan</h1>}
            />

            <StatisticCard
              title="Total Penjualan Produk 2024"
              value={'Rp 450jt'}
              footerText={<h1 className="text-lg"><span className="font-semibold">111</span> Jenis Produk</h1>}
            />
            
            <ChartCard
              title="Order Rate 2025"
              chart={<AreaGraph/>}
              className="col-span-3"
            />

            <ChartCard
              title="Aktivitas 2025 (juta)"
              headerActions={<ToggleButton/>}
              chart={<BarGraph/>}
              className="col-span-3"
            />
          </div>

          <div className="grid gap-4 w-[400px]">
            <ChartCard
              title="Produk Populer Tahun 2025"
              chart={<PieGraph/>}
            />
            <ChartCard
              title="Layanan Populer Tahun 2025"
              chart={<PieGraph/>}
            />

          </div>
        </section>
    </DefaultLayout>
  )
}

export default Dashboard