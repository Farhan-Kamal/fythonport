"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContentViewProps {
  title: string;
  description: string;
  url: string;
}

export function ContentView({ title, description, url }: ContentViewProps) {
  return (
    <div className="h-full p-6">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">{description}</p>
          <div className="w-full aspect-video rounded-lg overflow-hidden border">
            <iframe
              src={url}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}