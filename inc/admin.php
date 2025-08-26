<?php
if (!defined('ABSPATH')) {exit;}
if( !class_exists('CSBAdmin') ){
    class CSBAdmin{
        function __construct(){
			add_action( 'admin_enqueue_scripts', [$this, 'adminEnqueueScripts'] );
			add_action( 'admin_menu', [$this, 'adminMenu'] );

            add_action( 'wp_ajax_csb_adv_scrollbar_get_popular_plugins', [$this, 'get_popular_plugins'] );
            add_action( 'wp_ajax_adv_scrollbar_get_active_plugins', [$this, 'get_active_plugins'] );
            add_action( 'admin_notices', [$this, 'display_activation_notice'] );
            add_action( 'wp_ajax_adv_scrollbar_activated_plugin', [$this, 'activated_plugin'] );
		}

        public function get_popular_plugins () {

            if (!function_exists('plugins_api')) {
                require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
            }
            $cached_plugins = plugins_api('query_plugins', array(
                    'author' => 'bplugins',
                    'per_page' => 100
                ));

            wp_send_json_success($cached_plugins->plugins); 
        }

        public function get_active_plugins() {
            if (!isset($_GET['nonce']) || !wp_verify_nonce(sanitize_text_field($_GET['nonce']), 'wp_rest')) {
                wp_send_json_error(['message' => 'Invalid nonce or request.'], 400);
            }
        
            // Get the list of all installed plugins
            if (!function_exists('get_plugins')) {
                include_once ABSPATH . '/wp-admin/includes/plugin.php';
            }
        
            $installed_plugins = get_plugins();
        
            // Return the plugin basenames as an array
            $installed_plugin_slugs = array_keys($installed_plugins);
        
            wp_send_json_success($installed_plugin_slugs);
        }

        public function display_activation_notice() {
            // Check if transient is set
            $plugin_slug = get_transient('csb_scrollbar_show_activation_notice');

            $first_part = explode("/", $plugin_slug)[0];
            $cleaned_string = str_replace("-", " ", $first_part);

            if ($plugin_slug) {
                // Remove transient after displaying the notice
                delete_transient('csb_scrollbar_show_activation_notice');
        
                // Generate activation URL
                $activation_url = wp_nonce_url(
                    admin_url('plugins.php?action=activate&plugin=' . $plugin_slug),
                    'activate-plugin_' . $plugin_slug
                );
        
                // Display notice with activation button
                ?>
                <div class="notice notice-success is-dismissible advScrollbar-notice">
                    <p><?php esc_html_e(" $cleaned_string plugin was successfully installed.", 'advanced-scrollbar'); ?></p>
                    <p>
                        <a href="<?php echo esc_url($activation_url); ?>" class="button button-primary">
                            <?php esc_html_e('Activate Plugin', 'advanced-scrollbar'); ?>
                        </a>
                    </p>
                </div>
                <?php
            }
        }

        public function activated_plugin() {
            // Verify nonce
            if (!isset($_GET['nonce']) || !wp_verify_nonce(sanitize_text_field($_GET['nonce']), 'wp_rest')) {
                wp_send_json_error(['message' => 'Invalid nonce or request.'], 400);
            }

            $plugin_name = sanitize_text_field($_GET['plugin_name']) ?? false;
        
            include_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
            include_once ABSPATH . 'wp-admin/includes/plugin-install.php';
        
            try {
                // Fetch plugin information
                $api = plugins_api('plugin_information', ['slug' => $plugin_name, 'fields' => ['sections' => false]]);
                if (is_wp_error($api)) {
                    wp_send_json_error(['message' => 'Failed to fetch plugin information.']);
                }
        
                // Suppress unexpected output
                ob_start();
                $upgrader = new Plugin_Upgrader();
                $result = $upgrader->install($api->download_link);
                ob_end_clean();
            
                $plugin_slug = $plugin_name.'/'.$plugin_name.'.php';

                if ($result) {
                    // Set transient to show notice
                    set_transient('csb_scrollbar_show_activation_notice', $plugin_slug, 1000000); // Valid for 60 seconds
                    $redirect_url = admin_url('plugins.php?plugin_status=all');
                    wp_send_json_success(['message' => 'Plugin installed successfully.', 'redirectUrl' => $redirect_url]);

                } else {
                    wp_send_json_error(['message' => 'Plugin installation failed.']);
                }
            } catch (Exception $e) {
                wp_send_json_error(['message' => 'An unexpected error occurred: ' . $e->getMessage()]);
            }
        }


		function adminEnqueueScripts( $hook ) {
			if( str_contains( $hook, 'advanced-scrollbar' ) ){
				wp_enqueue_media();
				wp_enqueue_style( 'advanced-scrollbar-admin-style', CSB_DIR_URL . 'build/admin.css', ['wp-components','wp-edit-blocks','wp-block-editor'], CSB_VERSION );
				wp_enqueue_script( 'advanced-scrollbar-admin-script', CSB_DIR_URL . 'build/admin.js', [ 'react', 'react-dom',  'wp-components', 'wp-i18n', 'wp-api', 'wp-util' ,'lodash', 'wp-media-utils' ,'wp-data','wp-core-data','wp-api-request','wp-element','wp-edit-post','wp-block-editor' ], CSB_VERSION, true );
			}
		}
		
	
		function adminMenu() {
			$menuIcon = '<svg version="1.1" id="svg2334" xml:space="preserve" width="682.66669" height="682.66669" viewBox="0 0 682.66669 682.66669" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs2338"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath2348"><path d="M 0,512 H 512 V 0 H 0 Z" id="path2346" /></clipPath></defs><g id="g2340" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g id="g2342"><g id="g2344" clip-path="url(#clipPath2348)"><g id="g2350" transform="translate(396,321)"><path d="M 0,0 H -57.53 C -76.76,24.36 -106.55,40 -140,40 -173.45,40 -203.24,24.36 -222.47,0 H -280 l 140,181 z" style="fill:none;stroke:#ffffff;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" id="path2352" /></g><g id="g2354" transform="translate(116,191)"><path d="M 0,0 140,-181 280,0 H 222.47 C 203.24,-24.36 173.45,-40 140,-40 106.55,-40 76.76,-24.36 57.53,0 Z" style="fill:none;stroke:#ffffff;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:290, 45, 0, 45, 1000;stroke-dashoffset:0;stroke-opacity:1" id="path2356" /></g><g id="g2358" transform="translate(321,256)"><path d="m 0,0 c 0,-35.899 -29.102,-65 -65,-65 -35.899,0 -65,29.101 -65,65 0,35.898 29.101,65 65,65 C -29.102,65 0,35.898 0,0 Z" style="fill:none;stroke:#ffffff;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" id="path2360" /></g><g id="g2362" transform="translate(260,231.5)"><path d="M 0,0 C 10.71,1.63 18.8,9.83 20.5,20.5" style="fill:none;stroke:#ffffff;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" id="path2364" /></g><g id="g2366" transform="translate(231.5,260)"><path d="M 0,0 C 1.63,10.71 9.83,18.8 20.5,20.5" style="fill:none;stroke:#ffffff;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"   id="path2368" /></g></g></g></g></svg>';
	
			// add_menu_page(
			// 	__( 'Plugin Menu', 'advanced-scrollbar' ),
			// 	__( 'Adv Scrollbar', 'advanced-scrollbar' ),
			// 	'manage_options',
			// 	'advanced-scrollbar',
			// 	'',
			// 	'data:image/svg+xml;base64,' . base64_encode( $menuIcon ),
			// 	20
			// );
			// add_submenu_page(
			// 	'advanced-scrollbar',
			// 	__( 'Dashboard', 'advanced-scrollbar' ),
			// 	__( 'Dashboard', 'advanced-scrollbar' ),
			// 	'manage_options',
			// 	'advanced-scrollbar',
			// 	[$this, 'dashboardPage']
			// );
            add_options_page(
                __( 'Advanced Scrollbar Settings', 'advanced-scrollbar' ), // Page title
                __( 'Advanced Scrollbar Settings', 'advanced-scrollbar' ), // Menu title
                'manage_options',        // Capability
                'advanced-scrollbar',    // Menu slug
                [$this, 'dashboardPage'] // Callback
            );
		}

		function dashboardPage(){ ?>
			<div id='csbScrollbarDashboard' data-info=<?php echo esc_attr( wp_json_encode([
                'version' => CSB_VERSION,
                "dirUrl" => CSB_DIR_URL,
                "nonce" => wp_create_nonce("wp_rest"),
                "isPremium" => asbIsPremium(),
                "ajaxUrl" => admin_url('admin-ajax.php')
				]) ); ?>></div>
			<?php }
    }
    new CSBAdmin;
}


// add_action("admin_head", function() {});