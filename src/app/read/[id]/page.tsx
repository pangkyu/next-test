export default async function Read({ params }: { params: { id: number } }) {
  const response = await fetch(`http://localhost:9999/topics/${params.id}`);
  const topic = await response.json();
  return (
    <>
      <h2>{topic.title}</h2>
      <p>{topic.body}</p>
    </>
  );
}
