<?php
namespace DB;
require_once("Connect.php");

// use Connect;
use PDO;

class Links extends Connect
{
    public function todos() {
        $db = self::getInstance();
        $query = $db->query("SELECT * FROM links")->fetchAll(PDO::FETCH_ASSOC);
        return $query;
    }

    public function salvar($nome, $link, $foto,$redondo) {
            $db = self::getInstance();
            $sql = "INSERT INTO links(nome, link, foto, redondo) values (:nome, :link, :foto, :redondo)";

            $stmt = $db->prepare($sql);

            $stmt->bindValue(":nome", $nome);
            $stmt->bindValue(":link", $link);
            $stmt->bindValue(":foto", $foto);
            $stmt->bindValue(":redondo", $redondo);

            $stmt->execute();

    }

    public function delete($id) {
        $db = self::getInstance();
        $sql = "DELETE FROM links WHERE id = :id";
        $stmt = $db->prepare($sql);

        $stmt->bindValue(":id", $id, FILTER_SANITIZE_NUMBER_INT);

        $stmt->execute();
    }

    public function um_link($id) {
      $db = self::getInstance();
      $sql = "SELECT * FROM links WHERE id = $id";
      $query = $db->query($sql)->fetch(PDO::FETCH_ASSOC);
      return $query;
    }
}
