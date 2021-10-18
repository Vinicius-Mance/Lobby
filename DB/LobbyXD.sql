
drop table if exists links;

create table links(
	id int primary key auto_increment,
	nome varchar(255),
    link varchar(255),
    foto varchar(255)
);

insert into links values(1,"Youtube","https://www.youtube.com/feed/library","youtube.svg");
insert into links values(2,"Youtube Music","https://music.youtube.com","youtubemusic.svg");
insert into links values(3,"Email","https://mail.google.com/mail/u/0/#inbox","emailpessoal.jpeg");
insert into links values(4,"Tradutor","https://translate.google.com/?hl=pt-BR","googletradutor.svg");