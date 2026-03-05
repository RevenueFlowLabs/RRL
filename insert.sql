-- failed_payments টেবিলে ডামি ডাটা যোগ করা
INSERT INTO failed_payments (client_id, amount, status, created_at)
VALUES 
('CUST-001', 150.00, 'failed', now()),
('CUST-002', 299.99, 'failed', now() - interval '1 day'),
('CUST-003', 45.00, 'recovered', now() - interval '2 days');