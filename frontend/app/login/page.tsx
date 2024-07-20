'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import Cookies from "universal-cookie";
import LoginForm from "./loginform";
import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin",], display: 'swap' });

export default function Login() {
    const router = useRouter();
    const cookies = new Cookies();
    const token = cookies.get("TOKEN");

    useEffect(() => {
        if (token) {
            router.push("/dashboard");
        }
   // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div
                aria-hidden="true"
                className="login absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">

                <div className="max-w-screen-xl m-0 shadow-lg sm:rounded-lg flex justify-center flex-1">
                    <div className="flex flex-col sm:justify-center lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-full flex-1 mt-8">

                                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center">
                                    <Image src={"/images/logo/logo.svg"}
                                        width={20}
                                        height={20}
                                        style={{
                                            width: "200px",
                                            height: "auto",
                                        }}
                                        alt="logo"
                                        priority
                                    />

                                    <h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-gray-900">
                                        Sign in to your account
                                    </h2>
                                </div>
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 text-center hidden lg:flex bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat  bg-[url('/images/illustration/illustration-03.svg')]">
                        </div>
                    </div>
                </div>

            </div>

            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
        </>
    );
}

