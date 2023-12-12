import { SectionContainer } from "@components/Section";
import { MotionBTTContainer } from "@components/Motion";
import Link from "next/link";

export const Layout = ({ children, className = "" }) => {
    return (
        <main className={`main ${className && className}`}>
            {children}
            {/* Footer */}
            <SectionContainer className="mt-32">
                <footer className="py-40 bg-neutral-100">
                    <div className="wrap-sm mx-auto px-8 grid gap-16">
                        <MotionBTTContainer
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <h2 className="font-medium text-4xl md:text-6xl lg:text-7xl leading-10 lg:leading-[70px] tracking-tight lg:tracking-tighter">
                                Connect with {" "}
                                <span className=" text-neutral-400 inline font-bold underline-offset-4 underline">
                                   me
                                </span>
                            </h2>
                        </MotionBTTContainer>
                        <MotionBTTContainer
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <div className="footer-credits">
                                <Link
                                    className="block text-3xl md:text-5xl lg:text-4xl hover:underline font-medium mb-2 md:mb-8 lg:mb-4 leading-10 tracking-tighter"
                                    href="mailto:steve@coasttocoastweb.com"
                                >
                                    steve@stevelutz.dev
                                </Link>
                                <div className="footer-socials font-medium grid gap-6 md:gap-10 grid-cols-3 max-w-md text-xl md:text-3xl lg:text-2xl leading-10 tracking-tighter">
                                    <Link
                                        href="https://www.linkedin.com/in/#/"
                                        className="grid-cols-1 hover:underline"
                                    >
                                        Linkedin
                                    </Link>
                                    <Link
                                        href="https://github.com/#"
                                        className="grid-cols-1 hover:underline"
                                    >
                                        GitHub
                                    </Link>
                                    <Link
                                        href="https://codepen.com/slstudios"
                                        className="grid-cols-1 hover:underline"
                                    >
                                        Codepen
                                    </Link>
                                </div>
                            </div>
                        </MotionBTTContainer>
                        <MotionBTTContainer
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <Link
                                className="text-neutral-500 text-lg"
                                href="https://avenuelabs.co/"
                            >
                                2024 stevelutz.dev
                            </Link>
                        </MotionBTTContainer>
                    </div>
                </footer>
            </SectionContainer>
        </main>
    );
};
