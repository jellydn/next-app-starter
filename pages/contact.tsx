import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Counter from '../components/Counter';
import Layout from '../components/Layout';

const schema = yup.object().shape({
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
    message: yup.string().required('Message is required'),
});

type FormData = {
    email: string;
    message: string;
};

export default function Contact() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => console.log(data);

    return (
        <Layout>
            <DevTool control={control} placement="top-left" />

            <section className="relative text-gray-600 body-font">
                <div className="container flex flex-col justify-center px-5 py-24 mx-auto">
                    <div className="relative z-10 flex flex-col w-1/3 p-8 mx-auto mt-10 bg-white rounded-lg shadow-md">
                        <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
                            Feedback
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className="mb-5 leading-relaxed text-gray-600">
                                Drop us a message if you have any feedback.
                            </p>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="email"
                                    className="text-sm leading-7 text-gray-600"
                                >
                                    Email
                                    <input
                                        id="email"
                                        {...register('email', {
                                            required: true,
                                        })}
                                        className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
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
                                    className="text-sm leading-7 text-gray-600"
                                >
                                    Message
                                    <textarea
                                        id="message"
                                        {...register('message', {
                                            required: true,
                                        })}
                                        className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                                        defaultValue=""
                                    />
                                </label>
                                {errors.message && (
                                    <p role="alert" className="text-red-700">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
                            >
                                Submit
                            </button>
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
