"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type GolfProCardProps = {
  message: string;
  proName: string;
  proTitle: string;
  avatarUrl: string;
  avatarAlt: string;
  proInitials: string;
};

export function GolfProCard({
  message,
  proName,
  proTitle,
  avatarUrl,
  avatarAlt,
  proInitials,
}: GolfProCardProps) {
  return (
    <Card className="border border-border shadow-none ring-0">
      <CardHeader className="flex flex-row items-start gap-4 border-b border-border pb-4">
        <Avatar size="lg" className="size-14 shrink-0">
          <AvatarImage src={avatarUrl} alt={avatarAlt} className="object-top" />
          <AvatarFallback className="font-serif text-lg">{proInitials}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 space-y-1">
          <CardTitle className="font-serif text-xl font-medium">Club Pro</CardTitle>
          <p className="text-sm font-medium text-foreground">{proName}</p>
          <p className="text-sm text-muted-foreground">{proTitle}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{message}</p>
      </CardContent>
    </Card>
  );
}
