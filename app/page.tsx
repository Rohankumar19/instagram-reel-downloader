import { DownloadForm } from './components/download-form'
import { RecentDownloads } from './components/recent-downloads'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-pink-500">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Instagram Reel Downloader</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <DownloadForm />
          <RecentDownloads />
        </div>
      </main>
    </div>
  )
}

