import successVector from "@/assets/images/secure.png"
import { Dialog, DialogContent } from "../ui/dialog"

interface SuccessModalProps {
    isOpen: boolean
    onClose: () => void
}

const SuccessModal = ({isOpen, onClose} : SuccessModalProps ) => {
    return (
        <div>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent 
                    className="[&>button:last-child]:hidden sm:max-w-2xl px-30 py-10" 
                    onInteractOutside={(e) => {
                        e.preventDefault();
                    }}
                    onEscapeKeyDown={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className="text-center space-y-2 ">
                        <div>
                            <img src={successVector} alt="" className="w-3/4 m-auto"/>
                        </div>
                        <h1 className="text-gold text-2xl font-bold">Berhasil Login!</h1>
                        <p className="leading-relaxed">Silahkan menunggu beberapa saat untuk melihat dashboard cabang kamu!</p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default SuccessModal