-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost
-- Üretim Zamanı: 23 Tem 2024, 15:20:37
-- Sunucu sürümü: 10.4.28-MariaDB
-- PHP Sürümü: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `nodejs_login`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `angular_db`
--

CREATE TABLE `angular_db` (
  `id` int(11) NOT NULL,
  `data` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `button_stats`
--

CREATE TABLE `button_stats` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `button_name` varchar(255) NOT NULL,
  `click_count` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(8, 'testuser1', 'testuser@example.com', '$2a$10$qGLCvRabKGBI5Y0LcNvIKuzQJUqaReW/BJWf8xwk7F8xT7VaElaN6'),
(9, 'aa', 'a@a.com', '$2a$10$Wqcqq4/afLAESImgFF..HuHl3gQYewegWoWIngXMpMFV8rIpWHGkW'),
(10, 'avcierhan', 'avcierhan@hotmail.com', '$2a$10$CluFK8G1MPdpIENuDVpyB.aLNu7KUZu5l07xnQYwFljbmWc2Py6tW'),
(11, 'selin', 'selin@hotmail.com', '$2a$10$DArmxOACTuhIdvNtg2hrNe6pYI5ZPo4LYRR.tNChbS0RJQFmQsmLO');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `angular_db`
--
ALTER TABLE `angular_db`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `button_stats`
--
ALTER TABLE `button_stats`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_button` (`user_id`,`button_name`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `angular_db`
--
ALTER TABLE `angular_db`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `button_stats`
--
ALTER TABLE `button_stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
