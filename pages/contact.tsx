import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Button from '../components/Button';
import Counter from '../components/Counter';
import Layout from '../components/Layout';
import logger from '../logger';

const schema = z.object({
    email: z.string().email(),
    message: z.string().min(10),
});

type FormValue = z.infer<typeof schema>;

export default function Contact() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormValue>({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data: FormValue) => {
        logger.log(data);
    };

    return (
        <Layout>
            <DevTool control={control} placement="top-left" />

            <section className="relative body-font">
                <div className="container flex flex-col justify-center py-24 px-5 mx-auto">
                    <div className="flex relative z-10 flex-col p-8 mx-auto mt-10 rounded-lg shadow-md">
                        <h2 className="mb-1 text-lg font-medium title-font">
                            Feedback
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className="mb-5 leading-relaxed ">
                                Drop us a message if you have any feedback.
                            </p>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="email"
                                    className="text-sm leading-7"
                                >
                                    Email
                                    <input
                                        id="email"
                                        {...register('email', {
                                            required: true,
                                        })}
                                        className="py-1 px-3 w-full text-base leading-8  rounded border border-foreground transition-colors duration-200 ease-in-out outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                    />
                                </label>
                                {errors.email && (
                                    <p role="alert" className="text-red-700">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="message"
                                    className="text-sm leading-7"
                                >
                                    Message
                                    <textarea
                                        id="message"
                                        {...register('message', {
                                            required: true,
                                        })}
                                        className="py-1 px-3 w-full h-32 text-base leading-6 rounded border border-gray-300 transition-colors duration-200 ease-in-out outline-hidden resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                        defaultValue=""
                                    />
                                </label>
                                {errors.message && (
                                    <p role="alert" className="text-red-700">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>
                            <Button type="submit" intent="primary">
                                Submit
                            </Button>
                        </form>
                    </div>
                    <div className="mx-auto mt-10">
                        <Counter />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
