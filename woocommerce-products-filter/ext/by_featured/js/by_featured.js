function woof_init_featured() {

    if (icheck_skin != 'none') {

        jQuery('.woof_checkbox_featured').iCheck({
            checkboxClass: 'icheckbox_' + icheck_skin.skin + '-' + icheck_skin.color,
            //checkboxClass: 'icheckbox_square-green'
        });

        jQuery('.woof_checkbox_featured').on('ifChecked', function (event) {
            jQuery(this).attr("checked", true);
            woof_current_values.featured = '1';
            woof_ajax_page_num = 1;
            if (woof_autosubmit) {
                woof_submit_link(woof_get_submit_link());
            }
        });

        jQuery('.woof_checkbox_featured').on('ifUnchecked', function (event) {
            jQuery(this).attr("checked", false);
            delete woof_current_values.featured;
            woof_ajax_page_num = 1;
            if (woof_autosubmit) {
                woof_submit_link(woof_get_submit_link());
            }
        });

    } else {

        jQuery('.woof_checkbox_featured').on('change', function (event) {
            if (jQuery(this).is(':checked')) {
                jQuery(this).attr("checked", true);
                woof_current_values.featured = '1';
                woof_ajax_page_num = 1;
                if (woof_autosubmit) {
                    woof_submit_link(woof_get_submit_link());
                }
            } else {
                jQuery(this).attr("checked", false);
                delete woof_current_values.featured;
                woof_ajax_page_num = 1;
                if (woof_autosubmit) {
                    woof_submit_link(woof_get_submit_link());
                }
            }
        });
    }
}
