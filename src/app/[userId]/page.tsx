export default function Page({ params }: { params: { userId: string } }) {
  return <div>{ params.userId }&apos;s Profile</div>
}
