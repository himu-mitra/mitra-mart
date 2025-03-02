import Heading from "@/components/backOffice/dashboard/Heading";
import LargeCards from "@/components/backOffice/dashboard/LargeCards";
import SmallCards from "@/components/backOffice/dashboard/SmallCards";

export default function DashboardPage() {
  return (
    <div>
      <Heading title={"Dashboard Overview"}></Heading>
      {/* Large Cards */}
      <LargeCards></LargeCards>
      {/* Small Cards */}
      <SmallCards></SmallCards>
      {/* Charts */}
      {/* Recent Orders Table */}
    </div>
  );
}
