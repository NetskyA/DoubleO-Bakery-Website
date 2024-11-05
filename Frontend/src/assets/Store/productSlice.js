// src/slices/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getDonutProducts, getDonutPopularProducts, getAllProducts ,
  getRotiProducts, getRotiPopularProducts,
  getPastryProducts, getPastryPopularProducts,
  getCookiesProducts, getCookiesPopularProducts,
  getCakeProducts, getCakePopularProducts,
} from '../Services/productService';

export const fetchAllProducts = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const data = await getAllProducts();
    console.log('Data fetched from API for all products:', data);
    return data;
  }
);

// Donut Products
export const fetchDonutProducts = createAsyncThunk(
  'product/fetchDonutProducts',
  async () => {
    const data = await getDonutProducts();
    console.log('Data fetched from API:', data); // Logging tambahan
    return data;
  }
);

export const fetchDonutPopularProducts = createAsyncThunk(
  'product/fetchDonutPopularProducts',
  async () => {
    const data = await getDonutPopularProducts();
    return data;
  }
);

// Roti Products
export const fetchRotiProducts = createAsyncThunk(
  'product/fetchRotiProducts',
  async () => {
    const data = await getRotiProducts();
    return data;
  }
);

export const fetchRotiPopularProducts = createAsyncThunk(
  'product/fetchRotiPopularProducts',
  async () => {
    const data = await getRotiPopularProducts();
    return data;
  }
);

// Pastry Products
export const fetchPastryProducts = createAsyncThunk(
  'product/fetchPastryProducts',
  async () => {
    const data = await getPastryProducts();
    return data;
  }
);

export const fetchPastryPopularProducts = createAsyncThunk(
  'product/fetchPastryPopularProducts',
  async () => {
    const data = await getPastryPopularProducts();
    return data;
  }
);

// Cookies Products
export const fetchCookiesProducts = createAsyncThunk(
  'product/fetchCookiesProducts',
  async () => {
    const data = await getCookiesProducts();
    return data;
  }
);

export const fetchCookiesPopularProducts = createAsyncThunk(
  'product/fetchCookiesPopularProducts',
  async () => {
    const data = await getCookiesPopularProducts();
    return data;
  }
);

// Cake Products
export const fetchCakeProducts = createAsyncThunk(
  'product/fetchCakeProducts',
  async () => {
    const data = await getCakeProducts();
    return data;
  }
);

export const fetchCakePopularProducts = createAsyncThunk(
  'product/fetchCakePopularProducts',
  async () => {
    const data = await getCakePopularProducts();
    return data;
  }
);

