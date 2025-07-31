<?php
if( !class_exists( 'CSBAdvScrollbarCursor' ) ){
	class CSBAdvScrollbarCursor{
		function __construct(){
			add_action( 'init', [ $this, 'registerPostMeta' ] );
			add_action( 'the_content', [ $this, 'theContent' ] );
			add_action("enqueue_block_assets",array( $this, 'enqueueBlockAssets'));
			add_action("enqueue_block_editor_assets",array( $this, 'enqueueBlockEditorAssets' ));
			add_action('wp_ajax_csbAdvScrollbarPremiumChecker', [$this, 'csbAdvScrollbarPremiumChecker']);
			add_action('wp_ajax_nopriv_csbAdvScrollbarPremiumChecker', [$this, 'csbAdvScrollbarPremiumChecker']);
			add_action('wp_ajax_csb_adv_scrollbar_cursor_data_settings', [$this, 'csb_adv_scrollbar_cursor_data_settings']);
			add_action('wp_ajax_csb_get_adv_scrollbar_cursor_data_settings', [$this, 'csb_get_adv_scrollbar_cursor_data_settings']);
			add_action('wp_ajax_nopriv_csb_get_adv_scrollbar_cursor_data_settings', [$this, 'csb_get_adv_scrollbar_cursor_data_settings']);
		}

		function registerPostMeta(){
			register_post_meta( '', 'csbAdvScrollBarCursor', [
				'show_in_rest' => true,
				'single' => true,
				'type' => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			] );
		}

		function theContent( $content ){
			$id = get_the_ID();
			$postMeta = get_post_meta( $id, 'csbAdvScrollBarCursor', true );

			if( !$postMeta ){
				return $content;
			}

			return $content . '<div id="csbAdvScrollBarCursor" data-cursor="'. esc_attr( $postMeta ) .'"></div>';
		}

		public function csb_adv_scrollbar_cursor_data_settings(){

			if (!wp_verify_nonce(sanitize_text_field(isset($_POST['nonce']) ? stripcslashes($_POST['nonce']) : null), 'wp_rest')) {
				wp_send_json_error('invalid request');
			}
			
			$data = json_decode(sanitize_text_field( stripcslashes($_POST['csbAvScrData'])), true);

			if(!$data){
				$data = get_option('csb_adv_scrollbar_cursor_settings', []);
				wp_send_json_success($data);
			}

			update_option('csb_adv_scrollbar_cursor_settings', $data);
			
			wp_send_json_success($data);

		}

		public function csb_get_adv_scrollbar_cursor_data_settings(){
			if (!wp_verify_nonce(sanitize_text_field($_POST['nonce']), 'wp_rest')) {
				wp_send_json_error('invalid request');
			}
			
			$data = get_option('csb_adv_scrollbar_cursor_settings', []);
			wp_send_json_success($data);
			

		}

		public function enqueueBlockAssets() {

			wp_enqueue_script( 'csb-adv-scrollbar-cursor', CSB_DIR_URL . '/build/cursor.js', array('react', 'react-dom', 'wp-util'), CSB_VERSION, true);
			wp_enqueue_style( 'csb-adv-scrollbar-cursor', CSB_DIR_URL . '/build/cursor.css', array(), CSB_VERSION);

			wp_localize_script( 'csb-adv-scrollbar-cursor', 'csbAdvScrollbarCursorConfig', array(
				'ajax_url' => admin_url( 'admin-ajax.php' ),
				'nonce' => wp_create_nonce('wp_rest'),
				'dirUrl' => CSB_DIR_URL
			));
		}

		function enqueueBlockEditorAssets(){
			wp_enqueue_script('csb-adv-scrollbar-cursor-settings', CSB_DIR_URL . '/build/settings.js', array('wp-compose','wp-data','wp-editor','wp-plugins','wp-components','wp-i18n','react','react-dom'), CSB_VERSION, true);
			wp_enqueue_style("csb-adv-scrollbar-cursor-settings", CSB_DIR_URL . '/build/settings.css', array(), CSB_VERSION);
		}

		function csbAdvScrollbarPremiumChecker(){
			$nonce = sanitize_text_field($_POST['_wpnonce'] ?? null);
			// wp_send_json_success( 'Invalid Request :' . wp_verify_nonce( $nonce, "wp_rest" ) );
			if( wp_verify_nonce( $nonce, "wp_rest" ) != 1 ){
				wp_send_json_error( 'Invalid Request' );
			}

			// wp_send_json_success( 'muradwahid :' . wp_verify_nonce( $nonce, "wp_rest" ) );
			
			wp_send_json_success([
				'isPremium' => asbIsPremium()
			]);
		}


	}
	new CSBAdvScrollbarCursor();	
}