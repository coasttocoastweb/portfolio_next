import { SectionContainer } from "@components/Section";
import { Layout } from "@components/Layout";
import Link from "next/link";
import Image from "next/image";
import SEO from "@components/SEO/SEO";
import avenueIcon from "../public/icons/avenue-icon.svg";
import articooleIcon from "../public/icons/articoole-icon.svg";
import pathwayIcon from "../public/icons/pathway-icon.png";
import profilePicture from "../public/images/picture.png";
import wordpressIcon from "../public/images/wordpress.png";
import shopifyIcon from "../public/images/shopify.svg";
import nextjsIcon from "../public/images/nextjs.png";
import { PageTitle } from "@components/Title";
import {
    Card,
    CardBody,
    CardGroup,
    CardHeader,
    CardImage
} from "@components/Card";
import { BadgeGroup, BadgeMessage } from "@components/Badge";
import { getAllPosts } from "./api/blog/getBlogs";
import { MotionBTTContainer } from "@components/Motion";

const projectData = [
    {
        id: "1",
        title: "Steve Lutz Dev Sandbox",
        link: "https://stevelutz.dev/sandbox",
        logo: nextjsIcon,
        content: "After-hours digital playground."
    },
    {
        id: "2",
        title: "Vuori Clothing",
        link: "https://vuoriclothing.com",
        logo: shopifyIcon,
        content: "Shopify Plus"
    },
    {
        id: "3",
        title: "Blenders Eyewear",
        link: "https://blenderseyewear.com",
        logo: shopifyIcon,
        content: "Shopify Plus"
    },
    {
        id: "4",
        title: "Lofty Coffee",
        link: "https://loftycoffee.com",
        logo: shopifyIcon,
        content: "Shopify - Site Launching Soon"
    },
    {
        id: "5",
        title: "Rudco Plumbing",
        link: "https://rudcoplumbing.com",
        logo: wordpressIcon,
        content: "WordPress"
    },
    {
        id: "5",
        title: "Montano Wines",
        link: "https://montanowines.com",
        logo: wordpressIcon,
        content: "WordPress - Woocommerce"
    }
];

export default function Home({ posts }) {
    return (
        <Layout>
            <SEO title="Steve Lutz Dev" description="Portfolio" />
            <div className="main-wrapper wrap-sm grid gap-16 px-8 md:gap-24 lg:gap-32 mx-auto">
                {/* Header / Hero */}
                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    <SectionContainer className="hero--container flex flex-col gap-8 mt-32">
                        <Image
                            src={profilePicture}
                            className=" rounded-full bg-neutral-100 object-cover"
                            width={128}
                            height={128}
                            alt="Dev"
                        />
                        <div className="content-container">
                            <PageTitle
                                className="mb-8 lg:mb-4"
                                headingClassName="mb-0"
                            >
                                I&apos;m Steve - Front-End Engineer & UI/UX
                                Enthusiast
                            </PageTitle>
                            <div className="content text-3xl md:text-3xl font-medium leading-8 lg:leading-10 tracking-tight lg:tracking-tighter text-neutral-500 ">
                                I love building stuff! Creating original and
                                dynamic experiences.
                            </div>
                        </div>
                    </SectionContainer>
                </MotionBTTContainer>
                {/* Card Containers */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <SectionContainer className="projects--container">
                        <h2 className="font-medium text-h4 text-neutral-500 my-4 leading-8 tracking-tighter">
                            Projects
                        </h2>
                        <CardGroup className="grid scroll-m-24 gap-5 grid-cols-1 md:grid-cols-2 w-full">
                            {projectData.map((project) => (
                                <Card
                                    key={project.id}
                                    className="col-span-1"
                                    link={project.link}
                                    target="_blank"
                                >
                                    {!!project.badgeContent && (
                                        <BadgeGroup
                                            className="mb-0 m-6"
                                            alignment="left"
                                        >
                                            <BadgeMessage>
                                                On Going
                                            </BadgeMessage>
                                        </BadgeGroup>
                                    )}
                                    <CardBody>
                                        <CardImage
                                            src={project.logo}
                                            alt="Articoole Banner"
                                            imageClassName="absolute top-0 right-0 m-6 p-4 bg-white rounded-3xl"
                                            width={80}
                                            height={80}
                                        />
                                        <div className="card-content absolute bottom-8 left-6 right-6">
                                            <CardHeader className="">
                                                {project.title}
                                            </CardHeader>
                                            <div className="content break-words  text-3xl font-medium leading-10 tracking-tight lg:tracking-tighter text-neutral-500 ">
                                                <p>{project.content}</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </CardGroup>
                    </SectionContainer>
                </MotionBTTContainer>
            </div>

        </Layout>
    );
}

export const getServerSideProps = async () => {
    const allPosts = getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "excerpt"
    ]);

    const formatedPosts = {};

    allPosts.forEach((post, index) => {
        const formattedDate = new Date(post.date).toISOString().split("T")[0];

        formatedPosts[index] = { ...post, date: formattedDate }; // assign formatted post object to the object using post ID as the key
    });

    // Convert object to an array
    const sortedPosts = Object.values(formatedPosts);

    // Sort posts by date in descending order
    sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
        props: { posts: sortedPosts }
    };
};
