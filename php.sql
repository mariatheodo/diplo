-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 01, 2017 at 01:10 PM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `php`
--

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

CREATE TABLE IF NOT EXISTS `list` (
  `id` int(11) NOT NULL,
  `word` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `explanation` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `list`
--

INSERT INTO `list` (`id`, `word`, `explanation`) VALUES
(1, 'echo', '<p>Η echo εμφανίζει το string στην οθόνη, δεν χρειάζεται παρενθέσεις.</p><pre><p class=''code''>echo ''Hello World'';</p></pre><p class=''link''><a href=''http://php.net/manual/en/function.echo.php'' target=''_blank''>http://php.net/manual/en/function.echo.php</a></p>'),
(2, 'for', '<p>Δομή επανάληψης for:<pre></p><p class=''code''>for(έκφρ1; συνθήκη; έκφρ2) {</p><p class=''code intend1''>κώδικας }</p></pre><p>Στην αρχή εκτελείται η έκφραση1. Στην αρχή κάθε κύκλου ελέγχεται η συνθήκη, αν είναι TRUE τότε εκτελείται  ο κώδικας, διαφορετικά ο βρόγχος σταματάει. Στο τέλος κάθε κύκλου εκτελείται η έκφραση2.</p><pre><p class=''code''>for($i = 0; $i < 10; $i++) {</p><p class=''code intend1''>echo $i;</p><p class=''code''> }</p></pre><p class=''link''><a href=''http://php.net/manual/en/control-structures.for.php'' target=''_blank''>http://php.net/manual/en/control-structures.for.php</a></p>'),
(3, 'print', '<p>Η print() είναι μια συνάρτηση που στέλνει τα περιεχόμενα της παραμέτρου στον browser.</p><pre><p class=''code''>print(''Hello World'');</p></pre><p>Μπορεί να δουλέψει και  χωρίς παρενθέσεις.</p><pre><p class=''code''>print ''Παράδειγμα'';</p><p class=''code''>$foo = ''Καλημέρα'';</p><p class=''code''>print $foo;</p><p class=''code''>$name = ''Maria'';</p><p class=''code''>print ''My name is $name'';</p></pre><p class=''link''><a href=''http://php.net/manual/en/function.print.php'' target=''_blank''>http://php.net/manual/en/function.print.php</a></p>'),
(4, '$globals', '<p>Η $GLOBALS περιέχει τα ονόματα και τις τιμές όλων των εσωτερικών μεταβλητών. Για να τις δείτε γράψτε:</p><pre><p class=''code''>print_r($GLOBALS);</p></pre><p class=''link''><a href=''http://php.net/manual/en/reserved.variables.globals.php'' target=''_blank''>http://php.net/manual/en/reserved.variables.globals.php</a> </p>'),
(5, 'define', '<p>Η define() χρησιμοποιείται για ορισμό σταθερών</p><pre><p class=''code''>define(''PI'', 3.14);</p></pre><p class=''link''><a href=''http://php.net/manual/en/function.define.php''>http://php.net/manual/en/function.define.php</a></p>'),
(6, 'defined', '<p>Η defined() επιστρέφει true αν η σταθερά είναι δηλωμένη.</p><pre><p class=''code''>if (defined(''FIRSTNAME'')) {</p><p class=''code intend1''>echo ''Welcome ''.FIRSTNAME;</p><p class=''code''>}</p></pre><p class=''link''><a href=''http://php.net/manual/en/function.defined.php'' target=''_blank''>http://php.net/manual/en/function.defined.php</a> </p>'),
(7, 'if', '<p>Η if χρησιμοποιείται για έλεγχο μιας συνθήκης.</p><pre><p class=''code''>if ($a > 0) {</p><p class=''code intend1''>//κώδικας1</p><p class=''code''>}</p><p class=''code''>elseif ($a < 0) {</p><p class=''code intend1''>//κώδικας2</p><p class=''code''>}</p><p class=''code''>else {</p><p class=''code intend1''>//κώδικας3</p><p class=''code''>}</p></pre><p>Τα σκέλη elseif και else δεν είναι απαραίτητα.</p><p class=''link''><a href=''http://php.net/manual/en/control-structures.if.php'' target=''_blank''>http://php.net/manual/en/control-structures.if.php</a></p>'),
(8, 'elseif', '<p>Η if χρησιμοποιείται για έλεγχο μιας συνθήκης.</p><pre><p class=''code''>if ($a > 0) {</p><p class=''code intend1''>//κώδικας1</p><p class=''code''>}</p><p class=''code''>elseif ($a < 0) {</p><p class=''code intend1''>//κώδικας2</p><p class=''code''>}</p><p class=''code''>else {</p><p class=''code intend1''>//κώδικας3</p><p class=''code''>}</p></pre><p>Τα σκέλη elseif και else δεν είναι απαραίτητα.</p><p class=''link''><a href=''http://php.net/manual/en/control-structures.if.php'' target=''_blank''>http://php.net/manual/en/control-structures.if.php</a></p>'),
(9, 'else', '<p>Η if χρησιμοποιείται για έλεγχο μιας συνθήκης.</p><pre><p class=''code''>if ($a > 0) {</p><p class=''code intend1''>//κώδικας1</p><p class=''code''>}</p><p class=''code''>elseif ($a < 0) {</p><p class=''code intend1''>//κώδικας2</p><p class=''code''>}</p><p class=''code''>else {</p><p class=''code intend1''>//κώδικας3</p><p class=''code''>}</p></pre><p>Τα σκέλη elseif και else δεν είναι απαραίτητα.</p><p class=''link''><a href=''http://php.net/manual/en/control-structures.if.php'' target=''_blank''>http://php.net/manual/en/control-structures.if.php</a></p>'),
(10, 'phpinfo', '<p>Η phpinfo() επιστρέφει πληροφορίες για την έκδοση της php και για το σύστημα στο οποίο τρέχει.</p><p class=''link''><a href=''http://php.net/manual/en/function.phpinfo.php'' target=''_blank''>http://php.net/manual/en/function.phpinfo.php</a></p>'),
(11, 'switch', '<p>Η switch είναι παρόμοια με την if. Χρησιμοποιείται όταν θέλουμε να συγκρίνουμε μια μεταβλητή με πολλές διαφορετικές τιμές και να εκτελέσουμε διαφορετικό κώδικα ανάλογα με την περίπτωση.</p><pre><p class=''code''>switch($name) {</p><p class=''code intend1''>case ''Mark'':</p><p class=''code intend2''>echo ''Welcome Mark'';</p><p class=''code intend2''>break;</p><p class=''code intend1''>case ''Chris'':</p><p class=''code intend2''>echo ''Nice to meet you!'';</p><p class=''code intend2''>break;</p><p class=''code intend1''>default:</p><p class=''code intend2''>echo ''I don''t know you!'';</p><p class=''code intend2''>break;</p><p>}</p></pre><p class=''link''><a href=''http://php.net/manual/en/control-structures.switch.php'' target=''_blank''>http://php.net/manual/en/control-structures.switch.php</a></p>'),
(12, 'while', '<p>Η δομή επανάληψης while εκτελεί τον κώδικα όσο η συνθήκη είναι αληθής.</p><pre><p class=''code''>$a = 5;</p><p class=''code''>while ($a > 0) {</p><p class=''code intend1''>echo $a--;</p><p class=''code''>}</p></pre><p class=''link''><a href=''http://php.net/manual/en/control-structures.while.php'' target=''_blank''>http://php.net/manual/en/control-structures.while.php</a></p>'),
(13, 'do', '<p>Στο βρόγχο do-while η συνθήκη ελέγχεται στο τέλος κάθε επανάληψης. Αυτό εγγυάται ότι οι εντολές θα εκτελεστούν τουλάχιστον μία φορά.</p><pre><p class=''code''>$a = 1;</p><p class=''code''>do {</p><p class=''code intend1''>echo $a;</p><p class=''code''>} while ($a == 0);</p></pre><p class=''link''><a href=''http://php.net/manual/en/control-structures.do.while.php'' target=''_blank''>http://php.net/manual/en/control-structures.do.while.php</a></p>'),
(15, 'break', '<p>Η break τερματίζει την εκτέλεση των for, foreach, while, do-while και switch.</p><pre><p class=''code''>for($i = 0; $i < 3; $i++) {</p><p class=''code intend1''>if ($i < 2) {</p><p class=''code intend2''>break;<p class=''code intend1''>}</p></p><p class=''code intend1''>echo $i;</p><p class=''code''>}</p></pre><p>Η "echo $i" δεν θα εκτελεστεί ποτέ.</p><p class=''link''>\n<a href=''http://php.net/manual/en/control-structures.break.php'' target=''_blank''>http://php.net/manual/en/control-structures.break.php</a></p>'),
(16, 'continue', '<p>Η continue χρησιμοποιείται σε βρόγχους και στην switch και τερματίζει την τρέχουσα επανάληψη του βρόγχου. Η συνθήκη του βρόγχου ελέγχεται ξανά.</p>\r\n<pre><p class=''code''>for ($i = 0; i < 5; i++) {</p><p class=''code intend1''>if ($i == 3) {</p><p class=''code intend2''>continue;</p><p class=''code intend1''>}</p><p class=''code intend1''>echo $i;</p><p class=''code''>}</p></pre>\r\n<p>Το παραπάνω θα τυπώσει τους αριθμούς 0 έως 4 εκτός από το 3.</p>\r\n<p class=''link''><a href=''http://php.net/manual/en/control-structures.continue.php'' target=''_blank''>http://php.net/manual/en/control-structures.continue.php</a></p>'),
(17, 'exit', '<p>Η exit τερματίζει την εκτέλεση του υπόλοιπου script μετά από αυτήν και εμφανίζει ένα μήνυμα.</p><pre><p class=''code''>$conn = mysqli_connect($servername, $username, $password, $dbname);</p><p class=''code''>if (!$conn) {</p><p class=''code intend1''>exit("Connection failed!");</p><p class=''code''>}</p></pre><p class=''link''><a href=''http://php.net/manual/en/function.exit.php'' target=''_blank''>http://php.net/manual/en/function.exit.php</a></p>'),
(18, 'die', '<p>Η die είναι ψευδώνυμο της exit. Tερματίζει την εκτέλεση του υπόλοιπου script μετά από αυτήν και εμφανίζει ένα μήνυμα.</p><pre><p class=''code''>$conn = mysqli_connect($servername, $username, $password, $dbname);</p><p class=''code''>if (!$conn) {</p><p class=''code intend1''>die("Connection failed!");</p><p class=''code''>}</p></pre><p class=''link''><a href=''http://php.net/manual/en/function.die.php'' target=''_blank''>http://php.net/manual/en/function.die.php</a></p>'),
(19, 'foreach', '<p>Η foreach είναι δομή επανάληψης για να διατρέχει πίνακες.</p><pre><p class=''code''>$a = array(2, 4, 6, 8);</p><p class=''code''>foreach ($a as $value) {</p><p class=''code intend1''>echo "$value&ltbr\\&gt";</p><p class=''code''>}</p></pre><pre><p class=''code''>$mitroo = array(1056=>''Panagiotou'', 1057=>''Georgiou'');</p><p class=''code''>foreach ($mitroo as $key=>$value) {</p><p class=''code intend1''>echo "$key: $value &ltbr\\&gt";</p><p class=''code''>}</p></pre><p class=''link''><a href=http://php.net/manual/en/control-structures.foreach.php'' target=''_blank''>http://php.net/manual/en/control-structures.foreach.php</a></p>'),
(20, 'function', '<p>Με την function γίνεται ο ορισμός μιας συνάρτησης.</p><pre><p class=''code''>function my_function() {</p><p class=''code intend1''>echo "This is my function";</p><p class=''code''>}</p><p class=''code''>my_function();</p></pre>'),
(21, 'return', '<p>Η return τερματίζει την εκτέλεση μιας συνάρτησης. Επιστρέφει την τιμή που την ακολουθεί.</p><pre><p class=''code''>function square($a) {</p><p class=''code intend1''>return $a * $a;</p><p class=''code''>}</p><p class=''code''>$b = square(8);</p></pre><p class=''link''><a href=''http://php.net/manual/en/function.return.php'' target=''_blank''>http://php.net/manual/en/function.return.php</a><p>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
