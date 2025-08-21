
export default function DashboardProfile({ media, username }: { media: string | File | undefined , username: string }) {
  return (
    <>
      <div className="flex justify-center p-4">
        <img
          src={media as string}
          alt={username}
          className="rounded-full w-24 sm:w-36 md:w-44 max-w-full h-auto"
        />
      </div>
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center break-words">
        {username}
      </h1>
    </>
  )
}
