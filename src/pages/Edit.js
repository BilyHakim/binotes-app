import React from "react";
import PageLayout from "../layouts/PageLayout";
import EditNoteForm from "../components/EditNoteForm";
import Container from "../components/ui/Container";
import { Link } from "react-router-dom";

const EditPage = () => {
  return (
    <PageLayout>
      <Container>
        <div>
          <h4>
            <Link to="/">Home</Link> / Edit{" "}
          </h4>
        </div>
        <h1>Edit Note</h1>
        <EditNoteForm />
      </Container>
    </PageLayout>
  );
};

export default EditPage;
