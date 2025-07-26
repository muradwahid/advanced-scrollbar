<?php
/*
 * Plugin Name: Advanced scrollbar
 * Author URI: http://bplugins.com
 * Description: Customize scrollbar of your website with unlimited styling and color using the plugin. 
 * Version: 1.2.4
 * Author: bPlugins
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: advanced-scrollbar
 */

/*-------------------------------------------------------------------------------*/
/*   Rendering all javaScript
/*-------------------------------------------------------------------------------*/

/* Latest jQuery of wordpress */
define('CSB_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.2.4' );
define('CSB_DIR_URL', plugin_dir_url(__FILE__));
define('CSB_DIR_PATH', plugin_dir_path(__FILE__));

if (!class_exists("CSB_Scrollbar")) {
    class CSB_Scrollbar {

        function __construct() {
            add_action("wp_enqueue_scripts", [$this,"enqueueScrollbarScript"]);
            add_action('wp_footer',[$this,"csbFooter"]);
        }

        function csbFooter(){
            $csb_data = get_option('admin-dashboard-secondssm');
            $csb_data = json_encode($csb_data);

            echo '<div id="csbScrollbar" data-scrollbar="'. esc_attr( $csb_data ) .'"></div>';
        }

        function enqueueScrollbarScript(){
            wp_enqueue_style( 'csb-scrollbar-style', CSB_DIR_URL . 'build/scrollbar.css', array(), CSB_VERSION );
            wp_enqueue_script( 'csb-scrollbar-script', CSB_DIR_URL . 'build/scrollbar.js', array('react','react-dom'), CSB_VERSION, true );
        }

    }
    new CSB_Scrollbar();
}

if ( ! function_exists( 'asb_fs' ) ) {
    // Create a helper function for easy SDK access.
    function asb_fs() {
        global $asb_fs;

        if ( ! isset( $asb_fs ) ) {
            // Include Freemius SDK.
            require_once dirname(__FILE__) . '/freemius/start.php';

            $asb_fs = fs_dynamic_init( array(
                'id'                  => '14870',
                'slug'                => 'advanced-scrollbar',
                'premium_slug'        => 'advanced-scrollbar-pro',
                'type'                => 'plugin',
                'public_key'          => 'pk_419d245dc8547a274d192990c096a',
                'is_premium'          => true,
                'premium_suffix'      => 'Pro',
                // If your plugin is a serviceware, set this option to false.
                'has_premium_version' => true,
                'has_addons'          => false,
                'has_paid_plans'      => true,
                'trial'               => array(
                    'days'               => 7,
                    'is_require_payment' => true,
                ),
                'menu'                => array(
                    'slug'           => 'c_s_b_setting',
                    'contact'        => false,
                    'support'        => false,
                    'parent'         => array(
                        'slug' => 'options-general.php',
                    ),
                ),
            ) );
        }

        return $asb_fs;
    }

    // Init Freemius.
    asb_fs();
    // Signal that SDK was initiated.
    do_action( 'asb_fs_loaded' );
}

function asbIsPremium(){
	return asb_fs()->is__premium_only() && asb_fs()->can_use_premium_code();
}


if (!function_exists('csb_wp_latest_jquery')):
    function csb_wp_latest_jquery()
    {
        wp_enqueue_script('jquery');
    }
    add_action('init', 'csb_wp_latest_jquery');
endif;

/* nicescroll js */
if (!function_exists('csb_get_jquerynicescroll_script')):
    function csb_get_jquerynicescroll_script()
    {
        wp_enqueue_script('ppm-customscrollbar-js', plugin_dir_url(__FILE__) . 'js/jquery.nicescroll.min.js', array('jquery'), '20120206', false);
    }
    add_action('wp_enqueue_scripts', 'csb_get_jquerynicescroll_script');
endif;

/*-------------------------------------------------------------------------------*/
/*   Include all require file
/*-------------------------------------------------------------------------------*/
require_once("inc/class.settings-api.php");
require_once("inc/fields.php");
require_once "inc/admin.php";
require_once "inc/Settings.php";
require_once "inc/import.php";

/*-------------------------------------------------------------------------------*/
/*   Active the jquery Nicescroll plugin
/*-------------------------------------------------------------------------------*/

// enqueue admin css 
if (!function_exists('csb_admin_style_enqueue')):
    function csb_admin_style_enqueue()
    {
        wp_enqueue_style('csb-admin-css', plugin_dir_url(__FILE__) . 'css/csb-admin.css', array(), '1.0.0', false);
    }
    add_action('admin_enqueue_scripts', 'csb_admin_style_enqueue');
