import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Tiptap from "./Tiptap"

const RichTextEditor =()=> {
    const formSchema = z.object ({
        title: z.string().min(5,{message: "test"}).min(100,{message: "test"}),
        price: z.number().min(5,{message:"test"}),
        description:z.string().min(5,{message: "description"}).max(100).trim()
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            price: 29.99,
            description: ""
        }
    })
    return (
        <main className="">
            <Form {...form}>
                    <FormField
                    control={form.control}
                    name="description"
                    render={({field})=> (
                        <FormItem> 
                            <FormControl>
                                <Tiptap description={field.name} onChange={field.onChange} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}         
                    />
            </Form>
        </main>
    )
}

export default RichTextEditor;