<?php

if( !class_exists('CSBAdmin') ){
    class CSBAdmin{
        function __construct(){
			add_action( 'admin_enqueue_scripts', [$this, 'adminEnqueueScripts'] );
			add_action( 'admin_menu', [$this, 'adminMenu'] );
		}

		function adminEnqueueScripts( $hook ) {
			if( str_contains( $hook, 'advanced-scrollbar' ) ){
				wp_enqueue_media();
				wp_enqueue_style( 'advanced-scrollbar-admin-style', CSB_DIR_URL . 'build/admin.css', ['wp-components','wp-edit-blocks','wp-block-editor'], CSB_VERSION );
				wp_enqueue_script( 'advanced-scrollbar-admin-script', CSB_DIR_URL . 'build/admin.js', [ 'react', 'react-dom',  'wp-components', 'wp-i18n', 'wp-api', 'wp-util' ,'lodash', 'wp-media-utils' ,'wp-data','wp-core-data','wp-api-request','wp-element','wp-edit-post','wp-block-editor' ], CSB_VERSION, true );
			}
		}
		
	
		function adminMenu() {
			$menuIcon = "<svg stroke='currentColor' fill='none' strokeWidth={0} viewBox='0 0 24 24' height='1em' width='1em' {...props}><path d='M9.17154 16.8182L7.75732 18.2324L12 22.475L16.2426 18.2324L14.8284 16.8182L12 19.6466L9.17154 16.8182Z' fill='currentColor' /><path d='M14.8284 7.182L16.2426 5.76779L12 1.52515L7.75733 5.76779L9.17155 7.182L12 4.35357L14.8284 7.182Z' fill='currentColor' /><path fillRule='evenodd' clipRule='evenodd' d='M12 9.00018C13.6569 9.00018 15 10.3433 15 12.0002C15 13.657 13.6569 15.0002 12 15.0002C10.3431 15.0002 9 13.657 9 12.0002C9 10.3433 10.3431 9.00018 12 9.00018ZM12 11.0002C12.5523 11.0002 13 11.4479 13 12.0002C13 12.5525 12.5523 13.0002 12 13.0002C11.4477 13.0002 11 12.5525 11 12.0002C11 11.4479 11.4477 11.0002 12 11.0002Z' fill='currentColor' /></svg>";
	
			add_menu_page(
				__( 'Plugin Menu', 'advanced-scrollbar' ),
				__( 'Advanced Scrollbar', 'advanced-scrollbar' ),
				'manage_options',
				'advanced-scrollbar',
				'',
				'data:image/svg+xml;base64,' . base64_encode( $menuIcon ),
				20
			);
			add_submenu_page(
				'advanced-scrollbar',
				__( 'Dashboard', 'advanced-scrollbar' ),
				__( 'Dashboard', 'advanced-scrollbar' ),
				'manage_options',
				'advanced-scrollbar',
				[$this, 'dashboardPage']
			);
			add_submenu_page(
				'advanced-scrollbar',
				__( 'UPGRADE', 'advanced-scrollbar' ),
				__( 'UPGRADE', 'advanced-scrollbar' ),
				'manage_options',
				'advanced-scrollbar-upgrade',
				[$this, 'upgradePage']
			);
		}
	
		function dashboardPage(){ ?>
<div id='csbAdminDashboard' data-info=<?php echo esc_attr( wp_json_encode([
				'version' => CSB_VERSION,
				"dirUrl" => CSB_DIR_URL,
				"nonce" => wp_create_nonce("wp_rest"),
				"isPremium" => false //asbIsPremium()
			]) ); ?>></div>
<?php }

		function upgradePage(){ ?>
<div id='csbAdminUpgrade'>Coming soon...</div>
<?php }
    }
    new CSBAdmin;
}