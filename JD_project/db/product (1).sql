-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-07-12 01:11:37
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `product`
--

-- --------------------------------------------------------

--
-- 表的结构 `jd`
--

CREATE TABLE `jd` (
  `id` int(20) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `num` int(6) NOT NULL COMMENT '库存数量',
  `pic` varchar(255) NOT NULL COMMENT '商品图片',
  `details` varchar(255) NOT NULL COMMENT '商品细节描述',
  `details1` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `jd`
--

INSERT INTO `jd` (`id`, `title`, `price`, `num`, `pic`, `details`, `details1`) VALUES
(1, '苹果X8高清双摄5000mA', 2699, 33, '[{"src":"./img/pingguoxiao.jpg"},{"src":"./img/pingguoxiao.jpg"},{"src":"./img/pingguoda.jpg"}]', '限时优惠600元  ', '荣耀V20 麒麟980 魅眼全视屏 4800万AI超清摄影 全网通6GB+128GB 标配版 幻夜黑'),
(2, 'HUAWEI Mate 20', 3499, 33, '[{"src":"./img/pingbanxiao.jpg"},{"src":"./img/pingbanxiao.jpg"},{"src":"./img/pingbanda.jpg"}]', '领券减200+6期免息  ', '\n\n HUAWEI Mate 20 6GB+64GB 全网通版高屏占比 2000万AI双摄高屏占比 2000万AI双摄（亮黑色）\n'),
(3, '荣耀8X', 1199, 33, '[{"src":"./img/xiaomixiao.jpg"},{"src":"./img/xiaomixiao.jpg"},{"src":"./img/xiaomida.jpg"}]', '优惠200元', '荣耀8X 千元屏霸 高屏占比 2000万AI双摄 全网通 4GB+64GB（魅海蓝）'),
(4, '华为畅享 9e', 999, 33, '[{"src":"./img/padxiao.jpg"},{"src":"./img/padxiao.jpg"},{"src":"./img/padda.jpg"}]', '32G版下单立减50  ', '华为畅享 9e 千元珍珠屏 3GB+32GB 全网通标配版（幻夜黑）'),
(5, '荣耀10青春版', 1299, 33, '[{"src":"./img/bijibenxiao.jpg"},{"src":"./img/bijibenxiao.jpg"},{"src":"./img/bijibenda.jpg"}]', '最高优惠200元', '荣耀10青春版 幻彩渐变 2400万AI自拍 6.21英寸高屏占比珍珠屏 全网通 4GB+64GB（渐变蓝）'),
(6, 'HUAWEI nova 4', 2499, 33, '[{"src":"./img/block6.webp"},{"src":"./img/huaweixiao.jpg"},{"src":"./img/huaweida.jpg"}]', '最高直降300元', 'HUAWEI nova 4 4800万超广角三摄 自拍极点全面屏 高配 8GB+128GB 全网通版（贝母白）'),
(7, '荣耀 10', 1799, 33, '[{"src":"./img/block7.webp"},{"src":"./img/pic1.jpg"},{"src":"./img/pic_big.jpg"}]', '最高优惠600元', '荣耀10 GT游戏加速 AIS手持夜景 AI摄影手机 6GB+64GB 幻影紫 全网通 双卡双待 荣耀10GT'),
(8, '荣耀MagicBook 2019 锐龙版', 9999, 44, '[{"src":"../img/block8.webp"},{"src":"./img/padxiao.jpg"},{"src":"./img/padda.jpg"}]', '最高直降200元 享分期免息 ', '【新品】荣耀MagicBook 2019 锐龙版 14英寸轻薄笔记本电脑 Ryzen 5 3500U 8GB 512GB（冰河银）'),
(9, '荣耀V20', 2699, 33, '[{"src":"../img/block1.webp"},{"src":"img/b1.jpg"}]', '限时优惠600元  ', '荣耀V20 麒麟980 魅眼全视屏 4800万AI超清摄影 全网通6GB+128GB 标配版 幻夜黑'),
(10, 'HUAWEI Mate 20', 3499, 33, '[{"src":"./img/block2.webp"},{"src":"img/b1.jpg"}]', '领券减200+6期免息  ', '\r\n HUAWEI Mate 20 6GB+64GB 全网通版高屏占比 2000万AI双摄高屏占比 2000万AI双摄（亮黑色）\r\n'),
(11, '荣耀8X', 1199, 33, '[{"src":"./img/block3.webp"},{"src":"img/b1.jpg"}]', '优惠200元', '荣耀8X 千元屏霸 高屏占比 2000万AI双摄 全网通 4GB+64GB（魅海蓝）'),
(12, '华为畅享 9e', 999, 33, '[{"src":"./img/block4.webp"},{"src":"img/b1.jpg"}]', '32G版下单立减50  ', '华为畅享 9e 千元珍珠屏 3GB+32GB 全网通标配版（幻夜黑）'),
(13, '荣耀10青春版', 1299, 33, '[{"src":"./img/block5.webp"},{"src":"img/b1.jpg"}]', '最高优惠200元', '荣耀10青春版 幻彩渐变 2400万AI自拍 6.21英寸高屏占比珍珠屏 全网通 4GB+64GB（渐变蓝）'),
(14, 'HUAWEI nova 4', 2499, 33, '[{"src":"./img/block6.webp"},{"src":"img/b1.jpg"}]', '最高直降300元', 'HUAWEI nova 4 4800万超广角三摄 自拍极点全面屏 高配 8GB+128GB 全网通版（贝母白）'),
(15, '荣耀 10', 1799, 33, '[{"src":"./img/block7.webp"},{"src":"img/b1.jpg"}]', '最高优惠600元', '荣耀10 GT游戏加速 AIS手持夜景 AI摄影手机 6GB+64GB 幻影紫 全网通 双卡双待 荣耀10GT'),
(16, '荣耀MagicBook 2019 锐龙版', 9999, 44, '[{"src":"../img/block8.webp"},{"src":"img/b1.jpg"}]', '最高直降200元 享分期免息 ', '【新品】荣耀MagicBook 2019 锐龙版 14英寸轻薄笔记本电脑 Ryzen 5 3500U 8GB 512GB（冰河银）');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jd`
--
ALTER TABLE `jd`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `jd`
--
ALTER TABLE `jd`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
