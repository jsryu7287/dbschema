# Todo Project 

# 스키마 생성 
use db123456;

CREATE TABLE IF NOT EXISTS todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

id → 자동 증가 (PRIMARY KEY)
title → 할 일 제목 (VARCHAR(255))
completed → 완료 여부 (BOOLEAN, 기본값 FALSE)
created_at → 생성 시간 (TIMESTAMP, 기본값 현재 시간)

# 설치 
npm install 

# 서버 실행 
node server.js 

# 크롭 
http://localhost:3000/


# 참고  
Express + MySQL + EJS를 사용해 ToDo 리스트 (CRUD) 기능을 구현
npm init -y
npm install express mysql2 dotenv ejs body-parser method-override
