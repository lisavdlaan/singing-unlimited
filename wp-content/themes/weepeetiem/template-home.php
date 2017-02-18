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
            <?php the_content(); ?>
        </div>
        <?php if (is_active_sidebar('home-widgets-3')) { ?>
                <div class="large-3">
                    <?php dynamic_sidebar('home-widgets-3'); ?>
                </div>
        <?php } ?>
    </div>
        
<?php get_footer(); ?>