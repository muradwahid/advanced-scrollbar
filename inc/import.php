<?php



if(!class_exists('ASB_Import')){
    class ASB_Import {
    
    
        private $key = 'admin-dashboard-secondssm';
        private $version = '1.0.0';
    
        public function __construct() {
            add_action('init', array($this, 'import_settings'));
        }
    
        public function import_settings() {

            $imported_ver = get_option('asb_import_ver', '0.0.0');
            if($imported_ver >= $this->version){
                return;
            }

            $tab_1 = get_option('wedevs_basics');
            $tab_2 = get_option('wedevs_advanced');
            $new_data = wp_parse_args($tab_1, $tab_2);

            $border = explode(' ', $new_data['asb_border']);
            $touch = $new_data['asb_touchbehavior'] == "on" ? 1 : 0 ;

            $new_data = wp_parse_args([
                'asb_gradient_color' => [
                    'color-1' => $this->isset($new_data, 'asb_gradient_color'),
                    'color-2' => $this->isset($new_data, 'asb_gradient_color_mid'),
                    'color-3' => $this->isset($new_data, 'asb_gradient_color_end'),
                ],
                'asb_border' => [
                    'top' => (int)$this->isset($border, 0),
                    'right' => (int)$this->isset($border, 0),
                    'bottom' => (int)$this->isset($border, 0),
                    'left' => (int)$this->isset($border, 0),
                    'style' => $this->isset($border, 1),
                    'color' => $this->isset($border, 2),
                ],
                'asb_width' => [
                    'spinner' => (int) $this->isset($new_data, 'asb_width'),
                    'unit' => 'px'
                ],
                // 'asb_width' =>(int) $this->isset($new_data, 'asb_width'),
                'asb_touchbehavior' => $touch,
                'asb_border_radius' => [
                    'spinner' => (int) $this->isset($new_data, 'asb_border_radius'),
                    'unit' => 'px'
                ], //(string)(int) $new_data['asb_border_radius'],
                // 'asb_border_radius' => (int) $this->isset($new_data, 'asb_border_radius') //(string)(int) $new_data['asb_border_radius'],
            ], $new_data);
            
            
            $tab_3 = get_option('wedevs_cursor_options');

            
            $cursor_data = [
                'shape'=> [
                    'type' => 'follow',
                    'customImg' => [
                        'img' => $this->isset($tab_3,'asb_predefined_img'),
                        'url'=> $this->isset($tab_3,'asb_cursor_image') 
                    ]
                    ],
                    'source' => $this->isset($tab_3,'asb_cursor_source')
            ];
    
            $data = get_option($this->key, null);
    
            if(!$data){
                update_option('csb_adv_scrollbar_cursor_settings', $cursor_data);
                update_option($this->key, $new_data);
                update_option('asb_import_ver', $this->version);
            }
    
        }

        public function isset($array, $key, $default = null){
            return isset($array[$key]) ? $array[$key] : $default;
        }
    }
    
    new ASB_Import();
}