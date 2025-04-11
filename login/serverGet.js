const express = require("express");
const app = express();
const port = 3000;

// 미들웨어 설정
app.use(express.urlencoded({ extended: true }));

// 로그인 폼 페이지 (email, password 입력)
app.get("/login", (req, res) => {
    res.send(`
        <h2>Login Get Method</h2>
        <form action="/loginGet" method="get">
            <label>Email: <input type="email" name="email" required value="test@example.com"></label><br>
            <label>Password: <input type="password" name="password" required value="1234"></label><br>
            <button type="submit">Login</button>
        </form>
    `);
});

// 로그인 검증 (GET 방식)
app.get("/loginGet", (req, res) => {
    const { email, password } = req.query;

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

