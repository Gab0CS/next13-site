import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <main className="flex-center paddings w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <Skeleton className="w-full h-[274px] rounded-lg" />
      </section>
      <section className="mt-6 flex w-full flex-col sm:mt-20">
        <Skeleton className="h-10 w-56" />
        <div className="mt-12 flex w-full flex-wrap">
          <Skeleton className="h-[440px] w-full sm:w-[356px] bg-gray"/>
          <Skeleton className="h-[440px] w-full sm:w-[356px] bg-gray"/>
          <Skeleton className="h-[440px] w-full sm:w-[356px] bg-gray"/>
        </div>
      </section>
    </main>
  )
}

export default loading
