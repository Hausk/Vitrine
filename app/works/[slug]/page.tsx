import { getRelatedImages } from "@/app/libs/actions/works";

export default async function Page({ params }: { params: { slug: string } }) {
  const relatedImages = await getRelatedImages(params.slug);
  return <div>
    <h1>Images pour le work: clp74iv9t000b12zoehxsbyqh</h1>
    {relatedImages.map((image, index) => (
      <p key={image.id}>[{index+1}]-{image.path}</p>
    ))}
  </div>
}