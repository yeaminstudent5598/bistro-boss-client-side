import { FaEdit, FaPen, FaTrash } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu,loading,refetch] = useMenu();
  console.log(refetch);
  const axiosSecure = useAxiosSecure();
//   console.log(menu);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
      
          const res = await axiosSecure.delete(`/menu/${id}`);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            
          }
         
        
       
      }
    });
  };
  

   


  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Total Items: {menu.length}</h2>
      <div className="overflow-x-auto rounded-t-xl">
        <table className="table-auto  w-full border-collapse">
          <thead>
            <tr className="bg-[#916515]  text-white text-left">
              <th className="py-2 px-4"></th>
              <th className="py-2 px-4">Item Image</th>
              <th className="py-2 px-4">Item Name</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Update</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id} className="border-t">
                <th>
                    {index + 1}
                </th>
                {/* Item Image */}
                <td className="py-3 px-4">
                  <div className="w-12 h-12">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </td>

                {/* Item Name */}
                <td className="py-3 px-4">{item.name}</td>

                {/* Price */}
                <td className="py-3 px-4">${item.price}</td>

                {/* Edit Action */}
                <td className="py-3 px-4">
                  <button  className="btn btn-md btn-warning text-white">
                    <FaEdit></FaEdit>
                  </button>
                </td>

                {/* Delete Action */}
                <td className="py-3 px-4">
                  <button onClick={() => handleDelete(item._id)} className="btn btn-md btn-error text-white">
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
