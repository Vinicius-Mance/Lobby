-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25-Out-2021 às 22:37
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `lobbyxd`
--
CREATE DATABASE IF NOT EXISTS `lobbyxd` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `lobbyxd`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `links`
--

DROP TABLE IF EXISTS `links`;
CREATE TABLE `links` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT 'Link não encontrado',
  `link` varchar(255) DEFAULT '#',
  `foto` varchar(255) DEFAULT './img/icons/placeholder.png',
  `redondo` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `links`
--

INSERT INTO `links` (`id`, `nome`, `link`, `foto`, `redondo`) VALUES
(1, 'Youtube', 'https://www.youtube.com/feed/library', 'Youtube.svg', 0),
(2, 'Youtube Music', 'https://music.youtube.com', 'Youtube Music.svg', 0),
(3, 'Email', 'https://mail.google.com/mail/u/0/#inbox', 'Email.jpeg', 1),
(4, 'Google Tradutor', 'https://translate.google.com', 'Google Tradutor.svg', 0),
(5, 'The Useless Web', 'https://theuselessweb.com', 'The Useless Web.svg', 0),
(6, 'Outlook FIAP', 'https://outlook.office365.com', 'Outlook FIAP.svg', 0),
(7, 'Portal Do Aluno', 'https://www2.fiap.com.br', 'Portal Do Aluno.svg', 0),
(8, 'Strobe Illusion', 'https://strobe.cool', 'Strobe Illusion.png', 0),
(9, 'Nightwave Plaza', 'https://plaza.one', 'Nightwave Plaza.png', 1),
(10, 'Microsoft Azure', 'https://portal.azure.com/home', 'Microsoft Azure.svg', 0),
(11, 'Rtings', 'https://www.rtings.com/headphones/graph#814/7903/1584', 'Rtings.png', 0),
(12, 'Image Color Picker', 'https://imagecolorpicker.com', 'Image Color Picker.png', 0),
(13, 'Spotify', 'https://open.spotify.com', 'Spotify.svg', 0),
(14, 'SoundCloud', 'https://soundcloud.com/', 'SoundCloud.svg', 0),
(15, 'Spring Initializer', 'https://start.spring.io', 'Spring Initializer.png', 0),
(16, 'Calculadora (Ref)', 'https://www.matematica.pt/util/calculadora-equacao-2-grau.php', 'Calculadora (Ref).svg', 0),
(17, 'HTML Color Picker', 'https://www.w3schools.com/colors/colors_picker.asp', 'HTML Color Picker.png', 0),
(18, 'Meu Github', 'https://github.com/Vinicius-Mance', 'Meu Github.svg', 0),
(19, 'Localhost - React Native', 'http://localhost:19002', 'Localhost - React Native.png', 0),
(20, 'phpMyAdmin', 'http://localhost/phpmyadmin/', 'phpMyAdmin.png', 0),
(21, 'PNG Crop Tools', 'https://onlinepngtools.com/crop-png', 'PNG Crop Tools.png', 0),
(22, 'JSONTOJAVA', 'https://json2csharp.com', 'JSONTOJAVA.svg', 0),
(23, 'Netflix', 'https://www.netflix.com/browse', 'Netflix.svg', 0);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `links`
--
ALTER TABLE `links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
