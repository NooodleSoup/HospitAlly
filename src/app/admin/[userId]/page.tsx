export default function UserProfilePage({ params }: { params: { userId: string } }) {
  return <div>PatientId: {params.userId}</div>;
}
