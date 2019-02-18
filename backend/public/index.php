<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Allow: GET, POST, OPTIONS, PUT, DELETE');

require '../vendor/autoload.php';

$config = ['settings' => [
    'addContentLengthHeader' => false,
]];

$app = new Slim\App($config);

require "..\app\components\books.php";

try {
    $app->run(false);
} catch (\Slim\Exception\MethodNotAllowedException $e) {
    var_dump($e);
} catch (\Slim\Exception\NotFoundException $e) {
    var_dump($e);
} catch (\UnexpectedValueException $e) {
    var_dump($e);
} catch (\Exception $e) {
    var_dump($e);
}


