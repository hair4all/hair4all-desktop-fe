import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Search } from "lucide-react"

const Menubar = () => {
    return (
        <div className="py-2 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="relative w-72">
            <Search className="absolute top-1/2 left-2.5 -translate-y-1/2 font-bold text-dark-gray" width={15} strokeWidth={3}/>
            <Input className="pl-8 py-2 bg-white rounded-2xl" placeholder="Search"/>
        </div>
        <div className="flex gap-8">
            <Button className="rounded-full w-10 h-10">
                <Bell/>
            </Button>

            <div className="flex items-center gap-2">
                <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback>Profile Image</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                <h1 className="font-semibold text-sm">Hair4All</h1>
                <p className="text-xs">Admin Cabang</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Menubar