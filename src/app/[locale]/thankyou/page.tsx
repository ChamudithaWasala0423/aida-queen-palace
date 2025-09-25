import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./animations.css";
import { Link } from "@/i18n/navigation";
import Heading from "@/components/general/Heading";
import { useTranslations } from "next-intl";

export default function ThankYouPage() {
  const t2 = useTranslations("ThankYouPage");
  return (
    <>
      <Heading
        title={t2("ThankyouPageHeading")}
        description={t2("ThankyouPageDescription")}
        keywords={t2("ThankyouPageKeywords")}
      />
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="check-animation">
                <CheckCircle className="h-16 w-16 text-cyan-600" />
              </div>
            </div>
            <CardTitle className="text-2xl">{t2("title")}</CardTitle>
            <CardDescription>{t2("successMessage")}</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">{t2("appreciation")}</p>
            <p className="text-sm text-muted-foreground">
              {t2("referenceId")}: {new Date().getTime().toString().slice(-8)}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Link href="/">
              <Button>{t2("returnHome")}</Button>
            </Link>
            <Button variant="outline">
              <Link href="/contact">{t2("sendAnother")}</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
