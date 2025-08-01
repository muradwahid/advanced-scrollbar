<?php
/*
 * Plugin Name: Advanced scrollbar
 * Author URI: http://bplugins.com
 * Description: Customize scrollbar of your website with unlimited styling and color using the plugin. 
 * Version: 1.1.5
 * Author: bPlugins
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: advanced-scrollbar
 */

/*-------------------------------------------------------------------------------*/
/*   Rendering all javaScript
/*-------------------------------------------------------------------------------*/

/* Latest jQuery of wordpress */
define('CSB_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.1.5' );
define('CSB_DIR_URL', plugin_dir_url(__FILE__));
define('CSB_DIR_PATH', plugin_dir_path(__FILE__));

if (!class_exists("CSB_Scrollbar")) {
    class CSB_Scrollbar {

        function __construct() {
            add_action("wp_enqueue_scripts", [$this,"enqueueScrollbarScript"]);
            add_action('wp_footer',[$this,"csbFooter"]);
        }

        function csbFooter(){
            $csb_data = get_option('asb-advanced-scrollbar-seconds');
            $csb_data = json_encode($csb_data);
            echo '<div id="csbScrollbar" isPremium="'. asbIsPremium() .'" data-scrollbar="'. esc_attr( $csb_data ) .'"></div>';
        }

        function enqueueScrollbarScript(){
            wp_enqueue_script('ppm-customscrollbar-js', CSB_DIR_URL . 'assets/js/jquery.nicescroll.min.js', array('jquery'), CSB_VERSION, false);
            wp_enqueue_style( 'csb-scrollbar-style', CSB_DIR_URL . 'build/scrollbar.css', array(), CSB_VERSION );
            wp_enqueue_script( 'csb-scrollbar-script', CSB_DIR_URL . 'build/scrollbar.js', array('react','react-dom','jquery'), CSB_VERSION, true );
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

/*-------------------------------------------------------------------------------*/
/*   Include all require file
/*-------------------------------------------------------------------------------*/
require_once "inc/Settings.php";
require_once "inc/import.php";
require_once "inc/cursor.php";
require_once "inc/admin.php";