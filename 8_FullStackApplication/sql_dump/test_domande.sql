-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: test
-- ------------------------------------------------------
-- Server version	8.4.0

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
-- Table structure for table `domande`
--

DROP TABLE IF EXISTS `domande`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `domande` (
  `codDomanda` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(200) NOT NULL,
  `testoDomanda` varchar(200) NOT NULL,
  `risposta1` varchar(200) NOT NULL,
  `risposta2` varchar(200) NOT NULL,
  `risposta3` varchar(200) NOT NULL,
  `risposta4` varchar(200) NOT NULL,
  `rispostaCorretta` varchar(200) NOT NULL,
  `codQuiz` int NOT NULL,
  PRIMARY KEY (`codDomanda`),
  UNIQUE KEY `testoDomanda` (`testoDomanda`),
  KEY `codQuiz` (`codQuiz`),
  CONSTRAINT `domande_ibfk_1` FOREIGN KEY (`codQuiz`) REFERENCES `quiz` (`codQuiz`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domande`
--

LOCK TABLES `domande` WRITE;
/*!40000 ALTER TABLE `domande` DISABLE KEYS */;
INSERT INTO `domande` VALUES (1,'Matematica','Qual è la somma di 2 + 2?','3','4','5','6','4',1),(2,'Storia','Chi fu il primo presidente degli Stati Uniti?','George Washington','Thomas Jefferson','Abraham Lincoln','Benjamin Franklin','George Washington',1),(3,'Geografia','Qual è la capitale del Brasile?','Rio de Janeiro','São Paulo','Brasilia','Salvador','Brasilia',1),(4,'Scienza','Qual è il simbolo chimico dell\'oro?','Ag','Au','Fe','Hg','Au',1),(5,'Letteratura','Chi scrisse \'Il vecchio e il mare\'?','Ernest Hemingway','F. Scott Fitzgerald','Mark Twain','John Steinbeck','Ernest Hemingway',3),(6,'Matematica','Quanto fa la radice quadrata di 25?','3','4','5','6','5',2),(7,'Storia','Quando è stata firmata la Dichiarazione di Indipendenza degli Stati Uniti?','1776','1789','1800','1812','1776',2),(8,'Geografia','Qual è il fiume più lungo del mondo?','Nilo','Amazonas','Yangtze','Mississippi','Nilo',2),(9,'Scienza','Quale è l\'elemento più abbondante nell\'universo?','Ossigeno','Idrogeno','Azoto','Elio','Idrogeno',2),(10,'Letteratura','Qual è l\'autore de \'Il signore degli anelli\'?','J.R.R. Tolkien','C.S. Lewis','J.K. Rowling','George R.R. Martin','J.R.R. Tolkien',2),(11,'Matematica','Quanto fa 7 * 8?','50','54','56','64','56',3),(12,'Storia','Chi era il presidente degli Stati Uniti durante la seconda guerra mondiale?','Franklin D. Roosevelt','Harry S. Truman','Dwight D. Eisenhower','John F. Kennedy','Franklin D. Roosevelt',3),(13,'Geografia','Quale è la città più popolata del mondo?','Tokyo','Pechino','Shanghai','Mumbai','Tokyo',3),(14,'Scienza','Qual è l\'elemento chimico con simbolo \'Na\'?','Sodio','Nichel','Neon','Niacina','Sodio',3),(15,'Letteratura','Quale scrittore fu autore de \'Il conte di Montecristo\'?','Victor Hugo','Gustave Flaubert','Alexandre Dumas','Honoré de Balzac','Alexandre Dumas',3),(16,'Storia','Chi ha scoperto l\'America nel 1492?','Christopher Columbus','Amerigo Vespucci','Marco Polo','Ferdinand Magellan','Christopher Columbus',4),(17,'Geografia','Quale è il deserto più grande del mondo?','Sahara','Gobi','Kalahari','Arabia','Sahara',4),(18,'Scienza','Qual è l\'accelerazione dovuta alla gravità sulla superficie terrestre?','9.8 m/s^2','8.2 m/s^2','10.2 m/s^2','7.5 m/s^2','9.8 m/s^2',4),(19,'Matematica','Quanto fa 9 * 9?','71','79','81','89','81',4),(20,'Letteratura','Chi scrisse \"Orgoglio e Pregiudizio\"?','Jane Austen','Emily Brontë','Charlotte Brontë','Agatha Christie','Jane Austen',4),(21,'Scienza','Qual è l\'elemento con numero atomico 1?','Idrogeno','Ossigeno','Carbonio','Elio','Idrogeno',5),(22,'Matematica','Quanto fa 3 + 4 * 2?','10','11','14','15','11',5),(23,'Storia','Qual è stata la prima capitale dell\'Italia unita?','Firenze','Torino','Roma','Milano','Torino',5),(24,'Geografia','Quale è il continente più grande del mondo?','Africa','Europa','Asia','America','Asia',5),(25,'Letteratura','Quale è l\'opera più conosciuta di William Shakespeare?','Romeo e Giulietta','Amleto','Macbeth','Otello','Romeo e Giulietta',5);
/*!40000 ALTER TABLE `domande` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-09 19:58:57
