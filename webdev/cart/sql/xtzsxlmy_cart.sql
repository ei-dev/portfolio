-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 16, 2019 at 12:54 AM
-- Server version: 5.6.41-84.1
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xtzsxlmy_cart`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(10) UNSIGNED NOT NULL,
  `address1` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `postal_code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `address1`, `address2`, `city`, `postal_code`, `created_at`, `updated_at`) VALUES
(1, '200 SW Perry Lane', '', 'Wyoming', '49548', '2019-01-16 07:39:36', '2019-01-16 07:39:36'),
(2, '200 NW Perry Lane', '', 'Wyoming', 'MI', '2019-01-16 07:42:26', '2019-01-16 07:42:26'),
(3, '200 NW Perry Lane', '', 'Wyoming', '49548', '2019-01-16 07:59:42', '2019-01-16 07:59:42');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `created_at`, `updated_at`) VALUES
(1, 'Adrian Ruiz', 'seraphzp@gmail.com', '2019-01-16 07:39:36', '2019-01-16 07:39:36'),
(2, 'Joe Blanco', 'seraphzp@gmail.com', '2019-01-16 07:42:26', '2019-01-16 07:42:26'),
(3, 'Joe Blanco', 'justatester@gmail.com', '2019-01-16 07:59:42', '2019-01-16 07:59:42');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `total` int(11) NOT NULL,
  `address_id` int(11) NOT NULL,
  `paid` tinyint(1) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `hash`, `total`, `address_id`, `paid`, `customer_id`, `created_at`, `updated_at`) VALUES
(1, '06fad04f801550d14988344a77156d36605602505f6d5f189c54ec2b3df96c47', 11, 1, 0, 1, '2019-01-16 07:39:36', '2019-01-16 07:39:36'),
(2, '40f0bba372b30a8125994faee5ef5a0e28f0c68d950b41293bf9438cb83e39aa', 11, 2, 1, 2, '2019-01-16 07:42:26', '2019-01-16 07:42:28'),
(3, '4e10e1eb7564be3a7dc2331379ff14ea62396472e65742b1ff01717dc068772a', 36, 3, 1, 3, '2019-01-16 07:59:42', '2019-01-16 07:59:43'),
(4, '493204f660f1957f3215a29994db4a35354b4143500bea9d0477b785efa4d955', 30, 3, 1, 3, '2019-01-16 08:02:17', '2019-01-16 08:02:18'),
(5, '438bead1ff4378e540b19ecc0dd9a21c79924f4663d4d176b4d957ee228b61d4', 55, 3, 0, 3, '2019-01-16 08:08:11', '2019-01-16 08:08:11');

-- --------------------------------------------------------

--
-- Table structure for table `orders_products`
--

CREATE TABLE `orders_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders_products`
--

INSERT INTO `orders_products` (`id`, `order_id`, `product_id`, `quantity`) VALUES
(1, 1, 1, 1),
(2, 2, 1, 1),
(3, 3, 1, 1),
(4, 3, 2, 1),
(5, 4, 2, 1),
(6, 5, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` int(11) NOT NULL,
  `failed` tinyint(1) NOT NULL,
  `transaction_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `order_id`, `failed`, `transaction_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, '2019-01-16 07:39:37', '2019-01-16 07:39:37'),
(2, 2, 0, 'nd9y9s4e', '2019-01-16 07:42:28', '2019-01-16 07:42:28'),
(3, 3, 0, 'jmnvgd0a', '2019-01-16 07:59:43', '2019-01-16 07:59:43'),
(4, 4, 0, '66wq6jj6', '2019-01-16 08:02:18', '2019-01-16 08:02:18'),
(5, 5, 1, NULL, '2019-01-16 08:08:12', '2019-01-16 08:08:12');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `price` float NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `slug`, `description`, `price`, `image`, `stock`, `created_at`, `updated_at`) VALUES
(1, 'Bolivia La Linda Washed Longberry', 'bolivia-la-linda-washed-longberry', 'Native Bolivians have preserved their language, their costumes and their own way of life. They grow potatoes, wheat, cereal, beans and other vegetables and raise llamas, vicuñas and goats, whose wool is woven in their traditional looms to create unique textiles of typical Andean essence.', 5.5, 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Product%20image&w=800&h=500', 8, NULL, '2019-01-16 07:59:43'),
(2, 'Maneki Neko Charm', 'maneki-neko-charm', '50 Irresistible Made in Japan Products to Buy Now. Jyo Ceramic Plate by Nikko Ceramics. Maneki Neko Charm by Kotobuki. Cotton-Jersey T-Shirt by Blue Blue Japan. Matcha Start-Up Kit by Tealyra.', 25, 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Product%20image&w=800&h=500', 0, NULL, '2019-01-16 08:02:18'),
(3, 'Traditional Brazilian Clothing', 'traditional-brazilian-clothing', 'In general, Brazilians wear clothing that\'s comfortable yet richly colored and sophisticated. However, there are some preferred clothing types depending on region. For example, those living in the southern plains, a ranching area, wear gaucho-type clothing: baggy pants, or bombachas; cowboy hats and cowboy boots.', 50, 'https://placeholdit.imgix.net/~text?txtsize=50&txt=Product%20image&w=800&h=500', 5, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders_products`
--
ALTER TABLE `orders_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders_products`
--
ALTER TABLE `orders_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
