"use client";
import { deleteProject, fetchToken } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import LoadingSpinner from "./LoadingSpinner";

const ProjectActions = ({
  projectId,
  title,
}: {
  projectId: string;
  title: string;
}) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [confirmingDelete, setConfirmingDelete] = useState<boolean>(false);
  const cancelDelete = () => {
    setConfirmingDelete(false);
  };
  const handleDeleteProject = async () => {
    setIsDeleting(true);
    const { token } = await fetchToken();

    try {
      await deleteProject(projectId, token);
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      {isDeleting && <LoadingSpinner />}
      {confirmingDelete && (
        <DeleteModal
          confirmDelete={handleDeleteProject}
          cancelDelete={cancelDelete}
          title={title}
        />
      )}
      <Link
        href={`/edit-project/${projectId}`}
        className="flexCenter edit-action_btn"
      >
        <Image src="/pencil.svg" width={15} height={15} alt="edit" />
      </Link>
      <button
        type="button"
        onClick={() => setConfirmingDelete(true)}
        className={`flexCenter delete-action_btn ${
          isDeleting ? "bg-gray" : "bg-primary-purple"
        }`}
      >
        <Image src="/trash.svg" width={15} height={15} alt="delete" />
      </button>
    </>
  );
};

export default ProjectActions;
