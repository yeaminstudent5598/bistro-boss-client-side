import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
  const { register, handleSubmit,reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api,imageFile, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    if(res.data.success){
        const menuItem ={
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
        }

        
        //
        const menuRes = await axiosSecure.post('/menu', menuItem);
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
            //pop
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} Item added `,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log(res.data);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg ">
      <h2 className="text-xl font-bold mb-4">Add Items</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Recipe Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Recipe name*</label>
          <input
            {...register("recipeName", { required: "Recipe name is required" })}
            type="text"
            placeholder="Recipe name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.recipeName && (
            <p className="text-red-500 text-sm">{errors.recipeName.message}</p>
          )}
        </div>

        {/* Category and Price */}
        <div className="grid grid-cols-2 gap-4">
          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-2">Category*</label>
            <select defaultValue='default'
              {...register("category", { required: "Category is required" })}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option disabled  value="default">
                Category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drink">Drink</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-2">Price*</label>
            <input
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Price"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>
        </div>

        {/* Recipe Details */}
        <div>
          <label className="block text-sm font-medium mb-2">Recipe Details*</label>
          <textarea
            {...register("details", { required: "Details are required" })}
            placeholder="Recipe Details"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
          {errors.details && (
            <p className="text-red-500 text-sm">{errors.details.message}</p>
          )}
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium mb-2">Choose File</label>
          <input
            {...register("image", { required: "Image is required" })}
            type="file"
            className="file-input file-input-secondary  "
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center gap-2 p-3 bg-[#916515] text-white font-medium rounded"
        >
          Add Item <FaUtensils/>
        </button>
      </form>
    </div>
  );
};

export default AddItems;
