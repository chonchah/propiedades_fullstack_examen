-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.36 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla propiedades.amenities
CREATE TABLE IF NOT EXISTS `amenities` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla propiedades.amenities: ~10 rows (aproximadamente)
DELETE FROM `amenities`;
/*!40000 ALTER TABLE `amenities` DISABLE KEYS */;
INSERT INTO `amenities` (`id`, `created_at`, `updated_at`, `name`) VALUES
	(1, '2022-01-25 06:47:23', '2022-01-25 06:47:23', 'Alberca'),
	(2, '2022-01-25 06:47:23', '2022-01-25 06:47:23', 'Amueblado'),
	(3, '2022-01-25 06:47:23', '2022-01-25 06:47:23', 'Área de lavado'),
	(4, '2022-01-25 06:47:23', '2022-01-25 06:47:23', 'Cisterna'),
	(5, '2022-01-25 06:47:23', '2022-01-25 06:47:23', 'Seguridad privada'),
	(6, '2022-01-25 06:47:23', '2022-01-25 06:47:23', 'Terraza'),
	(7, '2022-01-25 06:47:23', '2022-01-25 06:47:23', 'Cuarto de servicio'),
	(8, '2022-01-25 06:47:23', '2022-01-25 06:47:23', 'Jardín'),
	(9, '2022-01-25 06:47:23', '2022-01-25 06:47:23', 'Estacionamiento'),
	(10, '2022-01-25 06:47:23', '2022-01-25 06:47:23', 'Roof garden');
/*!40000 ALTER TABLE `amenities` ENABLE KEYS */;

-- Volcando estructura para tabla propiedades.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla propiedades.failed_jobs: ~0 rows (aproximadamente)
DELETE FROM `failed_jobs`;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;

-- Volcando estructura para tabla propiedades.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla propiedades.migrations: ~8 rows (aproximadamente)
DELETE FROM `migrations`;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(18, '2014_10_12_000000_create_users_table', 1),
	(19, '2014_10_12_100000_create_password_resets_table', 1),
	(20, '2019_08_19_000000_create_failed_jobs_table', 1),
	(21, '2019_12_14_000001_create_personal_access_tokens_table', 1),
	(22, '2022_01_20_204637_create_properties_table', 1),
	(23, '2022_01_20_231100_create_amenities_table', 1),
	(24, '2022_01_20_231150_create_property_amenities_table', 1),
	(25, '2022_01_20_232024_create_property_images_table', 1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Volcando estructura para tabla propiedades.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla propiedades.password_resets: ~0 rows (aproximadamente)
DELETE FROM `password_resets`;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Volcando estructura para tabla propiedades.personal_access_tokens
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla propiedades.personal_access_tokens: ~0 rows (aproximadamente)
DELETE FROM `personal_access_tokens`;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;

-- Volcando estructura para tabla propiedades.properties
CREATE TABLE IF NOT EXISTS `properties` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `public_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `property_type` enum('HOUSE','APARTAMENT','TERRAIN','OFFICE','LOCAL') COLLATE utf8mb4_unicode_ci NOT NULL,
  `operation` enum('SALE','RENT','TRANSFER') COLLATE utf8mb4_unicode_ci NOT NULL,
  `state` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `neighborhood` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cp` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitude` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `longitude` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `num_bathrooms` int(11) NOT NULL,
  `bedrooms` int(11) NOT NULL,
  `m2_construction` bigint(20) NOT NULL,
  `parking` int(11) NOT NULL,
  `age` int(11) NOT NULL,
  `departments` int(11) NOT NULL,
  `floor` int(11) NOT NULL,
  `user` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `properties_user_foreign` (`user`),
  CONSTRAINT `properties_user_foreign` FOREIGN KEY (`user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla propiedades.properties: ~1 rows (aproximadamente)
DELETE FROM `properties`;
/*!40000 ALTER TABLE `properties` DISABLE KEYS */;
INSERT INTO `properties` (`id`, `created_at`, `updated_at`, `public_key`, `name`, `description`, `price`, `property_type`, `operation`, `state`, `city`, `neighborhood`, `cp`, `street`, `latitude`, `longitude`, `num_bathrooms`, `bedrooms`, `m2_construction`, `parking`, `age`, `departments`, `floor`, `user`) VALUES
	(1, NULL, '2022-01-24 09:32:34', '0001', 'Casa en renta Condesa', 'Se renta bonita casa en condesa', 15000.00, 'APARTAMENT', 'RENT', 'CDMX', 'Cuauhtémoc', 'Condesa', '6140', 'Tamaulipas', '19.4114791', '-99.1762838', 1, 2, 105, 1, 15, 0, 1, 1);
/*!40000 ALTER TABLE `properties` ENABLE KEYS */;

-- Volcando estructura para tabla propiedades.property_amenities
CREATE TABLE IF NOT EXISTS `property_amenities` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `property_id` bigint(20) unsigned NOT NULL,
  `amenity_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `property_amenities_property_id_foreign` (`property_id`),
  KEY `property_amenities_amenity_id_foreign` (`amenity_id`),
  CONSTRAINT `property_amenities_amenity_id_foreign` FOREIGN KEY (`amenity_id`) REFERENCES `amenities` (`id`),
  CONSTRAINT `property_amenities_property_id_foreign` FOREIGN KEY (`property_id`) REFERENCES `properties` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla propiedades.property_amenities: ~0 rows (aproximadamente)
DELETE FROM `property_amenities`;
/*!40000 ALTER TABLE `property_amenities` DISABLE KEYS */;
INSERT INTO `property_amenities` (`id`, `created_at`, `updated_at`, `property_id`, `amenity_id`) VALUES
	(5, NULL, NULL, 1, 1),
	(6, NULL, NULL, 1, 2);
/*!40000 ALTER TABLE `property_amenities` ENABLE KEYS */;

-- Volcando estructura para tabla propiedades.property_images
CREATE TABLE IF NOT EXISTS `property_images` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `path` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int(11) NOT NULL,
  `property` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `property_images_property_foreign` (`property`),
  CONSTRAINT `property_images_property_foreign` FOREIGN KEY (`property`) REFERENCES `properties` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla propiedades.property_images: ~0 rows (aproximadamente)
DELETE FROM `property_images`;
/*!40000 ALTER TABLE `property_images` DISABLE KEYS */;
INSERT INTO `property_images` (`id`, `created_at`, `updated_at`, `path`, `order`, `property`) VALUES
	(1, NULL, NULL, 'https://propiedadescom.s3.amazonaws.com/files/600x400/amsterdam-46-hipodromo-cuauhtemoc-df-cdmx-24201393-foto-01.jpg', 1, 1),
	(2, NULL, NULL, 'https://propiedadescom.s3.amazonaws.com/files/600x400/amsterdam-46-hipodromo-cuauhtemoc-df-cdmx-24201393-foto-17.jpg', 2, 1);
/*!40000 ALTER TABLE `property_images` ENABLE KEYS */;

-- Volcando estructura para tabla propiedades.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla propiedades.users: ~11 rows (aproximadamente)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'Propiedades Perez Lopez', 'propiedades@propiedades.com', '2022-01-25 06:47:23', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'zJGO95JGGt', '2022-01-25 06:47:23', '2022-01-25 06:47:23');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
