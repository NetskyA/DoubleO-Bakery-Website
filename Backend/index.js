require('dotenv').config();

const {timeStamp} = require("console");
const {QueryTypes} = require('sequelize')
const express = require("express");
const {Sequelize} = require("sequelize");
const multer = require('multer'); 
const path = require('path');
const fs = require('fs'); 
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(cors({
    origin: 'http://localhost:5173'
  }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Konfigurasi penyimpanan file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir); 
        }
        cb(null, uploadDir); 
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + path.extname(file.originalname); // Generate unique file name
        cb(null, uniqueName);
    }
});
const upload = multer({ storage: storage });

//connect DB
const port = 3000;
const {text} = require("express");
const db = new Sequelize("netskya", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: true
});
//<end connect> Test connect
const initApp = async () => {
    console.log("Testing database connection");
    try {
        await db.authenticate(); // Test database connection
        console.log("Successfully connected!");
        app.listen(port, () => console.log(`App listening on port ${port}!`));
    } catch (error) {
        console.error("Failure database connection: ", error.original);
    }
};
initApp();
//end test connect

// Middleware untuk memvalidasi token JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token." });
        }
        req.user = user; // Attach user info to request
        next();
    });
}


app.post('/test', (req, res) => {
    console.log('Received body:', req.body);
    res.json({receivedBody: req.body});
});

