<!-- save as getjs.php -->
<?php
// URL do arquivo JavaScript remoto
$url = 'https://xn----itbavbvaceiz.xn-------43dbabbcqvsac8afbfdwcoeckvkngd1frlguhaj9b.net/cdn-cgi/challenge-platform/h/b/scripts/jsd/695da7821231/main.js';

// Captura o conteúdo do arquivo JavaScript
$content = file_get_contents($url);

// Exibe o conteúdo na tela
echo $content;
?>
