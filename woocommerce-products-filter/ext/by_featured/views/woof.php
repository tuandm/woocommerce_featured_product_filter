<?php
if (!defined('ABSPATH'))
    die('No direct access allowed');

global $WOOF;
if (isset($WOOF->settings['by_featured']) AND $WOOF->settings['by_featured']['show'])
{
    ?>
    <div data-css-class="woof_checkbox_featured_container" class="woof_checkbox_featured_container woof_container">
        <div class="woof_container_overlay_item"></div>
        <div class="woof_container_inner">
            <input type="checkbox" class="woof_checkbox_featured" id="woof_checkbox_featured" name="featured" value="0" <?php checked('1', $WOOF->is_isset_in_request_data('featured') ? '1' : '', true) ?> />&nbsp;&nbsp;<label for="woof_checkbox_featured"><?php _e('Featured product', 'woocommerce-products-filter') ?></label><br />
        </div>
    </div>
    <?php
}


