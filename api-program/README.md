# 설치 
npm install 

# mysql-test.js 편집 - 데이터베이스명 수정 
const connection = mysql.createConnection({
  host: 'localhost',      // Database host (usually localhost for local testing)
  user: 'root',           // MySQL username (change this as per your setup)
  password: 'rootroot',   // MySQL password (change this as per your setup)
  database: '한빛무역'      // db1234567C  The database you want to connect to (change as needed)
});

# 실행 
node mysql-test.js 


# Tutorial Table 생성
create table tutorials ( 
    id int primary key auto_increment,
    title varchar(50) null,
    description varchar(1024) null,
    published datetime default now()
);

insert into tutorials(title, description) values ('홍길동 1', '홍길동 1 이야기');
insert into tutorials (title, description) values ('홍길동 2', '홍길동 2 이야기');
insert into tutorials (title, description) values ('홍길동 3', '홍길동 3 이야기');

select * from tutorials;


# 크롬 확장자 | postman 

# curl 명령어 
curl -X GET http://localhost:3000/tutorials

# curl update 
curl -X PUT http://localhost:3000/tutorials/3 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "title 3",
    "description": "desc 3",
    "published": "2025-04-10 00:00:00"
  }'

# curl insert 
curl -X POST http://localhost:3000/tutorials/ \
  -H "Content-Type: application/json" \
  -d '{
    "title": "title 11",
    "description": "desc 11",
    "published": "2025-04-10 00:00:00"
  }'

# curl delete 
curl -X DELETE http://localhost:3000/tutorials/6 





