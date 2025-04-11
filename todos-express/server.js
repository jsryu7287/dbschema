require('dotenv').config();
const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// ✅ 1. ToDo 목록 보기
app.get('/', async (req, res) => {
    try {
        const [todos] = await db.query("SELECT * FROM todos ORDER BY created_at DESC");
        res.render('index', { todos });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// ✅ 2. ToDo 추가
app.post('/todos', async (req, res) => {
    const { title } = req.body;
    try {
        await db.query("INSERT INTO todos (title) VALUES (?)", [title]);
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// ✅ 3. ToDo 완료 처리
app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query("UPDATE todos SET completed = TRUE WHERE id = ?", [id]);
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// ✅ 4. ToDo 삭제
app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query("DELETE FROM todos WHERE id = ?", [id]);
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
