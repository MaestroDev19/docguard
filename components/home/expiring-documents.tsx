import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import findDocumentsExpiringSoon from "@/server/documents/findDocumentsExpringSoon";
import findExpiredDocumets from "@/server/documents/findExpiredDcouments";
import { getUserFromSession } from "@/server/session";

export default async function ExpringDocuments() {
  const user = await getUserFromSession();

  const [expiredDocuments, documentsExpiringSoon] = await Promise.all([
    await findExpiredDocumets(user?.id!),
    await findDocumentsExpiringSoon(user?.id!),
  ]);

  return (
    <>
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>Expired Documents</CardDescription>
          <CardTitle className="text-4xl">{expiredDocuments.length}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">All clear here!</div>
        </CardContent>
      </Card>

      <Card x-chunk="dashboard-05-chunk-2">
        <CardHeader className="pb-2">
          <CardDescription>Expiring Soon</CardDescription>
          <CardTitle className="text-4xl">
            {documentsExpiringSoon.length}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            Time to start renewing
          </div>
        </CardContent>
      </Card>
    </>
  );
}
