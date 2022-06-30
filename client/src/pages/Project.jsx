import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import ClientInfo from "../components/ClientInfo";
import EditProjectForm from "../components/EditProjectForm";
import DeleteProjectButton from "../components/DeleteProjectButton";
import Spinner from "../components/Spinner";
import { FaEdit } from "react-icons/fa";

const Project = () => {
  const [enableEdit, setEnableEdit] = useState(false);
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Something went wrong.</p>;
  }

  const onToggle = () => {
    setEnableEdit((prevState) => !prevState);
  };

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>

          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>

          <ClientInfo client={data.project.client} />

          <button
            className={`btn btn-outline-success mt-4 ${enableEdit && "active"}`}
            onClick={onToggle}
          >
            <FaEdit /> Edit Project
          </button>
          {enableEdit && <EditProjectForm project={data.project} />}

          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
};

export default Project;
