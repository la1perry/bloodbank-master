

let createDonors='create table donors (id varchar(11)not null, name varchar(50),sex varchar(1),age int(2), address varchar(50), phone_num varchar(20), PRIMARY KEY (id))';
let createBank='create table bloodbanks (id varchar(11) not null, name varchar(50), type varchar(4), units int(11), PRIMARY KEY (id))';
let createBloodDonations='create table donations(id varchar(11), , code varchar(50),bloodbank varchar(11),  donor_id int(11), type varchar(4), cost int(11), amount int(11), PRIMARY KEY (id))';
let createHospital='create table hospitals(name varchar(50), address varchar (50), phone_num varchar(20) PRIMARY KEY(name))';
let createOrders='create table orders(id varchar(11), hospital varchar(50), bno int(11), blood_type varchar(3), amount int(11), date DATE, PRIMARY KEY(id))';
let createIssues='create table issues(id varchar(11), bloodbank varchar(50),  order_id varchar(11), hospital varchar(50), type varchar(3), amount int(11), cost varchar(50),date DATE, PRIMARY KEY (id))';
let createEmployees='create table employees(id varchar(11), bno int(11), name varchar(50), phone_num varchar(20), address varchar(50), email varchar(50), position varchar(50), PRIMARY KEY (id)';

let donors="insert into donors values(('d-1', 'john smith','m', 33, '102 Greens Way', '660-404-9440'),('d-2', 'jane king','f', 41, '12-322 Richard st.', '460-412-5560'),('d-3', 'Arthur Knight','m', 29, '14 Moon Cres.', '430-564-4442')";
let blooodbanks="insert into bloodbanks values(('bno-1', 'Avery Centre','AB-', 55),('bno-1','Avery Center', 'A+', 90),('bno-1', 'Avery Centre','B-', 40),('bno-2','Patterson Centre', 'O', 23),('bno-2','Patterson Centre', 'B+', 31),('bno-2','Patterson Centre','A-', 16))"
let donations="insert into donations values(('b-1',2004,'bno-1','d-1', 'A','$15.00', '1 unit'),('b-2',3003,'bno-1','d-2', 'B-','$10.00', '1 unit'),";
let hospitals="insert into hospitals values(('St.Mary','447 Aberdine Rd', '849-443-4335'),('St. Augustine,'447 Cordova St.', '449-673-2735'))";
let employees="insert into employees values (('e-2', 'bno-1','Jason lee','445 Nice st',  null,'434-678-1567', 'receptionist'),('e-2', 'bno-1','Jennifer Carderro','356 Abbott st',  null,'333-333-3333', 'manager')";
let issues="insert into issues values (('i-1','bno-2','o-1' 'St. Mary','A','20 units','$300.00','12-08-17'),('i-2','bno-1','o-2' 'St. Augustine','B-','15 units','$240.00','12-09-17')";
let orders="insert into order values (('o-1','bno-1','St Mary','B+', '25 units','12-10-17'),('o-2','bno-1','St Mary','A', '20 units','12-10-17'))";