endif;


if (!function_exists('ppm_customscrollbar_active_js')):
    function ppm_customscrollbar_active_js()
    {
        ?>


<?php
        function csb_retrive_option($option, $section, $default = '')
        {

            $options = get_option($section);

            if (isset($options[$option]))
            {
                return $options[$option];
            }

            return $default;
        }
    
        $asb_floating_scrollbar = csb_retrive_option('asb_floating_scrollbar', 'wedevs_basics', 'off');
        $asb_showscrollbar = csb_retrive_option('asb_showscrollbar', 'wedevs_basics', 'false');
        $scrollbar_color = csb_retrive_option('asb_color', 'wedevs_basics', '#46b3e6');
        $scrollbar_width = csb_retrive_option('asb_width', 'wedevs_advanced', '10px');
        $scrollbar_border = csb_retrive_option('asb_border', 'wedevs_advanced', '1px solid #fff');
        $scrollbar_border_radius = csb_retrive_option('asb_border_radius', 'wedevs_advanced', '4px');
        $scrollbar_speed = csb_retrive_option('asb_scrollspeed', 'wedevs_basics', '60');
        $scrollbar_railalign = csb_retrive_option('asb_railalign', 'wedevs_basics', 'right');
        $asb_cursor_image = csb_retrive_option('asb_cursor_image', 'wedevs_cursor_options', '');
        $asb_predefined_img = csb_retrive_option('asb_predefined_img', 'wedevs_cursor_options', '');
        $asb_cursor_source = csb_retrive_option('asb_cursor_source', 'wedevs_cursor_options', '');


        $scrollbar_mousescrollstep = csb_retrive_option('asb_mousescrollstep', 'wedevs_basics', '40');
        $scrollbar_autohidemode = csb_retrive_option('asb_autohidemode', 'wedevs_basics', 'false');
        $scrollbar_touchbehavior = csb_retrive_option('asb_touchbehavior', 'wedevs_basics', 'off');
        $scrollbar_background = csb_retrive_option('asb_background', 'wedevs_basics', '');
        if ($scrollbar_touchbehavior == "off")
        {
            $scrollbar_touchbehavior = 'false';
        } else
        {
            $scrollbar_touchbehavior = 'true';
        }
        ;
        if ($scrollbar_autohidemode == "true")
        {
            $scrollbar_autohidemode = "true";
        } elseif ($scrollbar_autohidemode == "false")
        {
            $scrollbar_autohidemode = 'false';
        } else
        {
            $scrollbar_autohidemode = "\"cursor\"";
        }
        ;

        if ($asb_cursor_source == "predefined")
        {
            $cursorPointer = $asb_predefined_img;
        } elseif ($asb_cursor_source == "customUrl")
        {
            $cursorPointer = $asb_cursor_image;
        } else
        {
            $cursorPointer = "";
        }




        ?>
<script>
// (function($) {
//     "use strict";
//     jQuery(document).ready(function($) {
//         <?php if ($asb_showscrollbar == "true" && $asb_floating_scrollbar == "off") : ?>
//         $("html").niceScroll({
//             hwacceleration: true,
//             cursorcolor: "<?php echo $scrollbar_color; ?>",
//             cursorwidth: "<?php echo $scrollbar_width; ?>",
//             cursorborder: "<?php echo $scrollbar_border; ?>",
//             cursorborderradius: "<?php echo $scrollbar_border_radius; ?>",
//             scrollspeed: <?php echo $scrollbar_speed; ?>,
//             railalign: "<?php echo $scrollbar_railalign; ?>",
//             background: "<?php echo $scrollbar_background; ?>",
//             touchbehavior: <?php echo $scrollbar_touchbehavior; ?>,
//             mousescrollstep: <?php echo $scrollbar_mousescrollstep; ?>,
//             autohidemode: <?php echo $scrollbar_autohidemode; ?>, // working 
//         });

//         <?php endif; ?>
//     });
// }(jQuery));
</script>

<style>
#ascrail2000 {
    z-index: 999 !important;
}
</style>
<?php
if(asbIsPremium()){
    require_once("inc/pro-script.php");
    require_once("inc/pro-css.php");
}

}
    add_action('wp_footer', 'ppm_customscrollbar_active_js');
endif;