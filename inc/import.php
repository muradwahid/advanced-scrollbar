<?php



if(!class_exists('ASB_Import')){
    class ASB_Import {
    
    
        private $key = 'admin-dashboard-secondssm';
    
        public function __construct() {
    
            if(CSB_VERSION <= '1.1.5'){
                add_action('init', array($this, 'import_settings'));
            }

    
        }
    
        public function import_settings() {

            $tab_1 = get_option('wedevs_basics');
            $tab_2 = get_option('wedevs_advanced');
            $tab_3 = get_option('wedevs_cursor_options');
            $new_data = wp_parse_args($tab_1, wp_parse_args($tab_2, $tab_3));

            $border = explode(' ', $new_data['asb_border']);
    
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
                'asb_border_radius' => [
                    'spinner' => (int) $this->isset($new_data, 'asb_border_radius'),
                    'unit' => 'px'
                ], //(string)(int) $new_data['asb_border_radius'],
            ], $new_data);
    
            $data = get_option($this->key, null);
    
            if(!$data){
                update_option($this->key, $new_data);
            }
    
        }

        public function isset($array, $key, $default = null){
            return isset($array[$key]) ? $array[$key] : $default;
        }
    }
    
    new ASB_Import();
}
