<?php
    namespace app\Models;

    class Models{
        function __construct($container){
            $this->container = $container;
        }
        
        public function __get($property){
            if($this->container->{$property}) {
                return $this->container->{$property};
            }
        }
    }
?>