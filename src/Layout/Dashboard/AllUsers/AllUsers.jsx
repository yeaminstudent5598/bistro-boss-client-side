import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

     const handleDelete = user => {
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
          
            axiosSecure.delete(`/users/${user._id}`)
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
  {/* Header Section */}
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-3xl font-semibold">All Users</h2>
    <h2 className="text-3xl font-semibold">Total Users: {users.length}</h2>
  </div>

  {/* Table Section */}
  <div className="overflow-x-auto">
    <table className="table w-full border">
      {/* Table Header */}
      <thead className="bg-[#D1A054] text-white">
        <tr>
          <th></th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ROLE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      {/* Table Body */}
      <tbody>
        {users.map((user, index) => (
          <tr key={user._id} className="hover:bg-gray-100">
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              { user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="flex btn btn-error items-center gap-2 text-white">
                <FaUsers className='text-2xl' /> {/* Role Icon */}
                
              </button>}
            </td>
            <td>
              <button onClick={() => handleDelete(user)} className="btn btn-sm bg-red-600 btn-error text-white flex items-center gap-2">
                <FaTrashAlt  /> {/* Delete Icon */}
                
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

export default AllUsers;