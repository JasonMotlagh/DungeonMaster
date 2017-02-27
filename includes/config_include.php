<?php

function __autoload($class_name) {
    if(file_exists('../classes/'.$class_name . '.php')) {
        require_once('../classes/'.$class_name . '.php');    
    } else {
        throw new Exception("Unable to load $class_name.");
    }
}

?>