import Menubar from "@/components/modules/Menubar"
import AppSidebar from "@/components/modules/Sidebar"

interface DefaultLayoutProps {
    children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div className="p-8 flex gap-4 min-h-screen w-full bg-light-navy">
            <AppSidebar />
            <main className="w-4/5 space-y-4 flex flex-col">
                <Menubar/>
                {children}
            </main>
        </div>
    )
}

export default DefaultLayout