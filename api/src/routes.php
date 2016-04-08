<?php
// Routes

$app->get('/articles', function(){
	$sql = "SELECT a.id, a.contenu, a.title, ta.tag FROM articles a LEFT JOIN tag_article ta ON a.tag = ta.id ORDER BY a.id";
	try {
		$db = getConnection();
		$stmt = $db->query($sql);
		$articles = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($articles);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}});
$app->post('/articles', function ($request, $response, $args) use ($app){
	$article = json_decode($request->getBody());
	$sql = "INSERT INTO articles (title, contenu, tag) VALUES (:title, :contenu, :tag)";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql); 
		$stmt->bindParam("title", $article->title);
		$stmt->bindParam("contenu", $article->contenu);
		$stmt->bindParam("tag", $article->tag);
		$stmt->execute();
		$article->id = $db->lastInsertId();
		$db = null;
		echo json_encode($article); 
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}});
$app->group('/articles/{id}', function(){
	$this->get('', function($request, $response, $args) {
		$sql = "SELECT a.id, a.contenu, a.title, ta.tag FROM articles a LEFT JOIN tag_article ta ON a.tag = ta.id WHERE a.id = ".$args['id'];
		try {
			$db = getConnection();
			$stmt = $db->query($sql);  
			$article = $stmt->fetchAll(PDO::FETCH_OBJ);
			$db = null;
			echo json_encode($article);
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}'; 
		}});
	$this->put('', function($request, $response, $args){
		$article = json_decode($request->getBody());
		$sql = "UPDATE articles 
				SET title=:title, contenu=:contenu, tag=:tag
				WHERE id =".$args['id'];
		try {
			$db = getConnection();
			$stmt = $db->prepare($sql);  
			$stmt->bindParam("title", $article->title);
			$stmt->bindParam("contenu", $article->contenu);
			$stmt->bindParam("tag", $article->tag);
			$stmt->execute();
			$db = null;
			echo json_encode($article); 
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}'; 
		}});
	$this->delete('', function($request, $response, $args){
			$sql = "DELETE FROM articles WHERE id=".$args['id'];
			try {
				$db = getConnection();
				$stmt = $db->query($sql);  
				$article = $stmt->fetchAll(PDO::FETCH_OBJ);
				$db = null;
				echo json_encode($article);
			} catch(PDOException $e) {
				echo '{"error":{"text":'. $e->getMessage() .'}}'; 
			}});
});

$app->get('/tags', function(){
	$sql = "SELECT id, tag FROM tag_article";
	try {
		$db = getConnection();
		$stmt = $db->query($sql);
		$tag = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($tag);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}});
$app->post('/tags', function($request, $response, $args){
	$tag = json_decode($request->getBody());
	$sql = "INSERT INTO tag_article (tag) VALUES (:tag)";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql); 
		$stmt->bindParam("tag", $tag->tag);
		$stmt->execute();
		$tag->id = $db->lastInsertId();
		$db = null;
		echo json_encode($tag); 
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}});
$app->group('/tags/{id}', function(){
	$this->put('', function($request, $response, $args){
		$tag = json_decode($request->getBody());
		$sql = "UPDATE tag_article 
				SET tag=:tag
				WHERE id =".$args['id'];
		try {
			$db = getConnection();
			$stmt = $db->prepare($sql);  
			$stmt->bindParam("tag", $tag->tag);
			$stmt->execute();
			$db = null;
			echo json_encode($tag); 
		} catch(PDOException $e) {
			echo '{"error":{"text":'. $e->getMessage() .'}}'; 
		}});
	$this->delete('', function($request, $response, $args){
			$sql = "DELETE FROM tag_article WHERE id=".$args['id'];
			try {
				$db = getConnection();
				$stmt = $db->query($sql);  
				$article = $stmt->fetchAll(PDO::FETCH_OBJ);
				$db = null;
				echo json_encode($article);
			} catch(PDOException $e) {
				echo '{"error":{"text":'. $e->getMessage() .'}}'; 
			}});
});

function getConnection() {
	$dbhost="127.0.0.1";
	$dbuser="root";
	$dbpass="";
	$dbname="blog";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}