const initialState = {
  allProducts: {
    items: [],          // Pastikan nilai awal sebagai array kosong
    status: 'idle',
    error: null,
  },
  donuts: {
    items: [],
    popularItems: [],
    status: 'idle',
    popularStatus: 'idle',
    error: null,
    popularError: null,
  },
  roti: {
    items: [],
    popularItems: [],
    status: 'idle',
    popularStatus: 'idle',
    error: null,
    popularError: null,
  },
  pastry: {
    items: [],
    popularItems: [],
    status: 'idle',
    popularStatus: 'idle',
    error: null,
    popularError: null,
  },
  cookies: {
    items: [],
    popularItems: [],
    status: 'idle',
    popularStatus: 'idle',
    error: null,
    popularError: null,
  },
  cake: {
    items: [],
    popularItems: [],
    status: 'idle',
    popularStatus: 'idle',
    error: null,
    popularError: null,
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllProducts.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      // Konversi objek ke array jika diperlukan
      state.allProducts.items = Object.values(action.payload) || [];
    })
    
    .addCase(fetchAllProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })

      // Donut Products
      .addCase(fetchDonutProducts.pending, (state) => {
        state.donuts.status = 'loading';
      })
      .addCase(fetchDonutProducts.fulfilled, (state, action) => {
        state.donuts.status = 'succeeded';
        state.donuts.items = action.payload || [];
      })
    
      .addCase(fetchDonutProducts.rejected, (state, action) => {
        state.donuts.status = 'failed';
        state.donuts.error = action.error.message;
      })
      // Donut Popular Products
      .addCase(fetchDonutPopularProducts.pending, (state) => {
        state.donuts.popularStatus = 'loading';
      })
      .addCase(fetchDonutPopularProducts.fulfilled, (state, action) => {
        state.donuts.popularStatus = 'succeeded';
        console.log('Action Payload (Popular Donuts):', action.payload);
        state.donuts.popularItems = action.payload || [];
      })
      .addCase(fetchDonutPopularProducts.rejected, (state, action) => {
        state.donuts.popularStatus = 'failed';
        state.donuts.popularError = action.error.message;
      })

      // Roti Products
      .addCase(fetchRotiProducts.pending, (state) => {
        state.roti.status = 'loading';
      })
      .addCase(fetchRotiProducts.fulfilled, (state, action) => {
        state.roti.status = 'succeeded';
        state.roti.items = action.payload;
      })
      .addCase(fetchRotiProducts.rejected, (state, action) => {
        state.roti.status = 'failed';
        state.roti.error = action.error.message;
      })
      // Roti Popular Products
      .addCase(fetchRotiPopularProducts.pending, (state) => {
        state.roti.popularStatus = 'loading';
      })
      .addCase(fetchRotiPopularProducts.fulfilled, (state, action) => {
        state.roti.popularStatus = 'succeeded';
        console.log('Action Payload (Popular Roti):', action.payload);
        state.roti.popularItems = action.payload || [];
      })
      .addCase(fetchRotiPopularProducts.rejected, (state, action) => {
        state.roti.popularStatus = 'failed';
        state.roti.popularError = action.error.message;
      })

      // Pastry Products
      .addCase(fetchPastryProducts.pending, (state) => {
        state.pastry.status = 'loading';
      })
      .addCase(fetchPastryProducts.fulfilled, (state, action) => {
        state.pastry.status = 'succeeded';
        console.log("Fetched products:", action.payload); // Cek data yang sebenarnya diterima
        state.pastry.items = action.payload || [];
    })
    
      .addCase(fetchPastryProducts.rejected, (state, action) => {
        state.pastry.status = 'failed';
        state.pastry.error = action.error.message;
      })
      // Pastry Popular Products
      .addCase(fetchPastryPopularProducts.pending, (state) => {
        state.pastry.popularStatus = 'loading';
      })
      .addCase(fetchPastryPopularProducts.fulfilled, (state, action) => {
        state.pastry.popularStatus = 'succeeded';
        console.log('Action Payload (Popular Pastry):', action.payload);
        state.pastry.popularItems = action.payload || [];
      })
      .addCase(fetchPastryPopularProducts.rejected, (state, action) => {
        state.pastry.popularStatus = 'failed';
        state.pastry.popularError = action.error.message;
      })

      // Cookies Products
      .addCase(fetchCookiesProducts.pending, (state) => {
        state.cookies.status = 'loading';
      })
      .addCase(fetchCookiesProducts.fulfilled, (state, action) => {
        state.cookies.status = 'succeeded';
        state.cookies.items = action.payload;
      })
      .addCase(fetchCookiesProducts.rejected, (state, action) => {
        state.cookies.status = 'failed';
        state.cookies.error = action.error.message;
      })
      // Cookies Popular Products
      .addCase(fetchCookiesPopularProducts.pending, (state) => {
        state.cookies.popularStatus = 'loading';
      })
      .addCase(fetchCookiesPopularProducts.fulfilled, (state, action) => {
        state.cookies.popularStatus = 'succeeded';
        console.log('Action Payload (Popular Cookies):', action.payload);
        state.cookies.popularItems = action.payload || [];
      })
      .addCase(fetchCookiesPopularProducts.rejected, (state, action) => {
        state.cookies.popularStatus = 'failed';
        state.cookies.popularError = action.error.message;
      })

      // Cake Products
      .addCase(fetchCakeProducts.pending, (state) => {
        state.cake.status = 'loading';
      })
      .addCase(fetchCakeProducts.fulfilled, (state, action) => {
        state.cake.status = 'succeeded';
        state.cake.items = action.payload;
      })
      .addCase(fetchCakeProducts.rejected, (state, action) => {
        state.cake.status = 'failed';
        state.cake.error = action.error.message;
      })
      // Cake Popular Products
      .addCase(fetchCakePopularProducts.pending, (state) => {
        state.cake.popularStatus = 'loading';
      })
      .addCase(fetchCakePopularProducts.fulfilled, (state, action) => {
        state.cake.popularStatus = 'succeeded';
        console.log('Action Payload (Popular Cake):', action.payload);
        state.cake.popularItems = action.payload || [];
      })
      .addCase(fetchCakePopularProducts.rejected, (state, action) => {
        state.cake.popularStatus = 'failed';
        state.cake.popularError = action.error.message;
      });
  },
});

export default productSlice.reducer;
