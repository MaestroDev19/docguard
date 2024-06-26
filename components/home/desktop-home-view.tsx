import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import RecentlyAddedDocuments from "@/components/documents/recently-added";
import FileUploadDrawer from "./file-upload-drawer";
import ExpringDocuments from "./expiring-documents";
import NewCardButton from "./new-card-button";
import CardGroup from "../card/card-group";


interface DesktopHomeViewProps {
    userId: string;
}

export default async function DesktopHomeView({ userId }: DesktopHomeViewProps) {

    return (
        <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card
                className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
              >
                <CardHeader className="pb-3">
                  <CardTitle>Your Documents</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Introducing Our One-Stop System for your identity,
                    organized to your taste.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                    <FileUploadDrawer
                        uploadFileButton={
                            <Button>Create New Document</Button>
                        }
                        userId={userId}
                    />
                </CardFooter>
              </Card>

              <ExpringDocuments/>
            </div>
            <div>
              <RecentlyAddedDocuments/>
            </div>
          </div>
          <div>
            <Card
              className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
            >
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    Your Cards
                  </CardTitle>
                  <CardDescription>All your cards in one place</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <NewCardButton userId={userId}/>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div>
                  <CardGroup userId={userId}/>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">November 23, 2023</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </div>
        </main>
    )
}