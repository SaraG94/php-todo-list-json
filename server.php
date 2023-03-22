<?php
//recuperiamo file todolist.json con file_get_contents()
$todolist_string = file_get_contents('./todolist.json');

//impostare content-type json
header('Content-Type: application/json');

echo $todolist_string;
?>