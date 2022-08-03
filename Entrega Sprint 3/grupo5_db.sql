-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: grupo5
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `id_marca` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id_marca`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'Nike'),(2,'Adidas'),(3,'Puma');
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `rol` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `password` (`password`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zapatillas`
--

DROP TABLE IF EXISTS `zapatillas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zapatillas` (
  `id_zapatilla` int NOT NULL AUTO_INCREMENT,
  `id_marca` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `precio` varchar(50) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `foto` varchar(100) NOT NULL,
  `descuento` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_zapatilla`),
  KEY `id_marca` (`id_marca`),
  CONSTRAINT `zapatillas_ibfk_1` FOREIGN KEY (`id_marca`) REFERENCES `marcas` (`id_marca`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zapatillas`
--

LOCK TABLES `zapatillas` WRITE;
/*!40000 ALTER TABLE `zapatillas` DISABLE KEYS */;
INSERT INTO `zapatillas` VALUES (1,1,'Nike Air Max 720','$22.000','En sus inicios en 1997, el diseño de las Air Max 97 atrajo tanto a admiradores como a críticos. ​ De hecho, las Air Max 97 pasaron menos de un año en los estantes de las tiendas, aunque fueron muy populares en Italia y Serbia. En su lanzamiento en 1997, las Air Max 97 se vendían al por menor a 150 dólares.','mejores-productos','/images/1657907261211.jpg','20% OFF'),(2,1,'Nike Air Max 97','$17.000','En sus inicios en 1997, el diseño de las Air Max 97 atrajo tanto a admiradores como a críticos. ​ De hecho, las Air Max 97 pasaron menos de un año en los estantes de las tiendas, aunque fueron muy populares en Italia y Serbia. En su lanzamiento en 1997, las Air Max 97 se vendían al por menor a 150 dólares.','mejores-productos','/images/1657908831289.jpg',''),(3,2,'Adidas Coreracer','$9.000','Las zapatillas adidas Coreracer ofrecen la combinación perfecta de sujeción para running y estilo urbano. Son livianas y transpirables para mantener tus pies cómodos en todo momento. Lucen un logo adidas Badge of Sport que le pone el toque final al look de alto rendimiento.','mejores-productos','/images/1657908870245.jpg',''),(4,2,'Adidas Ozweego','$11.000','El estilo de los 90 fue solo el comienzo. Estas zapatillas OZWEEGO logran algo nuevo inspirándose en los diseños retro de adidas. Su exterior tipo media envuelve los pies en comodidad y suavidad. Los detalles tubulares en el talón le ponen un auténtico toque retro-tech al look.','mejores-productos','/images/1657911156362.jpg',''),(5,1,'Nike Air Max Se','$18.900','Nada tan ligero, tan cómodo ni tan probado como el Nike Air Max SE, que se mantiene fiel a sus raíces originales y a la vez da un novedoso paso hacia la sustentabilidad. La icónica suela tipo wafle ahora cuenta con corcho reciclado, los revestimientos cosidos usan lona 100% reciclada y el gráfico de planta bordado en la lengüeta celebra a la planta presentada en el diseño.','mas-comprado','/images/1657911236119.jpg',''),(6,1,'Nike Air Dunk Low','$14.800','Entre las principales características de las Nike Dunk Low destaca su gran soporte, suspensión y niveles de adherencia al suelo o soporte (skate), estas mismas características las llevó a convertirse en una de las sneakers más codiciadas de Nike SB, convirtiéndose en un símbolo del skateboarding.','mas-comprado','/images/1657911303245.jpg',''),(7,3,'Puma Mirage Tech','$10.000','Las zapatillas Puma Mirage Tech están confeccionadas en su exterior con una construcción de mallas y materiales sintéticos para una mayor comodidad, frescura y durabilidad. La suela de goma y espuma con EVA ofrecen pisadas extra suaves y tracción sobre cualquier superficie.','mas-comprado','/images/1657911370060.jpg',''),(8,2,'Adidas Super Star','$12.000','El superstar es una zapatilla deportiva de baloncesto estilo low-top fabricado desde 1969 por la compañía de artículos deportivos Adidas. La zapatilla Superstar originalmente fue lanzada como una versión low-top del tenis de baloncesto Pro Model.','mas-comprado','/images/1657911436574.jpg',''),(9,1,'Nike Air Vapormax 360','$22.000','El Nike Air VaporMax 2021 FK es amplio y fácil de poner, ya que cuenta con una tela Flyknit reciclada y superelástica. Además de un cuello suave que moldea el tobillo. Las costuras del logotipo Swoosh y el clip de TPU reciclado del talón añaden el toque perfecto. Para recorrer las calles con una amortiguación VaporMax increíblemente suave. La unidad Air VaporMax 2 se diseñó originalmente para el running de alto rendimiento.\r\n\r\n','mejores-ofertas','/images/1657911628804.jpg','30% OFF'),(10,1,'Nike Air Force 1 Shadow','$14.300','Nike Air Force 1 Shadow es una silueta exclusiva para mujeres con un diseño basado en la superposición de capas que crean una sensación de doble visión. El diseño de las zapatillas incorpora como principal novedad un swoosh duplicado, el doble de altura y el doble de fuerza.\r\n\r\n','mejores-ofertas','/images/1657911685807.jpg','20% OFF'),(11,1,'Nike Air Max 97 Negras','$13.000','En sus inicios en 1997, el diseño de las Air Max 97 atrajo tanto a admiradores como a críticos. ​ De hecho, las Air Max 97 pasaron menos de un año en los estantes de las tiendas, aunque fueron muy populares en Italia y Serbia. En su lanzamiento en 1997, las Air Max 97 se vendían al por menor a 150 dólares.','mejores-ofertas','/images/1657911722301.jpg','15% OFF'),(12,1,'Puma Wild Rider Rollin','$11.000','Con su silueta dinámica y detalles de colores vivos, las Wild Rider Rollin\' te transportarán a una nueva temporada de estilo urbano. Inspiradas en la cultura juvenil, estas zapatillas de última generación combinan el estilo atlético con elementos innovadores, logrando un look cargado de energía.','mejores-ofertas','/images/1657911760192.jpg','18% OFF');
/*!40000 ALTER TABLE `zapatillas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-22 22:52:55
