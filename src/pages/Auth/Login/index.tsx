import { z } from "zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from "react-router-dom"
import logo from "@/assets/images/logo-dark.png"
import authImage from "@/assets/images/auth-img.png"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import SuccessModal from "@/components/SuccessModal"

const formSchema = z.object({
    username: z.string().min(1, {message: "Username is required"}),
    password: z.string().min(1, {message: "Password is required"})
})

const Login = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
            defaultValues: {
            username: "",
            password: ""
        },
    })
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        try {
            console.log(values);
            setShowModal(true)

            // Redirect after 2 seconds
            setTimeout(() => {
                navigate("/dashboard")
            }, 1000)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <section className="h-screen bg-gold px-52 flex items-center">
                <div className="bg-white rounded-xl flex">
                    <div className="w-1/2 px-20 py-12 space-y-6">
                        <img src={logo} alt="" width={70} />
                        <h1 className="text-2xl font-semibold">Selamat Datang di Cabang Panel!</h1>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-8"
                            >
                            <FormField 
                                control={form.control}
                                name="username"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-bold">Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Masukkan username Anda" type="text" {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField 
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className="font-bold">Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Masukkan password Anda" type="password" {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Link to={'/'} className="text-sm font-semibold underline">Lupa Password ?</Link>
                            <Button type="submit" className="w-full bg-gold mt-4"> Masuk </Button>
                            </form>
                        </Form>
                    </div>
                    <div className="w-1/2 overflow-hidden">
                        <img src={authImage} alt="" className="rounded-r-xl"/>
                    </div>
                </div>
                <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)}/>
            </section>
        </>
    )
}

export default Login