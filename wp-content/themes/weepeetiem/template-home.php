<?php
/*
Template Name: Homepage
*/
?>

<?php get_header(); ?>
    
    <div class="homepage-slider">
        <?php echo do_shortcode('[simpleslider location="homepage" animation="slide" slideshowspeed="10"]');?>
    </div>
    
    <div class="container">
        <div class="row homepage">
            <?php if (is_active_sidebar('home-widgets-1')) { ?>
                <div class="large-4">
                    <?php dynamic_sidebar('home-widgets-1'); ?>
                </div>
            <?php } ?>

            <?php if (is_active_sidebar('home-widgets-2')) { ?>
                <div class="large-3">
                    <?php dynamic_sidebar('home-widgets-2'); ?>
                </div>
            <?php } ?>

        </div>
    </div>
        
<?php get_footer(); ?>