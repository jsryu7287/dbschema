//require('dotenv').config();
const express = require('express');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(express.json());

// ✅ 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello, Express + MySQL!');
});

// ✅ 모든 사용자 조회
app.get('/users', async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ 새로운 사용자 추가
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)", 
      [name, email]
    );
    res.json({ message: "사용자 추가 성공", userId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
