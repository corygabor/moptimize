import Navbar from "@/components/navbar"
import SubscriptionPlans from "@/components/subscription-plans"

export const metadata = {
  title: "Subscriptions - Moptimize",
  description: "Flexible marketing operations subscription plans for teams of all sizes.",
}

export default function SubscriptionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SubscriptionPlans />
    </main>
  )
}
