<?php
$allowed_referers = array('sinalpublico.github.io', 'c2luywxwdwjsawnv.github.io');

$referer = parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST);

if (!in_array($referer, $allowed_referers)) {
    header('HTTP/1.0 403 Forbidden');
    exit('Você não tem permissão para acessar este conteúdo.');
}
?>
