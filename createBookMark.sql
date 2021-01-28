-- First, remove the table if it exists
drop table if exists bookmarks;

-- Create the table anew
create table bookmarks (
  id INTEGER primary key generated by default as identity,
  title text,
  url text,
  description text,
  rating INTEGER
);

-- insert some test data
-- Using a multi-row insert statement here
insert into bookmarks (title, url, description, rating)
values
  ('Apple', 'www.apple.com','apple product', 3),
  ('Orange', 'www.orange.com','orange product', 3),
  ('Peach', 'www.peach.com','peach product', 3);