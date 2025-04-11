const express = require("express");
const app = express();
const port = 3000;

// 미들웨어 설정
app.use(express.urlencoded({ extended: true }));

// 로그인 폼 페이지 (email, password 입력)
app.get("/login", (req, res) => {
    var f = "hi";
    console.log(`f:[${f}]`)
    res.send(`
        <h2>Login Post Method</h2>
        <form action="/loginPost" method="post">
            <label>Email: <input type="email" name="email" required value="test@example.com"></label><br>
            <label>Password: <input type="password" name="password" required value="1234"></label><br>
            <button type="submit">Login</button>
        </form>
    `);
});

// 로그인 검증 (GET 방식)
app.get("/loginGet", (req, res) => {
    const { email, password } = req.query;
    console.log(`email:[${email}]`)
    console.log(`password:[${password}]`)

    // 임시 계정 정보 (DB 대신 하드코딩된 값 사용)
    const validEmail = "test@example.com";
    const validPassword = "1234";

    if (email === validEmail && password === validPassword) {
        res.send("<h2>Login Success: true</h2>");
    } else {
        res.send("<h2>Login Success: false</h2>");
    }
});

// 로그인 검증 (POST 방식)
app.post("/loginPost", (req, res) => {
    const { email, password } = req.body;

    console.log(`email:[${email}]`)
    console.log(`password:[${password}]`)

    // 임시 계정 정보 (DB 대신 하드코딩된 값 사용)
    const validEmail = "test@example.com";
    const validPassword = "1234";

    if (email === validEmail && password === validPassword) {
        res.send("<h2>Login Success: true</h2>");
    } else {
        res.send("<h2>Login Success: false</h2>");
    }
});

// 서버 실행
app.listen(port, () => {
    console.log(`서버 실행 중: http://localhost:${port}/login`);
});

