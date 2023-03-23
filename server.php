<?php
//recuperiamo file todolist.json con file_get_contents()
$todolist_string = file_get_contents('./todolist.json');

//impostare content-type json
header('Content-Type: application/json');

$todo_list =json_decode($todolist_string, true);

//recupero le chiamata che arriva con saveTask
$newElToDo = isset($_POST['todo']) ? $_POST['todo'] : null;

//se esiste lo aggiungo a $todo_list 
if($newElToDo !== null){
    $todo_list[] = $newElToDo;
}

//trasformo $todo_list in una stringa json
$new_array_string = json_encode($todo_list);
//e salvo il risultato nel file
file_put_contents('./todolist.json',$new_array_string);

//stampo
echo $new_array_string; 
?>