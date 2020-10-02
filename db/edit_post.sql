update posts 
set title = $2,
content = $3
where id = $1
RETURNING *;