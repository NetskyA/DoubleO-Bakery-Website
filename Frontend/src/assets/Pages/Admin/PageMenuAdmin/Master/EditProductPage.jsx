import React, { useState } from "react";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import { updateProduct } from "../../../../Services/productService";
import Alert from "../../Component/Alert";
import Joi from "joi";

const EditProductPage = () => {
  const { id_product } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const [productData, setProductData] = useState(
    location.state || {
      product_name: "",
      quantity: 0,
      keterangan: "",
      createby: "",
      promo: "",
      status: 0,
      harga: 0,
      image: null,
    }
  );
  const [imagePreview, setImagePreview] = useState(
    location.state?.image || null
  );

  // Skema validasi menggunakan Joi
  const schema = Joi.object({
    product_name: Joi.string().required().messages({
      "string.empty": "Nama Produk wajib diisi",
    }),
    quantity: Joi.number().required().messages({
      "number.base": "Quantity wajib diisi",
    }),
    keterangan: Joi.string().required().messages({
      "string.empty": "Keterangan wajib diisi",
    }),
    createby: Joi.string().required().messages({
      "string.empty": "Dibuat oleh wajib diisi",
    }),
    promo: Joi.string().required().messages({
      "string.empty": "Promo wajib diisi",
    }),
    status: Joi.number().required(),
    harga: Joi.number().required().messages({
      "number.base": "Harga wajib diisi",
    }),
    image: Joi.any().optional(),
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files.length > 0) {
      const file = files[0];

      if (file.size > 2 * 1024 * 1024) {
        setError("Ukuran file tidak boleh melebihi 2 MB.");
        setImagePreview(null);
        setProductData((prevData) => ({
          ...prevData,
          [name]: null,
        }));
        return;
      }

      setError("");
      setProductData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setProductData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi data menggunakan Joi
    const { error: validationError } = schema.validate(productData, {
      abortEarly: false,
    });
    if (validationError) {
      const errors = {};
      validationError.details.forEach((err) => {
        errors[err.path[0]] = err.message;
      });
      setValidationErrors(errors);
      return;
    }

    try {
      const formData = new FormData();
      Object.keys(productData).forEach((key) => {
        formData.append(key, productData[key]);
      });

      await updateProduct(id_product, formData);
      setSuccessMessage("Produk berhasil diperbarui!");
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/dashboard/admin/master/produk");
      }, 3000);
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Gagal memperbarui produk. Silakan coba lagi.");
    }
  };

  const handleReset = () => {
    setProductData(
      location.state || {
        product_name: "",
        quantity: 0,
        keterangan: "",
        createby: "",
        promo: "",
        status: 0,
        harga: 0,
        image: null,
      }
    );
    setImagePreview(location.state?.image || null);
    setError("");
    setValidationErrors({});
  };

  return (
    <div className="px-2 py-6 mb-40 m-2" style={{ fontFamily: "sans-serif" }}>
      <h2 className="text-2xl font-bold text-slate-600 mb-4">Edit Product</h2>

      {successMessage && (
        <Alert
          message={successMessage}
          type="success"
          onClose={() => setSuccessMessage("")}
        />
      )}
      {error && (
        <Alert message={error} type="error" onClose={() => setError("")} />
      )}

      <div className="head flex justify-between">
        <div className="cover flex">
          <div className="text-sm font-semibold text-blue-500">
            <Link to="/dashboard/admin/master/produk">Product List</Link>
          </div>
          <div className="ml-2 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-gray-400 justify-center mx-auto items-center stroke-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="text-sm font-semibold text-gray-400">
            Edit Product
          </div>
        </div>

        <Link className="m-2 text-base" to="/dashboard/admin/master/produk">
          <button className="w-24 h-10 rounded-lg border-2 font-semibold text-gray-100 bg-primary">
            Back
          </button>
        </Link>
      </div>

      <div className="main bg-white p-4 rounded-lg mt-2">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-slate-600">Nama Produk</label>
            <input
              type="text"
              name="product_name"
              className="w-full h-10 border-2 border-gray-200 p-3 rounded-lg outline-none"
              value={productData.product_name || ""}
              onChange={handleChange}
              required
            />
            {validationErrors.product_name && (
              <p className="text-red-500 text-sm">
                {validationErrors.product_name}
              </p>
            )}
          </div>

          <div>
            <label className="text-slate-600">Quantity</label>
            <input
              type="number"
              name="quantity"
              className="w-full h-10 border-2 border-gray-200 p-3 rounded-lg outline-none"
              value={productData.quantity || 0}
              onChange={handleChange}
              required
            />
            {validationErrors.quantity && (
              <p className="text-red-500 text-sm">
                {validationErrors.quantity}
              </p>
            )}
          </div>

          <div>
            <label className="text-slate-600">Harga</label>
            <input
              type="number"
              name="harga"
              className="w-full h-10 border-2 border-gray-200 p-3 rounded-lg outline-none"
              value={productData.harga || 0}
              onChange={handleChange}
              required
            />
            {validationErrors.harga && (
              <p className="text-red-500 text-sm">{validationErrors.harga}</p>
            )}
          </div>

          <div>
            <label className="text-slate-600">Promo</label>
            <input
              type="text"
              name="promo"
              className="w-full h-10 border-2 border-gray-200 p-3 rounded-lg outline-none"
              value={productData.promo || ""}
              onChange={handleChange}
              required
            />
            {validationErrors.promo && (
              <p className="text-red-500 text-sm">{validationErrors.promo}</p>
            )}
          </div>

          <div className="col-span-2">
            <label className="text-slate-600">Dibuat oleh</label>
            <input
              type="text"
              name="createby"
              className="w-full h-10 border-2 border-gray-200 p-3 rounded-lg outline-none"
              value={productData.createby || ""}
              onChange={handleChange}
              required
            />
            {validationErrors.createby && (
              <p className="text-red-500 text-sm">
                {validationErrors.createby}
              </p>
            )}
          </div>

          <div>
            <label className="text-slate-600">Keterangan</label>
            <textarea
              name="keterangan"
              className="w-full h-32 border-2 border-gray-200 p-3 rounded-lg outline-none"
              value={productData.keterangan || ""}
              onChange={handleChange}
              required
            />
            {validationErrors.keterangan && (
              <p className="text-red-500 text-sm">
                {validationErrors.keterangan}
              </p>
            )}
          </div>

          <div>
            <label className="text-slate-600">Gambar</label>
            <div className="flex w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-40 h-40 object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        SVG, PNG, JPG (2 MB)
                      </p>
                    </>
                  )}
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  name="image"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          <div className="col-span-2 flex justify-end mt-4 gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="w-40 h-10 bg-gray-200 text-gray-700 font-semibold rounded-lg"
            >
              Reset
            </button>
            <button
              type="submit"
              className="w-40 h-10 bg-primary text-white font-semibold rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductPage;
