import logo from "@/assets/images/logo-dark.png"
import CategoryIcon from "@/components/icons/CategoryIcon"
import TransactionIcon from "@/components/icons/TransactionIcon"
import DoorBellIcon from "@/components/icons/DoorBellIcon"
import ProductIcon from "@/components/icons/ProductIcon"
import RoleIcon from "@/components/icons/RoleIcon"
import SettingsIcon from "@/components/icons/SettingsIcon"
import WarehouseIcon from "@/components/icons/WarehouseIcon"
import MoneyIcon from "@/components/icons/MoneyIcon"
import CustomerIcon from "@/components/icons/CustomerIcon"
import { Link } from "react-router-dom"

const AppSidebar = () => {
  return (
    <aside className="w-1/6 py-6 px-8 rounded-xl bg-white">
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Logo Dark" className="w-3/5"/>
      </div>

      <div className="flex flex-col gap-3 text-sm text-dark-grey">
        <Link to={"/"} className="flex items-center gap-3"> <CategoryIcon/> Dashboard</Link>
        <Link to={"/"} className="flex items-center gap-3"> <TransactionIcon/> Kasir</Link>
        <Link to={"/"} className="flex items-center gap-3"> <DoorBellIcon/> Booking & Visit</Link>
        <Link to={"/"} className="flex items-center gap-3"> <ProductIcon/> Booking Produk</Link>
        <Link to={"/"} className="flex items-center gap-3"> <CustomerIcon/> Customer</Link>
        <Link to={"/"} className="flex items-center gap-3"> <RoleIcon/> Karyawan</Link>
        <Link to={"/"} className="flex items-center gap-3"> <SettingsIcon/> Produk dan Layanan</Link>
        <Link to={"/"} className="flex items-center gap-3"> <WarehouseIcon/> Warehouse</Link>
        <Link to={"/"} className="flex items-center gap-3"> <MoneyIcon/> Keuangan</Link>
      </div>
    </aside>
  )
}

export default AppSidebar