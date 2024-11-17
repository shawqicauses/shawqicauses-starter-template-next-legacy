// DONE REVIEWING: GITHUB COMMIT

"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from "../../components/ui"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters."
  })
})

const FormBasic = function FormBasic() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {username: ""}
  })

  const onSubmit = function onSubmit(values: z.infer<typeof formSchema>) {
    /* eslint "no-console": "off" */
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          name="username"
          control={form.control}
          render={({field}) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="@palestine" {...field} />
              </FormControl>
              <FormDescription className="mt-2">This is your public display name.</FormDescription>
              <FormMessage className="mt-2" />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-6">
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default FormBasic
