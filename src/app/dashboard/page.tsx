import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KPICards from "@/components/dashboard/KPICards";
import RevenueChart from "@/components/dashboard/RevenueChart";
import SegmentChart from "@/components/dashboard/SegmentChart";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import TopAccounts from "@/components/dashboard/TopAccounts";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />
      <main
        id="dashboard-content"
        className="flex-1 overflow-y-auto px-4 sm:px-6 py-6"
        aria-label="Dashboard content"
      >
        {/* Back to marketing site */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-[#4a5a7a] hover:text-[#8899bb] transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to marketing site
        </Link>

        {/* Page title */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-white">Overview</h1>
          <p className="text-sm text-[#4a5a7a] mt-0.5">
            Your operations snapshot — Last 7 days
          </p>
        </div>

        {/* KPI cards */}
        <KPICards />

        {/* Charts row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
          <div className="xl:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <SegmentChart />
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
          <TopAccounts />
          <ActivityFeed />
        </div>
      </main>
    </>
  );
}
