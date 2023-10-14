import { useState } from 'preact/hooks'

export default function Liker() {
  const [like, setLike] = useState(false)

  return (
    <div class='flex justify-center items-center w-full mb-12 gap-2'>
      <button
        onClick={() => setLike(!like)}
        class='border border-gray-400 p-1 rounded-md bg-gray-700'
      >
        {like ? (
          <svg class="text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" stroke-width="0" fill="currentColor"></path>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
          </svg>
        )}
      </button>

      <p class='text-gray-400 font-bold'>
        {like ? 'Liked' : 'Like'}
      </p>
    </div>
  )
}
