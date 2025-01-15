import { MdDelete } from "react-icons/md";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
      
        axiosSecure.delete(`/carts/${id}`)
        .then(res => {
            if(res.data.deletedCount > 0) {

                refetch();

                    Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });

            }
        })
        }
      });
  }

  return (
    <div className="p-8">
      {/* Header with Total Orders and Total Price */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Total Orders: {cart.length}</h2>
        <h2 className="text-2xl font-bold">Total Price: ${totalPrice}</h2>
        <button className="btn btn-warning px-6 py-2 font-bold text-white">Pay</button>
      </div>

      {/* Table with Items */}
      <div className="overflow-x-auto rounded-t-3xl">
        <table className="table-auto  w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-orange-400 text-white">
              <th className="p-4 border border-gray-300">ITEM IMAGE</th>
              <th className="p-4 border border-gray-300">ITEM NAME</th>
              <th className="p-4 border border-gray-300">PRICE</th>
              <th className="p-4 border border-gray-300">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id} className="text-center border-t">
                <td className="p-4 flex items-center pl-3 border border-gray-300">
                    <th className="mr-10">
                       {index + 1}
                    </th>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                
                <td className="p-4 border border-gray-300 font-medium">{item.name}</td>
                <td className="p-4 border border-gray-300">${item.price}</td>
                <td className="p-4 border border-gray-300">
                  <button onClick={() => handleDelete(item._id)} className="btn btn-error text-2xl px-4 py-2 text-white">
                    <MdDelete></MdDelete>
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

export default Cart;
