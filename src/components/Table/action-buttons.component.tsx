import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const TableActionbutton = ({ deleteAction, id, editUrl }: { deleteAction: any, id: string, editUrl: string }) => {
	const handelDelete = async (e: any) => {
		e.preventDefault();
		try {
			const result = await Swal.fire({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, delete it!"
			});
			if (result.isConfirmed) {
				deleteAction(id)
			}
		} catch (exception) {
			console.log(exception);

		}
	}

	return (
		<>
			<div className=" z-10 w-44 text-right">
				<NavLink to={editUrl} className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800 dark:hover:bg-green-500">
					<i className="ri-edit-fill tetx-md"></i>
				</NavLink>
				<button type="button" onClick={handelDelete} className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500">
					<i className="ri-delete-bin-fill tetx-md"></i>
				</button>

			</div>
		</>
	)
}
export default TableActionbutton