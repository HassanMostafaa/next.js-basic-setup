import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card } from "semantic-ui-react";

export default function Index({ notes }) {
  //console.log(process.env.MONGO_CON_STR);
  return (
    <div className="notes-container">
      <h1>Notes</h1>
      <div className="grid wrapper">
        {notes.map((note) => (
          <div key={note._id}>
            <Card>
              <Card.Content>
                <Card.Header>
                  <Link href={`/notes/${note._id}`}>
                    <a style={{ color: "#333" }}>{note.title}</a>
                  </Link>
                </Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Link href={`/${note._id}`}>
                  <Button>View Note</Button>
                </Link>

                <Link href={`/${note._id}/edit`}>
                  <Button>Edit Note</Button>
                </Link>
              </Card.Content>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

// next js function that allows us to run some code before the actual component gets rendered out
// this will run on the server's-side

// its a server-side useEffect

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/notes");
  const { data } = await res.json();
  return { notes: data };
};
