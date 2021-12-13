CREATE TABLE teacher(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	dept VARCHAR(50) NOT NULL,
	salary INTEGER NOT NULL
);

INSERT INTO teacher (name, dept, salary)
VALUES
('Xyz', 'MCA', 20000),
('ABC', 'B.tech', 21000),
('A', 'MCA', 18000),
('P', 'B.tech', 35000),
('Bhavna Tripathy', 'MCA', 25000),
('Sanchit Anand','MCA', 38000),
('Ipsita Sahoo', 'B.tech', 28000);