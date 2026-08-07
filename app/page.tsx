import Page from "@/components/layout/Page";
import Hero from "@/components/home/Hero";
import FeaturedPost from "@/components/home/FeaturedPost";
import LatestPosts from "@/components/home/LatestPosts";

export const revalidate = 3600;

export default function Home() {
  return (
    <Page>
      <Hero />
      <FeaturedPost />
      <LatestPosts />
    </Page>
  );
}