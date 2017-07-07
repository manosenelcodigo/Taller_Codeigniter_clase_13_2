<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>hola mundo</title>
            <link rel="stylesheet" href="<?php echo base_url();?>public/css/bootstrap.min.css" />
        </head>
        <body>
             <!--contenido-->
                <?php echo $content_for_layout;?>
            <!--/contenido-->
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script type="text/javascript" src="<?php echo base_url();?>public/js/funciones.js"></script>
        </body>
    </html>
