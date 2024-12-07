import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram } from 'lucide-react'

export function RecentDownloads() {
  // This would be populated with actual data in a real application
  const recentDownloads = [
    { id: 1, title: 'Funny Cat Video', date: '2023-06-01' },
    { id: 2, title: 'Amazing Skateboard Trick', date: '2023-05-31' },
    { id: 3, title: 'Beautiful Sunset Timelapse', date: '2023-05-30' },
  ]

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Recent Downloads</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {recentDownloads.map((download) => (
            <li key={download.id} className="flex items-center space-x-2">
              <Instagram className="h-5 w-5 text-pink-500" />
              <span>{download.title}</span>
              <span className="text-sm text-gray-500">{download.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

