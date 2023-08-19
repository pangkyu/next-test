"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export function Control() {
  const params = useParams();
  const id = params.id;
  return (
    <>
      {id ? (
        <>
          <li>
            <Link href={"/update/1"}>update</Link>
          </li>
          <li>
            <input type="button" value="delete"></input>
          </li>
        </>
      ) : null}
      <li>
        <Link href={"/create"}>create</Link>
      </li>
    </>
  );
}
