create table orders (
    order_no int primary key auto_increment,
    customer_id int,
    order_detai_id int,
    order_date datetime,
    request_date datetime,
    send_date datatime
);
