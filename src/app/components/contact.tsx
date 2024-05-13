"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const api_key = "df1b52bf-14a6-4a98-9646-a80593936b72";

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", api_key!);

        const formValues = Object.fromEntries(formData) as {
            [key: string]: FormDataEntryValue;
        };
        const { name, email, message } = Object.fromEntries(
            formData.entries()
        ) as unknown as FormData;

        const json = JSON.stringify({ name, email, message });
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: {
                    scale: 0.9,
                    opacity: 0,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.2,
                    },
                },
            }}
        >
            <div
                className="z-10 relative p-6 mt-10 w-full flex flex-col md:flex-row items-center"
                id="contact"
            >
                <div className="contact-info w-full md:w-1/2 px-2 md:pr-10">
                    <h1 className="text-5xl font-bold mb-5">
                        Let&apos;s chat.
                    </h1>
                    <p className="text-md">
                        I&apos;d love to hear from you! Whether you have a
                        question, want to discuss a project, or simply want to
                        connect, feel free to reach out to me using the contact
                        form.
                    </p>
                    <div className="contact-direct">
                        <div className="email flex mt-5 items-center">
                            <Image
                                src="/email.svg"
                                width={30}
                                height={40}
                                alt="Mail Icon"
                            />
                            <p className="text-md ml-5">
                                manan04shah@gmail.com
                            </p>
                        </div>
                        <div className="phone flex mt-2 items-center">
                            <Image
                                src="/phone.svg"
                                width={30}
                                height={40}
                                alt="Phone Icon"
                            />
                            <p className="text-md ml-5">+91 98694 85712</p>
                        </div>
                    </div>
                    <div className="socials flex gap-5 mt-5">
                        <a
                            href="https://www.linkedin.com/in/manan-shah-0918/"
                            target="_blank"
                        >
                            <Image
                                src="/linkedin.svg"
                                width={30}
                                height={40}
                                alt="Mail Icon"
                            />
                        </a>
                        <a
                            href="https://github.com/manan04shah"
                            target="_blank"
                        >
                            <Image
                                src="/github.svg"
                                width={30}
                                height={40}
                                alt="Mail Icon"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/mananshah.__/"
                            target="_blank"
                        >
                            <Image
                                src="/instagram.svg"
                                width={30}
                                height={40}
                                alt="Mail Icon"
                            />
                        </a>
                    </div>
                </div>
                <div className="form-main w-full md:w-1/2 h-full mt-10">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        <input
                            type="text"
                            name="name"
                            className="bg-black bg-opacity-60 border-2 p-2 rounded-lg outline-none focus:shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.7)] transition duration-300 ease-in-out"
                            placeholder="Name"
                            required={true}
                        />
                        <input
                            type="email"
                            name="email"
                            className="bg-black bg-opacity-60 border-2 p-2 rounded-lg outline-none focus:shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.7)] transition duration-300 ease-in-out"
                            placeholder="Email ID"
                            required={true}
                        />
                        <textarea
                            name="message"
                            className="bg-black bg-opacity-60 border-2 p-2 rounded-lg outline-none focus:shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.7)] transition duration-300 ease-in-out"
                            placeholder="Enter your message"
                            required={true}
                        ></textarea>
                        <button
                            type="submit"
                            className="w-1/2 md:w-1/4 self-center p-2 text-white bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-white border-opacity-50 rounded-md flex justify-center items-center gap-2 outline-none focus:shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:shadow-[0_0_10px_rgba(255,255,255,0.7)] transition duration-300 ease-in-out"
                            style={{
                                background:
                                    "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
                            }}
                        >
                            Send
                            <Image
                                src="/arrow.png"
                                width={20}
                                height={20}
                                alt="Arrow"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
