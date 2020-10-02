insert into posts (title, content)
values ($1, $2)
RETURNING *;
