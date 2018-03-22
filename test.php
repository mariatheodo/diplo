<?php
/**
 * Created by PhpStorm.
 * User: maria-laptop
 * Date: 31/5/2017
 * Time: 1:25 μμ
 */

$b = array("a"=>"limin", "b"=>"do", "c"=>"cat", "d"=>"unthink");
shuffle($b);

foreach ($b as $key => $value) {
    echo $key." ".$value."\n ";
}
?>