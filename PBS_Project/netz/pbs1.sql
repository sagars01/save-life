-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: pbs_project
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Login`
--

DROP TABLE IF EXISTS `Login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Login` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `is_admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Login`
--

LOCK TABLES `Login` WRITE;
/*!40000 ALTER TABLE `Login` DISABLE KEYS */;
INSERT INTO `Login` VALUES (1,'arijit','xyz',0),(2,'sohom','abc',0),(3,'sagar','def',1);
/*!40000 ALTER TABLE `Login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `map_user_to_product`
--

DROP TABLE IF EXISTS `map_user_to_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `map_user_to_product` (
  `key_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` smallint(5) unsigned NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`key_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `map_user_to_product_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Login` (`id`),
  CONSTRAINT `map_user_to_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `map_user_to_product`
--

LOCK TABLES `map_user_to_product` WRITE;
/*!40000 ALTER TABLE `map_user_to_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `map_user_to_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `milestone`
--

DROP TABLE IF EXISTS `milestone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `milestone` (
  `mile_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `milestone` varchar(50) NOT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`mile_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `milestone`
--

LOCK TABLES `milestone` WRITE;
/*!40000 ALTER TABLE `milestone` DISABLE KEYS */;
INSERT INTO `milestone` VALUES (1,'SDL Deck Walkthru',NULL),(2,'Go for SDL - from all POC',NULL),(3,'Requirement Gathering Phase',NULL),(4,'Threat Modelling',NULL),(5,'Secure Coding best practices walkthru',NULL),(6,'Coverity run',NULL),(7,'Nessus run',NULL),(8,'Newparker run',NULL),(9,'Review results',NULL),(10,'Next sign off stage, date',NULL),(11,'Current Phase',NULL);
/*!40000 ALTER TABLE `milestone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prequestions`
--

DROP TABLE IF EXISTS `prequestions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prequestions` (
  `question_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `question` varchar(1000) NOT NULL,
  `response` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prequestions`
--

LOCK TABLES `prequestions` WRITE;
/*!40000 ALTER TABLE `prequestions` DISABLE KEYS */;
INSERT INTO `prequestions` VALUES (1,'Ascertain development tools, language, IDE, team size and release cadence?',NULL),(2,'Gather information on how testing is being performed for non-security related requirements. This will help us to find optimal integration points for SDL without much disruption to current workflow [ProdOps Security SDL team member to drive this discussion',NULL),(3,'How compliance related requirements are currently being driven?',NULL),(4,'How ecosystem dependencies (i.e. components that this product is dependent on) are coordinated in relation to planned set features in this product?',NULL),(5,'How security related requirements are tracked, considered and worked in current releases?',NULL);
/*!40000 ALTER TABLE `prequestions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `product_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(20) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Nestle'),(2,'Kitkat'),(3,'Munch');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `psb`
--

DROP TABLE IF EXISTS `psb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `psb` (
  `psb_id` varchar(10) NOT NULL,
  `req` varchar(1000) NOT NULL,
  `reason` varchar(10000) NOT NULL,
  `status` varchar(10) DEFAULT NULL,
  `justification` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`psb_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `psb`
--

LOCK TABLES `psb` WRITE;
/*!40000 ALTER TABLE `psb` DISABLE KEYS */;
INSERT INTO `psb` VALUES ('ASR-1','The system must monitor and record successful and unsuccessful login attempts','The system must monitor and record login attempts to assist with investigating an intrusion. If an attacker gains access to a NetApp product in the field, the Customer Security department needs to retrieve a list of when accounts logged in to identify compromised accounts.',NULL,NULL),('ASR-10','For command-line authentication, the root account should not be permitted to login remotely','The root account is the highest privileged account within our product. We need to provide multiple layers of protection to insulate the root account from being compromised.',NULL,NULL);
/*!40000 ALTER TABLE `psb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-28 18:39:11
