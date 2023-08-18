export default function Read({ params }: { params: { id: string } }) {
  return (
    <>
      <h2>read</h2>
      {params.id}
    </>
  );
}
