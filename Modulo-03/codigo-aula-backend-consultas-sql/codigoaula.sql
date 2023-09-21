SELECT * FROM musicas;

SELECT id, compositor, ritmo FROM musicas;

SELECT DISTINCT compositor from musicas;

SELECT DISTINCT compositor, composicao FROM musicas;

SELECT * FROM musicas WHERE tempo > 200;

SELECT * FROM musicas WHERE tempo > 200 AND tempo < 400

SELECT * FROM musicas WHERE tempo BETWEEN 200 AND 400;

SELECT * FROM musicas WHERE compositor  = 'Schubert' OR compositor = 'Mozart';

SELECT * FROM musicas WHERE compositor IS NULL; 

SELECT * FROM musicas WHERE compositor IS NOT NULL;

SELECT * FROM musicas LIMIT 3;

SELECT * FROM musicas OFFSET 5;

SELECT * FROM musicas LIMIT 3 OFFSET 2;

SELECT * FROM musicas ORDER BY compositor;

SELECT * FROM musicas WHERE compositor = 'Schubert' ORDER BY composicao;

SELECT * FROM musicas WHERE compositor = 'Schubert' ORDER BY composicao DESC LIMIT 5 OFFSET 2;

SELECT * FROM musicas ORDER BY compositor asc, composicao desc;

SELECT * FROM musicas WHERE composicao = 'Violin Sonata No 1 in G minor' 

SELECT * FROM musicas WHERE composicao LIKE '%in G minor';

SELECT * FROM musicas WHERE composicao LIKE 'Violin Sonata%';

SELECT * FROM musicas WHERE composicao LIKE '%Sonata%';