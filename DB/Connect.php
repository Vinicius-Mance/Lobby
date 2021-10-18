<?php

namespace DB;
use PDO;
use PDOException;


class Connect {

 static $instance;

    public static function getInstance()
    {
        if (empty(self::$instance)){
            try {
                self::$instance = new PDO(
                    "mysql:host=localhost;dbname=lobbyxd",
                    "root",
                    ""
                );
            } catch ( PDOException $exception ){
                die("<h1>:(</h1>" . $exception->getMessage());
            }
        }
        return self::$instance;
 }
}
