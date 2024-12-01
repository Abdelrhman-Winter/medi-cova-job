import AboutSection from "@/components/about/AboutSection";
import PrimeryButton from "@/components/buttons/PrimeryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import JobDetailsSection from "@/components/jobDetails/JobDetailsSection";
import RequriementsSection from "@/components/requriements/RequriementsSection";
import SideBar from "@/components/sideBar/SideBar";

export default function Home() {
  return (
    <main className=" flex">
      <SideBar />
      <div className=" w-full">
        <JobDetailsSection />
        <AboutSection />
        <RequriementsSection />
        <div className="flex flex-col md:flex-row justify-center items-center gap-9 mb-12">
          <SecondaryButton label="Save and Publish Later" />
          <PrimeryButton text="Save and Next" />
        </div>
      </div>
    </main>
  );
}
