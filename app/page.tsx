import { Sidebar } from "@/components/sidebar"
import { TopHeader } from "@/components/top-header"
import { DebitCard } from "@/components/debit-card"
import { CardActions } from "@/components/card-actions"
import { CardTransactions } from "@/components/card-transactions"

export default function CardsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-56 flex flex-1 flex-col">
        {/* Top Header */}
        <TopHeader />

        {/* Page Content */}
        <main className="flex-1 p-6">
          {/* Page Title */}
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">My Cards</h1>
            <button className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {"Manage All Cards >"}
            </button>
          </div>

          {/* Card + Actions Row */}
          <div className="mb-6 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:justify-between">
            {/* Debit Card - stretches to match actions height, capped width */}
            <div className="min-w-0 max-w-[520px] lg:flex-1">
              <DebitCard />
            </div>

            {/* Card Actions - fixed width on desktop, pushed to the right */}
            <div className="shrink-0 lg:w-72">
              <CardActions />
            </div>
          </div>

          {/* Transactions */}
          <CardTransactions />
        </main>
      </div>
    </div>
  )
}
