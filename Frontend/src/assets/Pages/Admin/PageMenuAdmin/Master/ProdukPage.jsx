import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../../Store/productSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import DialogDelete from "../../Component/DialogDelete"; // Import DialogDelete

export default function ProdukPage() {
  const dispatch = useDispatch();
  const {
    items: allProducts,
    status,
    error,
  } = useSelector((state) => state.product.allProducts);

  const [sortedProducts, setSortedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // State for DialogDelete
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    let filteredProducts = allProducts;

    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortColumn) {
      filteredProducts.sort((a, b) => {
        if (sortDirection === "asc") {
          return a[sortColumn] > b[sortColumn] ? 1 : -1;
        } else {
          return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
      });
    }

    setSortedProducts(filteredProducts);
  }, [allProducts, searchTerm, sortColumn, sortDirection]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDeleteClick = (id_product) => {
    setSelectedProductId(id_product);
    setIsDialogOpen(true);
  };

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/api/data/produk/${selectedProductId}`
      );
      setTimeout(() => {
        setIsDialogOpen(false);
      }, 1500);
      dispatch(fetchAllProducts());
    } catch (error) {
      console.error("Error deleting product:", error);
      setTimeout(() => {
        setIsDialogOpen(false);
      }, 3000);
    }
  };

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="px-2 py-6 mb-24 m-2" style={{ fontFamily: "sans-serif" }}>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>

      {/* Delete Confirmation Dialog */}
      <DialogDelete
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleDeleteConfirm}
      />

      <div className="head flex justify-between items-center mb-4">
        <div className="flex items-center">
          <label htmlFor="itemsPerPage" className="mr-2">
            Items per page:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-2 py-1 border text-slate-500 border-slate-300 rounded-lg"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 border rounded-lg border-slate-300 w-1/4 mx-4 outline-none"
        />

        <Link to="/dashboard/admin/master/produk/add">
          <button className="px-4 py-2 font-semibold bg-primary text-white rounded hover:bg-primary">
            Add Product
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table
          className="bg-white border w-full"
          style={{ fontFamily: "sans-serif" }}
        >
          <thead className="bg-slate-300">
            {" "}
            {/* Tambahkan kelas bg-slate-300 di sini */}
            <tr>
              <th className="py-2 px-4 border text-left">No</th>
              <th className="py-2 px-4 border text-left">ID</th>
              <th className="py-2 px-4 border text-left">Kategori</th>
              <th className="py-2 px-4 border text-left w-72">Product Name</th>
              <th className="py-2 px-4 border text-left">Harga</th>
              <th className="py-2 px-4 border text-left">Jumlah</th>
              <th className="py-2 px-4 border text-left w-96">Keterangan</th>
              <th className="py-2 px-4 border text-left">Promo</th>
              <th className="py-2 px-4 border text-left">Status</th>
              <th className="py-2 px-4 border text-left">Created By</th>
              <th className="py-2 px-4 border text-left">Created On</th>
              <th className="py-2 px-4 border text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((product, index) => (
                <tr
                  key={product.id_product}
                  className={index % 2 === 0 ? "bg-slate-100" : "bg-gray-200"} // Menambahkan warna bergantian
                >
                  <td className="py-2 px-4">{indexOfFirstItem + index + 1}</td>
                  <td className="py-2 px-4">{product.id_product}</td>
                  <td className="py-2 px-4">{product.id_kategori}</td>
                  <td className="py-2 px-4">{product.product_name}</td>
                  <td className="py-2 px-4">
                    {product.harga ? (
                      formatRupiah(product.harga)
                    ) : (
                      <p className="text-red-500 text-sm">
                        Harga tidak tersedia
                      </p>
                    )}
                  </td>{" "}
                  <td className="py-2 px-4">
                    {product.quantity || (
                      <p className="text-red-500 text-sm">
                        Jumlah tidak tersedia
                      </p>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {product.keterangan || (
                      <p className="text-red-500 text-sm">
                        Ket. tidak tersedia
                      </p>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {product.promo || (
                      <p className="text-red-500 text-sm">
                        Promo tidak tersedia
                      </p>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {product.status === 1 ? "Active" : "Inactive"}
                  </td>
                  <td className="py-2 px-4">{product.createby}</td>
                  <td className="py-2 px-4">
                    {new Date(product.createon).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 flex justify-center items-center">
                    <Link
                      to={`/dashboard/admin/master/produk/edit/${product.id_product}`}
                      state={product}
                      className="mr-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-gray-500"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                      </svg>
                    </Link>
                    <button
                      onClick={() => handleDeleteClick(product.id_product)}
                      className="cursor-pointer"
                    >
                      <svg
                        className="w-5 h-5 text-red-300 hover:text-red-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="text-center py-4">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span>
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, sortedProducts.length)} of{" "}
          {sortedProducts.length} entries
        </span>
        <div>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mr-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-primary hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
