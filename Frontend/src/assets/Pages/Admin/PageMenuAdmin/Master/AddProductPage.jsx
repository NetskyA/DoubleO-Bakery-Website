import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../../Services/productService";
import { Link } from "react-router-dom";
import Alert from "../../Component/Alert";
import Joi from "joi";

const AddProductPage = () => {
  const [productData, setProductData] = useState({
    product_name: "",
    id_popular: "",
    quantity: "",
    keterangan: "",
    createby: "",
    promo: "",
    status: 1,
    harga: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({}); // State untuk error tiap input
  const [successMessage, setSuccessMessage] = useState(""); // State untuk pesan sukses
  const navigate = useNavigate();

  // Skema validasi menggunakan Joi
  const schema = Joi.object({
    product_name: Joi.string().required().messages({
      "string.empty": "Nama Produk wajib diisi",
    }),
    id_popular: Joi.string().required().messages({
      "string.empty": "Rate wajib diisi",
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
    image: Joi.any().required().messages({
      "any.required": "Gambar wajib diunggah",
    }),
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      const file = files[0];

      // Cek apakah ukuran file melebihi 2MB
      if (file.size > 2 * 1024 * 1024) {
        setError("Ukuran file tidak boleh melebihi 2 MB.");
        setImagePreview(null);
        setProductData((prevData) => ({
          ...prevData,
          [name]: null,
        }));
        return;
      }

      // Jika tidak ada error, set preview gambar
      setError("");
      setProductData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
      setImagePreview(URL.createObjectURL(file)); // Set preview URL gambar
    } else {
      setProductData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    // Bersihkan pesan error saat user mengedit input
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
      // Menyimpan semua pesan error untuk masing-masing input
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

      await addProduct(formData);
      setSuccessMessage("Produk berhasil ditambahkan!"); // Set pesan sukses
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/dashboard/admin/master/produk");
      }, 3000); // Redirect setelah 3 detik
    } catch (error) {
      console.error("Error adding product:", error);
      setError("Gagal menambahkan produk. Silakan coba lagi.");
    }
  };

  const handleReset = () => {
    setProductData({
      product_name: "",
      id_popular: "",
      quantity: "",
      keterangan: "",
      createby: "",
      promo: "",
      status: 1,
      harga: "",
      image: null,
    });
    setImagePreview(null);
    setError("");
    setValidationErrors({});
  };

  return (
    <div className="px-2 py-6 mb-40" style={{ fontFamily: "sans-serif" }}>
      <h2 className="text-2xl font-bold text-slate-600 mb-4">
        Add New Product
      </h2>
      {/* Tampilkan alert sukses jika produk berhasil ditambahkan */}
      {successMessage && (
        <Alert
          message={successMessage}
          type="success"
          onClose={() => setSuccessMessage("")}
        />
      )}
      {/* Tampilkan alert error umum */}
      {error && (
        <Alert message={error} type="error" onClose={() => setError("")} />
      )}{" "}
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
          <div className="text-sm font-semibold text-gray-400">Add Product</div>
        </div>
          <Link className="m-2 text-base" to="/dashboard/admin/master/produk">
        <button className="w-24 h-10 rounded-lg border-2 font-semibold text-gray-100 bg-primary">
            Back
        </button>
          </Link>
      </div>
      <div className="main bg-white p-4 rounded-lg mt-2">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Row 1 */}
          <div>
            <label className="text-slate-600">Nama Produk</label>
            <input
              type="text"
              name="product_name"
              className="w-full h-10 border-2 border-gray-200 p-3 rounded-lg outline-none"
              value={productData.product_name}
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
              value={productData.quantity}
              onChange={handleChange}
              required
            />
            {validationErrors.quantity && (
              <p className="text-red-500 text-sm">
                {validationErrors.quantity}
              </p>
            )}
          </div>

          {/* Row 2 */}
          <div>
            <label className="text-slate-600">Harga</label>
            <input
              type="number"
              name="harga"
              className="w-full h-10 border-2 border-gray-200 p-3 rounded-lg outline-none"
              value={productData.harga}
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
              placeholder="10%"
              className="w-full h-10 border-2 border-gray-200 p-3 rounded-lg outline-none"
              value={productData.promo}
              onChange={handleChange}
              required
            />
            {validationErrors.promo && (
              <p className="text-red-500 text-sm">{validationErrors.promo}</p>
            )}
          </div>

          {/* Row 3 */}
          <div className="col-span-2">
            <label className="text-slate-600">Dibuat oleh</label>
            <input
              type="text"
              name="createby"
              className="w-full h-10 border-2 border-gray-200 p-3 rounded-lg outline-none"
              value={productData.createby}
              onChange={handleChange}
              required
            />
            {validationErrors.createby && (
              <p className="text-red-500 text-sm">
                {validationErrors.createby}
              </p>
            )}
          </div>

          {/* Row 4 */}
          <div>
            <label className="text-slate-600">Rate</label>
            <input
              type="text"
              name="id_popular"
              placeholder="1 Populer, 0 Normal"
              className="w-full h-10 border-2 border-gray-200 p-3 rounded-lg outline-none"
              value={productData.id_popular}
              onChange={handleChange}
              required
            />
            {validationErrors.id_popular && (
              <p className="text-red-500 text-sm">
                {validationErrors.id_popular}
              </p>
            )}
          </div>
          <div>
            <label className="text-slate-600">Status</label>
            <input
              type="text"
              name="status"
              className="w-full h-10 border-2 border-gray-200 p-3 rounded-lg outline-none bg-gray-100 cursor-not-allowed"
              value={productData.status}
              onChange={handleChange}
              readOnly
            />
            {validationErrors.status && (
              <p className="text-red-500 text-sm">{validationErrors.status}</p>
            )}
          </div>

          {/* Row 5 */}
          <div>
            <label className="text-slate-600">Keterangan</label>
            <textarea
              name="keterangan"
              className="w-full h-64 border-2 border-gray-200 p-3 rounded-lg outline-none"
              value={productData.keterangan}
              onChange={handleChange}
              required
            />
            {validationErrors.keterangan && (
              <p className="text-red-500 text-sm">
                {validationErrors.keterangan}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-slate-600 text-left">Gambar</label>
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
                  required
                />
              </label>
            </div>
          </div>

          {/* Submit and Reset Buttons */}
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
