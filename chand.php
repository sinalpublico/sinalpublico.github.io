<?php
$allowed_referers = array('sinalpublico.github.io', 'c2luywxwdwjsawnv.github.io');

$referer = parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST);

if (!in_array($referer, $allowed_referers)) {
    header('HTTP/1.0 403 Forbidden');
    exit('Você não tem permissão para acessar este conteúdo.');
}
// Verifica se a requisição é feita pelo seu site
if (isset($_SERVER['HTTP_REFERER']) && strpos($_SERVER['HTTP_REFERER'], 'sinalpublico.github.io') !== false) {
    // Caminho da imagem
    $file = 'path/to/your/image.jpg';

    // Verifica se o arquivo existe
    if (file_exists($file)) {
        header('Content-Type: image/jpeg');
        readfile($file);
    } else {
        header('HTTP/1.0 404 Not Found');
    }
} else {
    header('HTTP/1.0 403 Forbidden');
}
?>
