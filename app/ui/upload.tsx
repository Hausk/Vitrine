import { upload } from '@/app/libs/actions/images'

export default function ServerUploadPage() {
  return (
    <main>
      <h1>React Server Component: Upload</h1>
      <form action={upload}>
        <input type="file" name="file" />
        <input type="submit" value="Upload" />
      </form>
    </main>
  )
}