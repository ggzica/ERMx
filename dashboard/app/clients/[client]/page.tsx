import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

const singleClientPage = () => {
    return (
        <div className="">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/clients">Clients</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>User Potato</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                <div className="w-full xl:w-1/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg">
                    </div>
                    <div className="bg-primary-foreground p-4 rounded-lg">
                    </div>
                    <div className="bg-primary-foreground p-4 rounded-lg">
                    </div>
                </div>
                <div className="w-full xl:w-2/3 space-y-6"></div>

            </div>
        </div>
    )
}

export default singleClientPage