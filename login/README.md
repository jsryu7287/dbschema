# 설치 
npm init -y       # package.json 생성
npm install express body-parser mysql2

# 소스 
# serverGet.js
>  node serverGet.js 
>>    http://localhost:3000/login

# serverPost.js
> node serverPost.js 
>>    http://localhost:3000/login


# mysql db users 테이블 생성 
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(90) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `nickname` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `idx_created_at` (`created_at`),
  KEY `idx_users_isam_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

select * from users; 
insert into users (email, `name`, nickname) values ('jsryu@gmail.com', 'jsryu1', 'jsryu1');
insert into users (email, `name`, nickname) values ('jsryu2@gmail.com', 'jsryu2', 'jsryu2');

# db.js (db명 수정) & serverDB.js
> node serverDB.js 


# curl 또는 postman 설치 
# path 추가 - C:\Tools\curl-8.12.1_4\bin 

curl -X GET http://localhost:3000/users
[{"user_id":1,"email":"user1","name":"user1","nickname":"user1","created_at":"2025-03-12T07:27:45.000Z","updated_at":null},{"user_id":2,"email":"user2","name":"user2","nickname":"user2","created_at":"2025-03-12T07:29:44.000Z","updated_at":null}]


curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"name\":\"홍길동\",\"email\":\"hong@example.com\"}"
{"message":"사용자 추가 성공","userId":3}


curl -X GET http://localhost:3000/users
[{"user_id":1,"email":"user1","name":"user1","nickname":"user1","created_at":"2025-03-12T07:27:45.000Z","updated_at":null},{"user_id":2,"email":"user2","name":"user2","nickname":"user2","created_at":"2025-03-12T07:29:44.000Z","updated_at":null},{"user_id":3,"email":"hong@example.com","name":"홍길동","nickname":null,"created_at":"2025-04-01T06:02:35.000Z","updated_at":null}]


# Todo Project 
# use db1234567 
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

✅ 모든 ToDo 조회
curl -X GET http://localhost:3000/todos
✅ 새로운 ToDo 추가
curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d "{\"title\":\"운동하기\"}"

✅ 특정 ToDo 완료 처리
curl -X PUT http://localhost:3000/todos/1

✅ 특정 ToDo 삭제
curl -X DELETE http://localhost:3000/todos/1
