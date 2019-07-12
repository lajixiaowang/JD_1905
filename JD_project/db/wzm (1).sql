-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-07-12 01:18:16
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wzm`
--

-- --------------------------------------------------------

--
-- 表的结构 `usertable`
--

CREATE TABLE `usertable` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `email` varchar(50) NOT NULL,
  `data` time NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `usertable`
--

INSERT INTO `usertable` (`id`, `username`, `password`, `email`, `data`) VALUES
(48, '傅经理123', '273a0c7bd3c679ba9a6f5d99078e36e85d02b952', '2073893883@qq.com', '11:16:35'),
(5, '乡村爱情', '17ba0791499db908433b80f37c5fbc89b870084b', '123@qq.com', '17:00:02'),
(8, '王先生', '77de68daecd823babbb58edb1c8e14d7106e83bb', '订单', '19:37:30'),
(13, '尼古拉斯', '17e28cf945fc4411408033296688a944e3f5be33', '2073893883@qq.com', '22:47:36'),
(62, '傅经理', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2073893883@qq.com', '17:59:08'),
(61, '王先生呀', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2073893883@qq.com', '17:56:13'),
(60, '王先生', '70c881d4a26984ddce795f6f71817c9cf4480e79', '2073893883@qq.com', '17:48:50'),
(58, '王先生阿', '2ea6201a068c5fa0eea5d81a3863321a87f8d533', '2073893883@qq.com', '11:39:37'),
(59, '王先生阿', '2ea6201a068c5fa0eea5d81a3863321a87f8d533', '2073893883@qq.com', '11:41:37'),
(45, '王先生噢噢噢噢', '09a9ed2c9b4c439667f00e5b07f7283971654f6c', '2073893883@qq.com', '11:14:49'),
(46, '王先生噢噢噢噢', '09a9ed2c9b4c439667f00e5b07f7283971654f6c', '2073893883@qq.com', '11:15:51'),
(67, 'qq', '3d4f2bf07dc1be38b20cd6e46949a1071f9d0e3d', '2073893883@qq.com', '15:31:32'),
(50, '傅经理法国和', 'bb1bd0767377a601255ceee4e2dd18b15abcd3cc', '2073893883@qq.com', '11:33:32'),
(63, '傅经理去', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2073893883@qq.com', '18:01:20'),
(64, '王先生789', 'c84c766f873ecedf75aa6cf35f1e305e095fec83', '2073893883@qq.com', '11:45:54'),
(65, '李四', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2073893883@qq.com', '11:46:35'),
(66, '王先生', 'f169ea3419a15b7e2b2aaed9c1b4c7d60ff6f5c0', 'das', '15:20:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `usertable`
--
ALTER TABLE `usertable`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
