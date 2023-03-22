<?php
//recuperiamo file todolist.json con file_get_contents()
$todolist_string = file_get_contents('./todolist.json');

echo $todolist_string;
?>