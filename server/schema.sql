drop table if exists events;
create table events (
  id integer primary key autoincrement,
  [timestamp] timestamp not null,
  type text not null,
  value text not null,
  score real,
  image blob
);
