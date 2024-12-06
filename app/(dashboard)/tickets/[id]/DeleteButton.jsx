"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";

function DeleteButton({ id }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorMessage = `Failed to delete ticket: ${res.statusText}`;
        console.error(errorMessage);
        setIsLoading(false);
        return;
      }

      const json = await res.json();

      if (json.error) {
        console.log(json.error);
        setIsLoading(false);
        return;
      }

      router.refresh();
      router.push("/tickets");
    } catch (err) {
      console.error("An error occurred while deleting the ticket:", err);
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        className="btn-primary"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading && (
          <>
            <TiDelete />
            Deleting...
          </>
        )}

        {!isLoading && (
          <>
            <TiDelete />
            Delete Ticket
          </>
        )}
      </button>
    </>
  );
}

export default DeleteButton;
