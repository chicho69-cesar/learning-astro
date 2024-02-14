import { allPlaylists, songs as allSongs } from "@/lib/data"

export async function GET({ params, request }) {
  const { url } = request
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  const playlist = allPlaylists.find((p) => p.id === id)
  const songs = allSongs.filter((s) => s.albumId === playlist?.albumId)

  return new Response(
    JSON.stringify({ playlist, songs }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