app.get("/api/data/all/produk", async (req, res) => {
    try {
        let [results] = await db.query(
            "CALL PROC_GET_ACTIVE_PRODUCTS()",
            {type: QueryTypes.SELECT}
        );
        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching data: ", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// API untuk mendapatkan semua produk roti
app.get("/api/data/roti", async (req, res) => {
    try {
        let [results] = await db.query(
            "CALL PROC_GET_ALL_ROTI()",
            {type: QueryTypes.SELECT}
        );

        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching data: ", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});
app.get("/api/data/roti/populer", async (req, res) => {
    try {
      let [results] = await db.query(
        "CALL PROC_GET_ALL_ROTI_POPULAR()",
        { type: QueryTypes.SELECT }
      );
  
      res.status(200).json(results);  // Kirim hanya data produk
    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// API untuk mendapatkan semua produk pastry
app.get("/api/data/pastry", async (req, res) => {
    try {
        let [results] = await db.query(
            "CALL PROC_GET_ALL_PASTRY()",
            {type: QueryTypes.SELECT}
        );

        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching data: ", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});
app.get("/api/data/pastry/populer", async (req, res) => {
    try {
      let [results] = await db.query(
        "CALL PROC_GET_ALL_PASTRY_POPULAR()",
        { type: QueryTypes.SELECT }
      );
  
      res.status(200).json(results);  // Kirim hanya data produk
    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// API untuk mendapatkan semua produk donat
app.get("/api/data/donat", async (req, res) => {
    try {
      let [results] = await db.query(
        "CALL PROC_GET_ALL_DONAT()",
        { type: QueryTypes.SELECT }
      );
  
      res.status(200).json(results);  // Kirim hanya data produk
    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});
app.get("/api/data/donat/populer", async (req, res) => {
    try {
      let [results] = await db.query(
        "CALL PROC_GET_ALL_DONUTS_POPULAR()",
        { type: QueryTypes.SELECT }
      );
  
      res.status(200).json(results);  // Kirim hanya data produk
    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});
  
// API untuk mendapatkan semua produk cookies
app.get("/api/data/cookies", async (req, res) => {
    try {
        let [results] = await db.query(
            "CALL PROC_GET_ALL_COOKIES()",
            {type: QueryTypes.SELECT}
        );

        res.status(200).json(results);  // Kirim hanya data produk
    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});
app.get("/api/data/cookies/populer", async (req, res) => {
    try {
      let [results] = await db.query(
        "CALL PROC_GET_ALL_COOKIES_POPULAR()",
        { type: QueryTypes.SELECT }
      );
  
      res.status(200).json(results);  // Kirim hanya data produk
    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// API untuk mendapatkan semua produk cake
app.get("/api/data/cake", async (req, res) => {
    try {
        let [results] = await db.query(
            "CALL PROC_GET_ALL_CAKE()",
            {type: QueryTypes.SELECT}
        );

        res.status(200).json(results);  // Kirim hanya data produk
    } catch (error) {
        console.error("Error fetching data: ", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});
app.get("/api/data/cake/populer", async (req, res) => {
    try {
      let [results] = await db.query(
        "CALL PROC_GET_ALL_CAKE_POPULAR()",
        { type: QueryTypes.SELECT }
      );
  
      res.status(200).json(results);  // Kirim hanya data produk
    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// API untuk insert produk
app.post("/api/data/produk", upload.single('image'), async (req, res) => {
    try {
        const {
            product_name,
            id_popular,  // Add id_popular to the request body parameters
            quantity,
            keterangan,
            createby,
            promo,
            status,
            harga
        } = req.body;

        // Ensure all required fields are present, including id_popular
        if (!product_name || !id_popular || !req.file || !quantity || !keterangan || !createby || !promo || !status || !harga) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Generate URL for the uploaded image
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

        // Insert data into the database, including id_popular
        const sql = 'CALL PROC_INSERT_PRODUK(:p_id_popular, :p_product_name, :p_image, :p_quantity, :p_keterangan, :p_createby, :p_promo, :p_status, :p_harga)';

        let results = await db.query(sql, {
            replacements: {
                p_id_popular: id_popular,  // Pass id_popular to the procedure
                p_product_name: product_name,
                p_image: imageUrl,
                p_quantity: quantity,
                p_keterangan: keterangan,
                p_createby: createby,
                p_promo: promo,
                p_status: status,
                p_harga: harga
            },
            type: QueryTypes.RAW
        });

        // Successfully inserted
        return res.status(200).json({ message: 'Product inserted successfully', data: results });
    } catch (error) {
        console.error('Error inserting product: ', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.use('/uploads', express.static('uploads'));

// API untuk mendapatkan produk berdasarkan id_product
app.get("/api/data/produk/:id_product", async (req, res) => {
    try {
        const { id_product } = req.params;

        const sql = 'CALL PROC_GET_PRODUK(:p_id_product)';
        const [results] = await db.query(sql, {
            replacements: { p_id_product: id_product },
            type: QueryTypes.RAW
        });

        console.log("Database results:", results); // Tambahkan log ini
        
        if (!results || results.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.status(200).json(results[0]);
    } catch (error) {
        console.error('Error fetching product:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});




// API untuk update produk
app.put("/api/data/produk/:id_product", upload.single('image'), async (req, res) => {
    try {
        const { id_product } = req.params;
        const {
            product_name,
            quantity,
            keterangan,
            createby,
            promo,
            status,
            harga,
        } = req.body;

        // Cek jika ada file baru untuk gambar
        let imageUrl = req.body.image; // Gunakan URL gambar lama
        if (req.file) {
            imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`; // Ganti dengan URL baru jika ada upload file baru
        }

        const sql = `CALL PROC_UPDATE_PRODUK(:p_id_product, :p_product_name, :p_image, :p_quantity, :p_keterangan, :p_createby, :p_promo, :p_status, :p_harga)`;

        // Jalankan query dengan data
        let results = await db.query(sql, {
            replacements: {
                p_id_product: id_product,
                p_product_name: product_name,
                p_image: imageUrl,
                p_quantity: quantity,
                p_keterangan: keterangan,
                p_createby: createby,
                p_promo: promo,
                p_status: status,
                p_harga: harga,
            },
            type: QueryTypes.RAW,
        });

        return res.status(200).json({
            message: 'Product updated successfully',
            data: results,
        });
    } catch (error) {
        console.error('Error updating product:', error);
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
        });
    }
});


// API untuk delete produk
app.delete("/api/data/produk/:id_product", async (req, res) => {
    try {
        const { id_product } = req.params;

        if (!id_product) {
            return res.status(400).json({ message: 'Product ID is required' });
        }

        const sql = `CALL PROC_SOFT_DELETE_PRODUK(:p_id_product)`;

        let results = await db.query(sql, {
            replacements: { p_id_product: id_product },
            type: QueryTypes.RAW,
        });

        return res.status(200).json({
            message: 'Product deleted successfully',
            data: results,
        });
    } catch (error) {
        console.error('Error during soft delete: ', error);
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
        });
    }
});


//admin login
app.post("/login/user/nsateam/admin", async (req, res) => {
    try {
        const { username, password  } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        // Call stored procedure to validate login
        const [result] = await db.query(
            "CALL PROC_LOGIN_ADMIN(:input_username, :input_password)", {
                replacements: { input_username: username, input_password: password },
                type: QueryTypes.SELECT
            }
        );

        const message = result[0].message;

        if (message === "Login berhasil") {
            const payload = { username };
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRATION
            });

            return res.status(200).json({ message, token, username });
        } else {
            return res.status(401).json({ message });
        }
    } catch (error) {
        console.error("Error during login: ", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

