import Image from "next/image";

interface DeleteModal {
  confirmDelete: () => void;
  cancelDelete: () => void;
  title: string;
}

const DeleteModal = ({ confirmDelete, cancelDelete, title }: DeleteModal) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flexCenter">
      <div className="paddings w-4/5 lg:w-1/2 bg-white rounded">
        <p className="text-4xl border-b-2 pb-8 font-semibold">
          Delete Confirmation
        </p>
        <p className="py-8 rounded-xl my-8 bg-red-100 bg-opacity-50 px-4 text-xl text-red-900">
          Are you sure you want to delete {title}?
        </p>
        <div className="flex justify-end border-t-2 pt-8">
          <div className="flex">
            <button
              type="button"
              onClick={cancelDelete}
              className="flexCenter mr-4 text-white p-3 hover:bg-gray-100 hover:brightness-75 rounded-lg text-sm font-medium bg-gray"
            >
              <Image src="/close.svg" width={15} height={15} alt="cancel" />
              Cancel
            </button>
            <button
              type="button"
              onClick={confirmDelete}
              className="flexCenter text-white p-3  hover:bg-red-600 rounded-lg text-sm font-medium bg-primary-purple"
            >
              <Image src="/trash.svg" width={15} height={15} alt="delete" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
